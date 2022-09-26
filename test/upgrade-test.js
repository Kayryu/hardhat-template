const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Upgrade Greeter", function() {
  it("Should upgrade greeter v2", async function() {
        const GreeterV1 = await ethers.getContractFactory("GreeterV1");
        const greeter = await (upgrades.deployProxy(GreeterV1, ['Hello, world!'], { initializer: 'initialize' }));
        await greeter.deployed();
        
        expect(await greeter.greet()).to.equal("Hello, world!");
        await greeter.setGreeting("Hola, mundo!");
        expect(await greeter.greet()).to.equal("Hola, mundo!");

        const GreeterV2 = await ethers.getContractFactory("GreeterV2");
        const greeterAddress = greeter.address;
        greeterV2 = (await upgrades.upgradeProxy(
            greeter.address, GreeterV2
        ));
        expect(greeterV2.address).to.equal(greeterAddress);

        await greeterV2.setPrefix("Key");
        expect(await greeter.greet()).to.equal("Key.Hola, mundo!");
    });
});