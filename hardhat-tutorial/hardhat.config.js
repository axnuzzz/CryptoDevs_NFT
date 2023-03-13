require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

//deployed address : 0xE943CFEe999F90A51137927800d32FDa841118EE

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
