//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract GreeterV2 is Initializable {
  string greeting;
  string prefix;

  function initialize(string memory _greeting) public initializer {
    console.log("initialize a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return string(abi.encodePacked(prefix,'.',greeting));
  }

  function setGreeting(string memory _greeting) public {
    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
  }

  function setPrefix(string memory _prefix) public {
    console.log("Changing greeting from '%s' to '%s'", prefix, _prefix);
    prefix = _prefix;
  }
}
