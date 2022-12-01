import { useEffect, useState } from "react";
// import { Magic } from "magic-sdk";
// import { ConnectExtension } from "@magic-ext/connect";
// import Web3 from "web3";
import Navbar from "@components/layout/Navbar";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
// import { magic } from "@utils/constants";

// const web3 = new ethers.providers.Web3Provider(magic.rpcProvider);
// const web3 = new Web3(Web3.givenProvider);
// const web3 = new Web3(magic.rpcProvider);

export default function MagicLogin() {
  const [account, setAccount] = useState('');
  const history = useHistory();
  // const sendTransaction = async () => {
  //   const publicAddress = (await web3.eth.getAccounts())[0];
  //   const txnParams = {
  //     from: publicAddress,
  //     to: publicAddress,
  //     value: web3.utils.toWei("0.01", "ether"),
  //     gasPrice: web3.utils.toWei("30", "gwei")
  //   };
  //   web3.eth
  //     .sendTransaction(txnParams)
  //     .on("transactionHash", (hash) => {
  //       console.log("the txn hash that was returned to the sdk:", hash);
  //     })
  //     .then((receipt) => {
  //       console.log("the txn receipt that was returned to the sdk:", receipt);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   login();
  // });

  // const login = async () => {
  //   web3.eth
  //     .getAccounts()
  //     .then((accounts) => {
  //       console.log(accounts)
  //       setAccount(accounts?.[0]);
  //       Cookies.set('user', accounts[0]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const signMessage = async () => {
  //   const publicAddress = (await web3.eth.getAccounts())[0];
  //   const signedMessage = await web3.eth.personal
  //     .sign("My Message", publicAddress, "")
  //     .catch((e) => console.log(e));
  //   console.log(signedMessage);
  // };

  // const showWallet = () => {
  //   magic.connect.showWallet().catch((e) => {
  //     console.log(e);
  //   });
  // };

  // const disconnect = async () => {
  //   await magic.connect.disconnect().catch((e) => {
  //     console.log(e);
  //   });
  //   // setAccount('');
  //   Cookies.remove('user');
  //   history.push('/')
  // };

  return (
    <>
      <div>
        {/* <nav className="flex flex-col tablet:flex-row justify-between text-white  items-center px-4 ">
          <div className="cursor-pointer pt-2" onClick={() => history.push('/')}>
            <h1 className="text-2xl font-semibold mb-[-9px]">MAVEN</h1>
            <p className="tracking-[8px]">HOUSE</p>
            <img src="/images/navbar/maven.png" alt="" />
          </div>
        </nav> */}
      </div>
      <div className="app">
        <h2>Magic Connect</h2>
        {/* {account && (
          <>
            <button onClick={showWallet} className="button-row">
              Show Wallet
            </button>
            <button
              onClick={sendTransaction}
              className="button-row">
              Send Transaction
            </button>
            <button
              onClick={signMessage}
              className="button-row">
              Sign Message
            </button>
            <button onClick={disconnect} className="button-row">
              Disconnect
            </button>
          </>
        )} */}
      </div>
    </>
  );
}
