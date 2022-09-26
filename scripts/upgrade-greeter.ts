import { ethers, upgrades } from "hardhat";

async function main() {
  const GreeterV2Factory = await ethers.getContractFactory("GreeterV2");
  console.log(upgrades);
  // const greeter = await ethers.getContract("GreeterV1");
  // console.log(greeter);
  // supply address returned from create-mytoken.ts
  const greeterV2 = await upgrades.upgradeProxy('0x68A40f0A4a48BDCE9F7864C5A4a00d926e2Fec67', GreeterV2Factory);
  console.log("Greeter upgraded:", greeterV2.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });