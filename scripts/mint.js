const friends = [
    "0xd80DD0c02d1EA1E3Fe972dC1BDBAc92D02B4f131"
    
];
const existingContractAddr = "0xc9B228275939C446332b97887b9928a0C2938F60";

async function main() {
  const nft = await hre.ethers.getContractAt("DeathTrooperNFT", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmSrnq6XLfHM331ekt1pRkGj4u9NoN2FDJEjPnHXZCRBTo";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
