'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "531f0726ecd90307ede97accb4c51d33",
"assets/AssetManifest.bin.json": "51b3bd2bac86b5035e8bd1ca4c9370cd",
"assets/AssetManifest.json": "e3fe5f9694ae1fbcf09e5d948605f49f",
"assets/assets/font/SpotifyMix-Black.ttf": "f3e4d687f59024316ffc6aab453c149c",
"assets/assets/font/SpotifyMix-BlackItalic.ttf": "68194a3746f58d91f659b78290402858",
"assets/assets/font/SpotifyMix-Bold.ttf": "7c1158d703f7743da2208cead2bb0a74",
"assets/assets/font/SpotifyMix-BoldItalic.ttf": "e46efd6771d7bc3dab1faaffcee165e4",
"assets/assets/font/SpotifyMix-Extrabold.ttf": "8b03a4fb07ffb14292f532d68b528c73",
"assets/assets/font/SpotifyMix-ExtraboldItalic.ttf": "5fce112fe3d16154344ab6b2d1f7af74",
"assets/assets/font/SpotifyMix-Light.ttf": "b9f5f5ac9da4cbb204f345a1de135993",
"assets/assets/font/SpotifyMix-LightItalic.ttf": "afebc3c4bba4ec80672f777564641fbe",
"assets/assets/font/SpotifyMix-Medium.ttf": "984f7c17ec41e43e057d6151e1bafbb1",
"assets/assets/font/SpotifyMix-MediumItalic.ttf": "8283153d7606d1433a936950816844be",
"assets/assets/font/SpotifyMix-Regular.ttf": "822de2cb162f0a4fe06ebd2b4f8866de",
"assets/assets/font/SpotifyMix-RegularItalic.ttf": "ca157cd5fdacdde229e6e0a90fb2fd03",
"assets/assets/font/SpotifyMix-Thin.ttf": "331f9f8637d4958468f22a9e270c6568",
"assets/assets/font/SpotifyMix-ThinItalic.ttf": "f1ab7e0893eb0bea69af4f393b5ba6d9",
"assets/assets/font/SpotifyMix-Ultra.ttf": "4fe3d48e48d71f971c67d3b8f8c8a5fe",
"assets/assets/font/SpotifyMix-UltraItalic.ttf": "3e7657588392df9537aae7b25d80db84",
"assets/assets/icons/history.png": "2bfff157174632223f6b560445df347a",
"assets/assets/icons/history.svg": "18d4d6aa13b5c90bc0dd835c99404c65",
"assets/assets/icons/search.png": "637ed865b2c1916ee3a7137575f5e359",
"assets/assets/icons/search.svg": "59d60463299cbdf5788a7c8b58a4573d",
"assets/assets/icons/settings.png": "3e3ff374128ec769f3bd7c308df9b14a",
"assets/assets/icons/user.png": "b3fcc2c0b4a4761ad7b71ddbfd043953",
"assets/assets/images/logo.png": "af8463a0efb4a0896108084725a74d26",
"assets/assets/logo/google-gemini-icon.png": "fe38b5629ba31edf52df0697642b7587",
"assets/assets/logo/logo_klarifikasi_dengan_nama.png": "f3896b4248cacaedd1bc90a1b9005c61",
"assets/assets/logo/logo_klarifikasi_hanya_icon_kacamata_pembesar.png": "11d199851f286df08a4a4809b514437b",
"assets/FontManifest.json": "a2ff2fe8d28d6aed1020087c5ee52ae0",
"assets/fonts/MaterialIcons-Regular.otf": "cf9df582acd26b2835b995596fec1f7e",
"assets/NOTICES": "fb397128a508665992515aedb094905c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "11d199851f286df08a4a4809b514437b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f2c9d81baf3bff3b17194e17d3464025",
"icons/Icon-192.png": "11d199851f286df08a4a4809b514437b",
"icons/Icon-512.png": "11d199851f286df08a4a4809b514437b",
"icons/Icon-maskable-192.png": "11d199851f286df08a4a4809b514437b",
"icons/Icon-maskable-512.png": "11d199851f286df08a4a4809b514437b",
"index.html": "d6aed14b0b5bfe5e39426ea003e455d4",
"/": "d6aed14b0b5bfe5e39426ea003e455d4",
"main.dart.js": "be4a6328d8c506dbe7d71d18381146b4",
"manifest.json": "ad3af76cfcabd546e6757e39f75ff864",
"version.json": "54e46870fc8b4c18669827f8a86896a9"};
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
