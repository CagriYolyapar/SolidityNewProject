const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "DeathTrooper",
      attributes: [
        {
          "trait_type": "Faction",
          "value": "Empire"
        },
        {
          "trait_type":"Armor",
          "value":"Plastoid"
        },
        {
          "trait_type":"Weapon",
          "value":"D-17 Blaster Rifle"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.pinata.cloud/ipfs/Qmcvr69Lp2RzzzxH385jTAigf3j6pD8x6KcxPSEeXNbnr9",
      description: "Destroy the Rebels!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
