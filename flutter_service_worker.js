'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f4b314a78af55d5a3ab54b1936d68832",
"version.json": "3906fc5d38199c243ab81a45fee32c66",
"index.html": "5d2abdb7584555fe10d0635fac172326",
"/": "5d2abdb7584555fe10d0635fac172326",
"main.dart.js": "e556c2ffe910a92c12ee40e68a84ac7a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"manifest.json": "4505293d75686ae0fa11806f6a3c6104",
".git/config": "2da79b4d831179c3519da94ce8fac2e0",
".git/objects/59/d02356c001abaf3d68d3854813e8ef3d413d1a": "295c11faa9044a848245c0ea77158f8b",
".git/objects/0c/17f0fed8a469640ebabaee450de5fdd0bcb95c": "39416465c49a18c7058e4f525840e003",
".git/objects/3b/fd35431e43e6cc30409fd5e5b0de700ad04bea": "f7b47cc67316be57df235b50569fad2a",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/67/a551e13a5279e6f33f09af464560df051945f3": "1a167ecb07d8e13cdf38b7a0de095099",
".git/objects/93/a5b956277ab00ac7282ae36890693b3973b919": "08a3b3068cd58439bd55074b6991706c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/19c7beafa3615c4d93956e7e0c223efafae4e7": "589a852fe8bb400b7c74469a4b350ad7",
".git/objects/0e/552b3f84d69e5dcc2a4e48a6c3978d5e595a35": "778eccc195c816399a8898c526c3db0e",
".git/objects/5a/f5ec5c6c95e8be7c910c53c6a1521e60da3d04": "3273fe92393fdcacf1194774bfa86c1f",
".git/objects/05/94b347f02598032f7b7048d040aae61244b81d": "b0eec150b6ee3e726db62db2cff20085",
".git/objects/a3/c1abe8450e6d418a4f65679e22766ea6cbd34e": "56e8ce41acdc09537f2bca383d6ee9bf",
".git/objects/b5/44c5184201a8130242e8a2b6f73c8bc2ee4258": "bf5516c1fbd9c1989d85e4bd7aef321d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/f050072eb4bf625383b1f244f2b792fef7fcd7": "92cfbf124bdd3dabd341146b90a23263",
".git/objects/d0/e9b909c7cff0b4b2448f5b66aab7071d1b843e": "cc9c2441830fbe69219c41464c1efef6",
".git/objects/b4/14dc9fb8ad1bd5ce1c4ef47bfcf35c8c92a183": "c2073046e321a707ccf60d20fc31e648",
".git/objects/a5/7c899fae2d74bebc93ff128bae4b9add26f4ea": "be4d4dd36e7ae3fd1094d2a61399a3ef",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/f4/ecc94a2940d28b4d59dcb2a514ba17d5457777": "eeda6ab34b742d7d88bd748bdfca14db",
".git/objects/f3/9144688b6afa3e9316e76c4805e161608affd9": "d39930c2b38e7bbe166e851fa3cb9002",
".git/objects/ee/c5de2a1c97c6bbb222dc9f3d8d8877efa6d084": "bf473316a24c8af97f065f87c8c122ee",
".git/objects/fc/b11f13f1deddd72f9a41720a7dae46329f2488": "1b82baa70e5af3413dc68efa8ad1df44",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/75de6fa6ad6a4b04b75ce88ea8fb415c6e3545": "fecd34767b835bb1d5a5f3999e72aebd",
".git/objects/c8/a3d674e649dd6a6785ed160f806efdb3e89e70": "66d70201074c37a978bcf31177c19723",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/c1/d07f3d56fe198605620b2b7c6aa25711b1c119": "e841924ebf8d62ec27023042f929bbd5",
".git/objects/c6/397e0942e92a6dc61efd96fc883bdc84efbe54": "a764c6a515b3fae348367f5e5569f222",
".git/objects/ec/12e9c34caeab1ee07547f02300cc562f99d28a": "37eb67c430aa16e390ed6ff9d61d1da4",
".git/objects/4e/ad447215d3058114c05321c2f16cdf110fc6ce": "1f387c459eed8887985ca8b3866c7d3b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/aaeb5393cf7039cab66ae984fc489c3f66add5": "9e3e01dd1e26ec190be33991e424176b",
".git/objects/29/502f97f93e055a82913df937248989100aec7e": "716262239f304be9dd983581be0b0513",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/89/6653071aaca97feebb1269f2bbef6af5092369": "4d6279ea5b4122be0887fa92df0792b0",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/87/218e518a0d4ac26241aaa5cee16b5697be7bea": "95745373b87a5ce9d1d39c0499c9af76",
".git/objects/28/e424c4c7242451157d20b9655bf61023bbfa5b": "71040d94112bd3b91908228b5e34797c",
".git/objects/7e/4f12e68166dace8bbb1c6558fda5feba29da85": "de525febe74d57a31de598bf1475ba05",
".git/objects/21/eb683795341eae5907ca325829910cd194356c": "3c94a88205cb5e4374b6e15dc3d52370",
".git/objects/72/dac36370a94b64b32076250f7e58b8fb199b9e": "a1c37b7a22a59c48faae23501d7a056d",
".git/objects/44/97f71d685d551ba6ee7dc82b32987508762276": "02459aac0e513e33dc1d8d1597b4037d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/ca18384cc1e59a0b12f6cb3dd6f804d06036e2": "bdacff18273514283c2548e1f9e17806",
".git/objects/9a/47c95db369d5c7589d9d65cd23b4fdc20f0e8e": "f58d862bf02bf1421d593fdffbc6981a",
".git/objects/09/3bfa2f2edfc3e82be9fbebbd05677056e5e4d6": "d76eb11250b7c20b6876e752ef077f53",
".git/objects/5d/e0abfe7c9420d68998664d68e3c02faf9e98e6": "bdafc81131f41b889def5d6daf685601",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/96/48dbc564ae5a409d5547e39eeb907bac361a48": "173f9c6db5ca28a85b228983e865c6a4",
".git/objects/96/125180285f7dd2008f90f03fce3f4c4de50ba8": "128ab3fec40348f6ace042809950c089",
".git/objects/3a/4c39ead8fdce15bd1a1cb7a20ee4aa6e7bc304": "2ea339d9091235a11c0bc4a2bdd52edf",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/5b/9ef37e54317fcda12e3192106451fb72f274cf": "fa33db849081e9f1d4d53ff2828b0f77",
".git/objects/01/8b6f831e5a74082faccf1a4652bbbbed9cf051": "c98a13cfd7085fd2da76546bbf825ebf",
".git/objects/d3/6edad8fac04b5df0e9794e6dcc33c80cfb9123": "b7f4a7d4213ed5a18f98b8dc32925bf9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/91a029006aa64065442d1b338ca9e75b429b36": "a5f19c135f71f9ac6619b74552a96266",
".git/objects/dd/bad770f3746429c40ba42b8afdd181a7fc700f": "11677e8d5ae6a1c5418a1d6a276d7774",
".git/objects/b6/3a0ee17655367c35fb62aca8c927634daefd87": "837741ce15dd36d100c523b5a2315c61",
".git/objects/aa/5c9334ea78324e4b1ca77869438c17091e3549": "3df4a7944df81e3bc804cb8aafc90797",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/c3/86557e9a3a3e53db1d0fdb2b38e02e3e82c7e7": "dcfaeed2ab4c6c98cf11df571825a31a",
".git/objects/c3/8def1808258f49a7fa64a0955e38b833941410": "4ad0ea612e1611708e28555ad55ee45d",
".git/objects/ea/57d92ee9133749554a722038123bbb33bb9f2a": "d378696c651fe48e45d1330dde867d1b",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f9/872500022a6bcfe15219dc73c61a83dc08a5f2": "0c4c86256b2e912bed1d424d46ecc3e1",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/f3f08df15221a09d1f79bc81203f92a1af44f4": "181e826286748c4e37d966fb20b50185",
".git/objects/f6/e0fdeca830d70eab7dbc5f12f06fc8ced36ff4": "49310a8c4f851a50c3c460afff0002ee",
".git/objects/e9/4fc9fd97a14284bbe945e8aa2562849b00e30e": "03912cb839e89dcf14187f8bfcbf3572",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/ce/bf6e71c5ca6b7f52d5cb9a39f1243caa674ec3": "e1a13d58d4eb830ab34ee15ab17ad818",
".git/objects/70/06d2202fa939fe84f36bfcf67f5ee69bda714d": "ec0e3c688f24ca1a564e54fa52020083",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/12/3d54e8a4a260f13e39a1012c0d7310f5b6aea1": "18e990db4de0867f9a0609baae44be5d",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/9f53c72e12c309ff8920e7f56d6e1ebaa88d1b": "8d41c127286118f786851cd2b34df8b5",
".git/objects/2e/0ec0246232848a8be0358b8b19fed7b2dc7496": "a7074a38959a59e040033f595d5a9bb8",
".git/objects/13/d6591a295bbee95ef0e1d301ffd6191fb1562a": "45572365c53ff4c75f913c6c8dc5ca74",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7a/270733782f25d592490bf31d135da3fbccfca6": "1dcc5a4b30030e1a7820573c57df7b7c",
".git/objects/22/bb81949d1b1dd58ea2480a3c7b9783c1747100": "aa1fe9fba3d63773a2887a9cd4836cce",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3021d78e482f33030ced94b573bfdaa5",
".git/logs/refs/heads/main": "ee5d6ddc59c1c1bb0c473af5b8f0cada",
".git/logs/refs/remotes/on/main": "114cbc67b67f196939d9b6abde53c1a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2e243823934491f01e61d121f17fa1ac",
".git/refs/remotes/on/main": "2e243823934491f01e61d121f17fa1ac",
".git/index": "4a336610b6e84e1c20bc6a9a6b609058",
".git/COMMIT_EDITMSG": "b63d0bba535fa4e9fa240a8db177b8b9",
"assets/AssetManifest.json": "6b97bf930594462678b7d7c11124b164",
"assets/NOTICES": "b035167ef8f468b7e3af7bfcc6a33e01",
"assets/FontManifest.json": "bdd5ce6f199dd9c206f745254bec9bfd",
"assets/AssetManifest.bin.json": "d660214eaae856a7a2261c17dc00be84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8521152765ac463fb43cc71bb7a89163",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7db918cc6fabef6076168f94cd4b22be",
"assets/fonts/MaterialIcons-Regular.otf": "c734455b26d15fdb4b37d7593c8770a8",
"assets/assets/screenshots/portfolio_mobile_1.gif": "6f5725083b4becfb8b77c2af45a7e165",
"assets/assets/screenshots/portfolio_2.gif": "4196cf51f9316273f9ef7bfefc97d20b",
"assets/assets/screenshots/portfolio_design_2.png": "711a86e370566ce01c1903db1aa4e794",
"assets/assets/screenshots/portfolio_design_3.png": "f24dd0da7633fba80106b2865358a785",
"assets/assets/screenshots/portfolio_3.gif": "a485ce18b008accbc91075f7aa27e2e7",
"assets/assets/screenshots/portfolio_1.gif": "18dd0909f3aba633013d389421334c87",
"assets/assets/screenshots/portfolio_design_1.png": "7d6b918c406123f221b50e48feea493f",
"assets/assets/images/bus3.png": "d4d840e8de16df2ed5efb002db125b42",
"assets/assets/images/otp_package.jpg": "2a4d40fa2c2968e140a02b767002615e",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/learn_upp.jpg": "45063d1af568d5f2ad55b3f6eb447233",
"assets/assets/images/aerium.jpg": "1cc46a5095ea0c7c487280dcd981d703",
"assets/assets/images/bequip_logistics.jpg": "d9a33516351b0bb9e7cadc83b8780c66",
"assets/assets/images/markaz_abu_ali.png": "81e6adb97a069a400a068bd37400c42f",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/almuqtadir.png": "cafbc882cc3fa1afda4d8c11f1494f71",
"assets/assets/images/foodybite.jpg": "15fa08d9eea454b52afcd280aa044083",
"assets/assets/images/dev.png": "87dab248133685d28219fe2f646d97f8",
"assets/assets/images/trio.png": "c6dd810a7d95c902a0801f1670b2e8c6",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/login_catalog.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/finopp.jpg": "e8242ed7f425c6937f87d3a5526e76c5",
"assets/assets/images/certtificate1.jpg": "145575c62e97a49140ba6e1b86dc4374",
"assets/assets/images/vybz.jpg": "afc36c7d9f5cbaf04ca21d43cee72bce",
"assets/assets/images/certificate3.jpeg": "91fca66331538cc9bbde90c3987d42ea",
"assets/assets/images/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/images/ayyoob.pdf": "2c82d9ef3e629612f7215c6db638089d",
"assets/assets/images/colossal_toons.jpg": "309de4edc7e7540a0717710523e07477",
"assets/assets/images/onboarding_app.jpg": "3579b51a4590f083dd633d145196bd22",
"assets/assets/images/certificate2.jpeg": "5019585f0a649e064d1cdd864e04a1f1",
"assets/assets/fonts/circe/Circe-Light.ttf": "9fd3216596f21252abbdbc053769134e",
"assets/assets/fonts/circe/Circe-Bold.ttf": "22f16521a7d16c7f8342680cf30b46bd",
"assets/assets/fonts/circe/Circe-Thin.ttf": "8a6928dabfc92fdf4fa5fa4f53534cab",
"assets/assets/fonts/proxima_nova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/proxima_nova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/proxima_nova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
