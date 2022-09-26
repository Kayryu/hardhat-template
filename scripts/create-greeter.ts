import { ethers, upgrades } from "hardhat";

async function main() {
  const greeterFactory = await ethers.getContractFactory("GreeterV1");
  const greeter = await upgrades.deployProxy(greeterFactory, ['Hello, world!'], { initializer: 'initialize' });
  console.log(greeter.deployTransaction.hash);

  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });