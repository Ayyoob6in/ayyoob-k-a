'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3906fc5d38199c243ab81a45fee32c66",
"index.html": "50af57cecca098a73bd5fc306d1cd7e5",
"/": "50af57cecca098a73bd5fc306d1cd7e5",
"main.dart.js": "cfd27e4fb2058f8618f608b764b52b2d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"manifest.json": "4505293d75686ae0fa11806f6a3c6104",
"assets/AssetManifest.json": "6b97bf930594462678b7d7c11124b164",
"assets/NOTICES": "86118fc4912215a020f8e90136a6c5f6",
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
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
