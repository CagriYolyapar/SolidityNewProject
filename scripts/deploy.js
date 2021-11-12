async function main() {
  const DeathTrooperNFT = await hre.ethers.getContractFactory("DeathTrooperNFT");
  const nft = await DeathTrooperNFT.deploy();

  await nft.deployed();

  console.log("DeathTrooperNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
