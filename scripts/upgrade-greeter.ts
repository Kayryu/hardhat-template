import { ethers, upgrades } from "hardhat";

async function main() {
    const GreeterV2Factory = await ethers.getContractFactory("GreeterV2");
    const greeter = await ethers.getContract("Greeter");
  // supply address returned from create-mytoken.ts
  const greeterV2 = await upgrades.upgradeProxy(greeter.address, GreeterV2Factory);
  console.log("Greeter upgraded:", greeterV2.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });