require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rifle spice clutch gesture permit bottom talent'; 
let testAccounts = [
"0xc85d8166b9ab81d795bcb341ff6ced69cbf48b36757bd1392a97245ad3285cf6",
"0x887762bb697fff55d54a7f79e139f76dc8a0ecf973e9ce787c7a9ce912774c2c",
"0x45f04fe43e37443afb1eb90b53c180849f2dbfc42f5e3272f3f3b7b68132106e",
"0xed2e31c107220f7feaaa89f29b8d65cc57affb09726392509ba3866c4228dc07",
"0x2d4a92c3235500f6fedaf4c90f94a412a1b000941405a072e20a017ca9bdcfa7",
"0x7904805db06034411ae385110e607631c31bd2ea31ded106d0d3374efff7a752",
"0x7c29617162e50b0cdba9edd278f6860244e620af6c5752acee53de272bf886f0",
"0x459a7e58a9aea436aa5978992f4d94ec2b63df4f188fffcc437d22fcf7846afc",
"0xbbbc2e7b928e5e14bf28f5c724bd7bad5d41e3e4ecbae5252960eafd9053a69c",
"0x18175f53d7a7f2f5e9b7ef21d2772c5d460e8341c2e263cda4748bb6139077b1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

