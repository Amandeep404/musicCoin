
let isRedirected = false;
// wait for the page to load before running any code
window.addEventListener('load', async () => {
  // check if Metamask is installed
  if (typeof window.ethereum !== 'undefined' && window.ethereum.isConnected()) {
    // Get user's Ethereum address
    const ethereumAddress = window.ethereum.selectedAddress;

    // Redirect user to home page
   
  }

});

// handle button click event
const createAccountButton = document.getElementById("create-account-button");
createAccountButton.addEventListener("click", async () => {
  // check if Metamask is installed
  if (typeof window.ethereum !== 'undefined') {
    // connect to Metamask
    await window.ethereum.enable();
    // get the user's account address
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const address = accounts[0];
    console.log(`Connected to Metamask account: ${address}`);
    
    document.cookie = `ethereum_address=${window.ethereum.selectedAddress}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;

     window.location.replace("home-page.html");
    
  } else {
    console.log('Metamask is not installed');
    alert('Please install Metamask to use this feature');
  }
});

