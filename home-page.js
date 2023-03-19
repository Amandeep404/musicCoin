// import { Web3 } from "web3";
// import contractABI from "./contract/contractAbi.json";
// const contractAddress = "0x1799b76108987c6E1e714e9e7F46B75D61930f34";
// const providerUrl = "https://rpc-mumbai.matic.today";
// const web3 = new Web3(providerUrl);
// const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

window.addEventListener("load", async () => {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // Usage example
  const ethereumAddressfromCookie = getCookie("ethereum_address");
  if (ethereumAddressfromCookie) {
    // Use the ethereumAddress value in your code
    console.log(`Ethereum address: ${ethereumAddressfromCookie}`);
    const oxAddress = document.querySelector(".ox");
    if (oxAddress) {
      const shortenedAddress =
        ethereumAddressfromCookie.substring(0, 5) +
        "...." +
        ethereumAddressfromCookie.substring(
          ethereumAddressfromCookie.length - 5
        );
      oxAddress.textContent = shortenedAddress || "Not Found";
    }
  } else {
    console.log("Ethereum address cookie not found");
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const mintButton = document.getElementById("mint-btn");
//   mintButton.addEventListener("click", mintMusic);
// });

// // Add an event listener to the "Mint Music" button
// const mintButton = document.getElementById("mint-btn");
// mintButton.addEventListener("click", async () => {
//   console.log("Mint button clicked");

//   // Create the token URI using the IPFS hash of the file
//   const tokenURI = `https://gateway.pinata.cloud/ipfs/QmYKPj9HAS7dz5EVmeP9762MHz7hSkAsr9WN83KEwMW8ez}`;

//   // Mint the NFT using the contract
//   const accounts = await web3.eth.getAccounts();
//   const gasPrice = await web3.eth.getGasPrice();
//   const gasLimit = 300000;
//   const result = await contractInstance.methods
//     .mintMusic(tokenURI)
//     .send({ from: accounts[0], gasPrice, gasLimit });
//   console.log(result);
// });
