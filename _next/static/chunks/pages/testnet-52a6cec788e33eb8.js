(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{80363:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testnet",function(){return a(66145)}])},66145:function(e,n,a){"use strict";a.r(n),a.d(n,{bridgeConfig:function(){return b},default:function(){return h}});var t=a(10239),i=a(74742),d=a(8600),s=JSON.parse('{"q":[{"id":"arb-sepolia","name":"Arbitrum Sepolia","chainId":"0x66eee","address":"0x0d12d15b26a32e72A3330B2ac9016A22b1410CB6","tokens":[{"id":"usdc","addr":"0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d","min":"0.5","max":"20000","decimals":6},{"id":"eth","addr":"0x0000000000000000000000000000000000000000","decimals":18,"min":"0.001","max":"2"}]},{"id":"sepolia","name":"Sepolia Testnet","chainId":"0xaa36a7","address":"0x0d12d15b26a32e72A3330B2ac9016A22b1410CB6","tokens":[{"id":"usdc","addr":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238","decimals":6,"min":"0.5","max":"20000"},{"id":"usdt","addr":"0xd53e9530107a8d8856099d7d80126478d48e06dA","decimals":6,"min":"0.5","max":"20000"},{"id":"eth","addr":"0x0000000000000000000000000000000000000000","decimals":18,"min":"0.001","max":"2"}]},{"id":"bnb-testnet","name":"BNB Testnet","chainId":"0x61","address":"0x0d12d15b26a32e72A3330B2ac9016A22b1410CB6","tokens":[{"id":"usdc","addr":"0x64544969ed7EBf5f083679233325356EbE738930","decimals":18,"min":"0.5","max":"20000"},{"id":"usdt","addr":"0x337610d27c682E347C9cD60BD4b3b107C9d34dDd","decimals":18,"min":"0.5","max":"20000"}]},{"id":"opt-sepolia","name":"OP Sepolia","chainId":"0xaa37dc","address":"0x0d12d15b26a32e72A3330B2ac9016A22b1410CB6","tokens":[{"id":"usdc","addr":"0x5fd84259d66Cd46123540766Be93DFE6D43130D7","decimals":6,"min":"0.5","max":"20000"},{"id":"eth","addr":"0x0000000000000000000000000000000000000000","decimals":18,"min":"0.001","max":"2"}]},{"id":"tron-testnet","name":"Tron Nile Testnet","chainId":"3448148188","address":"TAp1rBTjC4tefEMR54vT2NDwLEhDL7E7Jo","tokens":[{"id":"usdc","addr":"TNavP4dSwhGssWjX4gR8NvrMsgAQvBWoyY","decimals":6,"min":"0.5","max":"20000"},{"id":"usdt","addr":"THkCEyw2uaJYPfxb2BNizGuiosCkyAsbWW","decimals":6,"min":"0.5","max":"20000"}]}]}');let r=[{id:97,name:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrl:"https://bsc-testnet.bnbchain.org",explorer:{name:"BSC Testnet",url:"https://testnet.bscscan.com"}},{id:1001,name:"Klaytn Testnet Baobab",nativeCurrency:{name:"KLAY",symbol:"KLAY",decimals:18},rpcUrl:"https://public-en-baobab.klaytn.net",explorer:{name:"Klaytn Scope",url:"https://baobab.klaytnscope.com"}},{id:11155111,name:"Sepolia",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrl:"https://ethereum-sepolia-rpc.publicnode.com",explorer:{name:"Sepolia Scan",url:"https://sepolia.etherscan.io"}},{id:421614,name:"Arbitrum Sepolia Testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrl:"https://sepolia-rollup.arbitrum.io/rpc",explorer:{name:"Sepolia ArbiScan",url:"https://sepolia.arbiscan.io/"}},{id:11155420,name:"OP Sepolia",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrl:"https://sepolia.optimism.io",explorer:{name:"OP Sepolia Scan",url:"https://sepolia-optimistic.etherscan.io"}},{id:3448148188,name:"Tron Nile Testnet",nativeCurrency:{name:"TRX",symbol:"TRX",decimals:6},rpcUrl:"https://api.nileex.io",explorer:{name:"Tron Nile Scan",url:"https://nile.tronscan.org/",tokenUrlPattern:"https://nile.tronscan.org/#/token20/{0}"},chainType:"tron"}];var o=a(35862),c=a(38391),l=a(52862),m=a(217),p=a(86368),u=a(44999);let b={appName:l.O.APP_NAME,assetPrefix:l.O.ASSET_PREFIX,appearance:{bridgeTitle:"BNB Chain Cross-Chain Bridge Testnet",theme:{dark:o._,light:c.R}},http:{refetchingInterval:3e4,apiTimeOut:6e4,deBridgeAccessToken:"",serverEndpoint:l.O.SERVER_ENDPOINT,mesonEndpoint:"https://testnet-relayer.meson.fi/api/v1"}};function h(){return(0,t.jsx)(m.n,{chainConfigs:r,children:(0,t.jsx)(x,{})})}function x(){let e=function(){let[e,n]=(0,d.useState)();return(0,d.useEffect)(()=>{(async()=>{n({defaultSelectedInfo:{fromChainId:97,toChainId:3448148188,tokenSymbol:"USDT",amount:""},order:{chains:[],tokens:["USDC","USDT"]},displayTokenSymbols:{},meson:{config:s.q,exclude:{chains:[],tokens:{}},bridgedTokenGroups:[]}})})()},[]),e}(),{onOpen:n}=(0,p.h)();return(0,t.jsx)(i.t_,{config:b,transferConfig:e,chains:r,onClickConnectWallet:n,children:(0,t.jsx)(u.A,{children:(0,t.jsx)(i.vi,{})})})}}},function(e){e.O(0,[636,64,38,76,270,888,774,179],function(){return e(e.s=80363)}),_N_E=e.O()}]);