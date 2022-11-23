import { useState } from 'react'
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import Header from './components/Header';

const magic = new Magic(import.meta.env.VITE_MAGIC_KEY, {
  network: "goerli",
  locale: "en_US",
  extensions: [new ConnectExtension()]
});
const web3 = new Web3(magic.rpcProvider);

function App() {
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState("");

  const sendTransaction = async () => {
    const publicAddress = (await web3.eth.getAccounts())[0];
    const txnParams = {
      from: publicAddress,
      value: web3.utils.toWei("0.01", "ether"),
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
    try {
      await magic.auth.loginWithEmailOTP({ email });
      web3.eth.getAccounts();
    } catch (error) {
      console.log(error);
    }
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

  const disconnect = async () => {
    await magic.connect.disconnect().catch((e) => {
      console.log(e);
    });
    setEmail(null);
  };

  return (
    <div className="App">
      {!email && (
        <div className="container">
        <h1>Please sign up or login</h1>
        <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter your email"
            onChange={(event) => {
                setEmail(event.target.value);
            }}
        />
        <button onClick={login}>Send</button>
    </div>
      )}

      {email && (
        <>
          <Header username={email} />
          <button onClick={showWallet} className="button-row">
            Show Wallet {showWallet}
          </button>
          <button onClick={sendTransaction} className="button-row">
            Send Transaction
          </button>
          <button onClick={signMessage} className="button-row">
            Sign Message
          </button>
          <button onClick={disconnect} className="button-row">
            Disconnect
          </button>
        </>
      )}
    </div>
  )
}

export default App
