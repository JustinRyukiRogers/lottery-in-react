//request web3 connection to metamask
import Web3 from "web3";
window.ethereum.request({ method: "eth_requestAccounts" });
const web3 = new Web3(window.ethereum);
export default web3;
