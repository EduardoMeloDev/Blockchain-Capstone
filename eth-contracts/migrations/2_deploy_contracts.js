var Verifier = artifacts.require("verifier.sol");
var ERC721Mintable = artifacts.require("MyERC721PropertyToken.sol");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");


module.exports = function (deployer) {

  let symbol = 'EDUT'
  let name = 'EDUTOKENERC721'
  let baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1'

  deployer.deploy(ERC721Mintable, name, symbol, baseTokenURI);
  deployer.deploy(Verifier)
    .then(() => {
      return deployer.deploy(SolnSquareVerifier, Verifier.address, name, symbol, baseTokenURI)
    });

};