require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remind concert grace drop supply ski'; 
let testAccounts = [
"0x20a3db405fa430cf76bfe886b134652ce17ebab56466002b6aac5c45bbf1bd3f",
"0x4cc32dcaae3e8bfbf7f6979bb86fab7ce169bea3198710202c4e96a7ae252dd0",
"0xa5dbcbe45e442a421c3e7573da38afddaea05d6a32199419a226651928446ee3",
"0xe24a6d6149d3074c3772a6e782913c308369c60864ee75c7d69a3ea6e93740c1",
"0xd623ed41e12b0dd9c5e6fc6850c40584dc5a12b597e0c2e91774d5370a942af9",
"0x3622e7c9030fae9a6c96161becbd30cac94c56a5f08920a9f793e50215ddf9d9",
"0x881d3658c60fc91a1ff97566ed9fa112d7ccc0b3283e4265a6370a497581974c",
"0x32c4dcc3465829f133095b6d604de5b579ec58a9242914882dbbfaefdbe57d6c",
"0x4726be326d648c7d3fabeb403a496423e8a75b7337c9c8b0d51b3f4e2fb20cd0",
"0x2096211ac8b1c79b438668db53ed9b65dd4a068d5b3008d83785e005eed0b79e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
