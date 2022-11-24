import { useEffect, useState } from 'react'
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import Header from './components/Header';
import Login from './components/Login';
import Announcement from './components/Announcement';

const magic = new Magic(import.meta.env.VITE_MAGIC_KEY, {
  network: "goerli",
  locale: "en_US",
  extensions: [new ConnectExtension()]
});
const web3 = new Web3(magic.rpcProvider);

function App() {
  const [email, setEmail] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
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
      to: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      value: web3.utils.toWei("0.5", "ether"),
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
      .sign("My Message", publicAddress, "")
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

  return (
    <div className="App">
      <Announcement/>
      {!isLoggedIn ? (
        <div className="container">
          <Login/>
        </div>
      ) : (
        <>
          <Header signMessageButton={signMessage} showWalletButton={showWallet} sendButton={sendTransaction} logoutButton={logout} />
        </>
      )}
    </div>
  )
}

export default App
