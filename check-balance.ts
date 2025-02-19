import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';

// for to check balances on any wallet
const suppliedPublicKey = process.argv[2];
let publicKey;
if (!suppliedPublicKey) {
  publicKey = new PublicKey('48YJZcq15botTTXNkv2LLWewyZLxb6z9aEjYNaH3BkSn');
  //throw new Error("Provide a public key to check the balance of!");
} else {
  publicKey = new PublicKey(suppliedPublicKey);
}


//const publicKey = new PublicKey("48YJZcq15botTTXNkv2LLWewyZLxb6z9aEjYNaH3BkSn");

//const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const connection = new Connection(clusterApiUrl("devnet"));
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`);


// Next should:
// add instructions to handle invalid wallet addresses
// Modify the script to connect to mainNet and look up some famous Solana wallets. Try toly.sol, shaq.sol or mccann.sol.