import { useEffect, useState } from 'react'
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import Header from './components/Header';
import Login from './components/Login';
import Announcement from './components/Announcement';
import SendTransaction from './components/SendTransaction';

const magic = new Magic(import.meta.env.VITE_MAGIC_KEY, {
  network: "goerli",
  locale: "en_US",
  extensions: [new ConnectExtension()]
});
const web3 = new Web3(magic.rpcProvider);

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMetadata, setUserMetadata] = useState({});

  useEffect(() => {
    magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn);
      if (magicIsLoggedIn) {
        const metadata = await magic.user.getMetadata();
        setPublicAddress(metadata.publicAddress);
        setUserMetadata(metadata);
      }
    });
  }, [isLoggedIn]);

  const sendTransaction = async () => {
    const publicAddress = (await web3.eth.getAccounts())[0];
    const txnParams = {
      from: publicAddress,
      to: toAddress,
      value: web3.utils.toWei(amount, "ether"),
      gasPrice: web3.utils.toWei("30", "gwei")
    };
    web3.eth
      .sendTransaction(txnParams)
      .on("transactionHash", (hash) => {
        console.log("the txn hash that was returned to the sdk:", hash);
      })
      .then((receipt) => {
        console.log("the txn receipt that was returned to the sdk:", receipt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = async () => {
    await magic.auth.loginWithEmailOTP({ email });
    web3.eth.getAccounts();
    setIsLoggedIn(true);
  };

  const signMessage = async () => {
    const publicAddress = (await web3.eth.getAccounts())[0];
    const signedMessage = await web3.eth.personal
      .sign(message, publicAddress, "")
      .catch((e) => console.log(e));
    console.log(signedMessage);
  };

  const showWallet = () => {
    magic.connect.showWallet().catch((e) => {
      console.log(e);
    });
  };

  const logout = async () => {
    await magic.connect.disconnect().catch((e) => {
      console.log(e);
    });
    setIsLoggedIn(false);
  };

  const emilInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const toAddressInputHandler = (e) => {
    setToAddress(e.target.value);
  };

  const amountInputHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div class="container mx-auto">
          <Login emailInputData={emilInputHandler} loginButton={login} />
        </div>
      ) : (
        <>
          <Header signMessageButton={signMessage} showWalletButton={showWallet} logoutButton={logout} />
          <div class="flex items-center justify-center">
            <SendTransaction toAddressInputData={toAddressInputHandler} amountInputData={amountInputHandler} sendButton={sendTransaction} />
          </div>
        </>
      )}
    </div>
  )
}

export default App
