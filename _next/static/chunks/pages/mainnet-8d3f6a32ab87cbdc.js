(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{12866:function(e,d,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mainnet",function(){return a(84771)}])},84771:function(e,d,a){"use strict";a.r(d),a.d(d,{default:function(){return f}});var n=a(29541),c=a(52519),s=a(93981),i=a(92626),r=a(26613),b=JSON.parse('{"tokens":{"1":[{"address":"0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898","bridgeAddress":"0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":101,"version":1}],"56":[{"address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","bridgeAddress":"0xb274202daBA6AE180c665B4fbE59857b7c3a8091","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":102,"version":1}],"204":[{"address":"0x2779106e4F4A8A28d77A24c18283651a2AE22D1C","bridgeAddress":"0x2779106e4F4A8A28d77A24c18283651a2AE22D1C","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":202,"version":1}],"324":[{"address":"0x3a287a06c66f9e95a56327185ca2bdf5f031cecd","bridgeAddress":"0x3a287a06c66f9e95a56327185ca2bdf5f031cecd","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":165,"version":1}],"1101":[{"address":"0x0D1E753a25eBda689453309112904807625bEFBe","bridgeAddress":"0x0D1E753a25eBda689453309112904807625bEFBe","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":158,"version":1}],"8453":[{"address":"0x3055913c90Fcc1A6CE9a358911721eEb942013A1","bridgeAddress":"0x3055913c90Fcc1A6CE9a358911721eEb942013A1","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":184,"version":1}],"42161":[{"address":"0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c","bridgeAddress":"0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":110,"version":1}],"59144":[{"address":"0x0D1E753a25eBda689453309112904807625bEFBe","bridgeAddress":"0x0D1E753a25eBda689453309112904807625bEFBe","decimals":18,"symbol":"CAKE","name":"Cake","endpointID":183,"version":1}]},"chains":[{"chainId":1,"chainName":"Ethereum"},{"chainId":56,"chainName":"BSC"},{"chainId":204,"chainName":"Opbnb Mainnet"},{"chainId":324,"chainName":"Zksync Era"},{"chainId":1101,"chainName":"Polygon zkEvm"},{"chainId":8453,"chainName":"Base"},{"chainId":42161,"chainName":"Arbitrum"},{"chainId":59144,"chainName":"Linea"}]}'),o=a(79101),t=a(29267),E=a(51304),A=a(38002),C=a(25144),D=a(98421);function f(){return(0,n.jsx)(E.n,{chainConfigs:o.p,children:(0,n.jsx)(u,{})})}function u(){let e=function(){let[e,d]=(0,s.useState)();return(0,s.useEffect)(()=>{(async()=>{let[e,a,n,s]=await Promise.all([i.Z.get("".concat(r.O.SERVER_ENDPOINT,"/api/bridge/v2/cbridge")),i.Z.get("".concat(r.O.SERVER_ENDPOINT,"/api/bridge/v2/debridge")),i.Z.get("".concat(r.O.SERVER_ENDPOINT,"/api/bridge/v2/stargate")),i.Z.get("".concat(r.O.SERVER_ENDPOINT,"/api/bridge/v2/meson"))]),t=e.data.data,E=a.data.data,A=s.data.data,C=n.data.data;d({defaultFromChainId:1,defaultToChainId:56,defaultTokenAddress:"0xdac17f958d2ee523a2206206994597c13d831ec7",defaultAmount:"",chainOrders:[56,204,1,42161,8453,728126428,7565164,137,43114,81457,59144,10],tokenOrders:["USDC","USDT","FDUSD","USDC.e","ETH","wBETH","wstETH","weETH","CAKE","UNI","AAVE","LDO","LINK","BTC","BTCB","WBTC","sUSDe","DOGE","ADA","DAI","XRP","PEPE","ELON","FLOKI","MAGA","BabyDoge","BABYGROK","PLANET","OMNI","AGI","FET","AIOZ","AI","NFP","CGPT","PHB","ZIG","NUM","GHX","PENDLE","RDNT","ROSE","HOOK","MASK","EDU","MBOX","BNX"],chainConfigs:o.p,providers:[(0,c.XD)({config:t,excludedChains:[],excludedTokens:{56:["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"],42161:["0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9","0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"]}}),(0,c.bn)({config:E,excludedChains:[],excludedTokens:{1:["cUSDCv3","0x5e21d1ee5cf0077b314c381720273ae82378d613"],56:["0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493","0x0000000000000000000000000000000000000000","0x9c7beba8f6ef6643abd725e45a4e8387ef260649"],137:["cUSDCv3"],42161:["cUSDCv3"],43114:["BNB"],7565164:["So11111111111111111111111111111111111111112","FmqVMWXBESyu4g6FT1uz1GABKdJ4j6wbuuLFwPJtqpmu","2kaRSuDcz1V1kqq1sDmP23Wy98jutHQQgr5fGDWRpump","2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"]}}),(0,c.zF)({config:C,excludedChains:[],excludedTokens:{}}),(0,c.IJ)({config:b,excludedChains:[],excludedTokens:{}}),(0,c.Cu)({config:A,excludedChains:[],excludedTokens:{42161:["SOL"]}})]})})()},[]),e}(),{onOpen:d}=(0,t.h)(),a=(0,s.useMemo)(()=>({theme:{colorMode:"dark",colors:{light:C.R,dark:D._}},http:{serverEndpoint:r.O.SERVER_ENDPOINT,deBridgeReferralCode:r.O.DEBRIDGE_REFERRAL_CODE},transfer:e,onClickConnectWalletButton:d}),[d,e]);return(0,n.jsx)(c.t_,{config:a,children:(0,n.jsxs)(A.A,{children:[(0,n.jsx)(c.Gv,{}),(0,n.jsx)(c.pZ,{})]})})}}},function(e){e.O(0,[3,543,557,482,924,888,774,179],function(){return e(e.s=12866)}),_N_E=e.O()}]);