import Web3 from "web3";
import { MetaMaskInpageProvider } from "@metamask/providers";

let web3: Web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum as MetaMaskInpageProvider);
  try {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.error("Usuário negou o acesso ao MetaMask");
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.log("MetaMask não detectado. Conectando ao Ganache na porta 8545.");
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

export default web3;
