require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oYsF3Ze-uGIslFwxLKDY6yR5bd5Bw2Pg',
      accounts: ['a280a17e0450e0af8765a3f0e408904af2d7e5de22280237d5130ff6494c4ce3']

    }
  }
}