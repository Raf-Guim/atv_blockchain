import web3 from "./web3";
import Certificate from "./contracts/Certificate.json";

const contractAddress = "0xBe474160dEbe7f2Df7FA7bb11b94BaB1574f17c3";
const contractABI = Certificate.abi;

const certificateContract = new web3.eth.Contract(contractABI, contractAddress);

export default certificateContract;
