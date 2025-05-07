
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/resources"
  },
  {
    "renderMode": 2,
    "route": "/bigfive"
  },
  {
    "renderMode": 2,
    "redirectTo": "/community/list",
    "route": "/community"
  },
  {
    "renderMode": 2,
    "route": "/community/new"
  },
  {
    "renderMode": 2,
    "route": "/meditations"
  },
  {
    "renderMode": 2,
    "route": "/appointments"
  },
  {
    "renderMode": 2,
    "route": "/historials"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24716, hash: 'f1df017e35f0ac9c2f5fd24170fbbac8998a1eb8578c88ba7570ee8a1aef63f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18290, hash: 'aa8e6c2147ebd2a9e8c414f4cc0376c76161bb8bd7b863b495ba5ac10564960f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29977, hash: 'cdc02ccc60acd49f35c5a30b7d3da7269a2c7cedb4dd60df7281a7dbde8e694b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 41848, hash: 'd172ac4f38098456c7417a57e7e901591e6094d259793c503cfb3e9088681d66', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 41848, hash: '866f0d2ed75b28440058c87a339379733855c7fe1993de3b5280b179112f97ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 31093, hash: 'a7faed73fe6a9af931fc149c9b387a282995969d00fa78b086845ed156b87039', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 35682, hash: '55033ce4d686777d302d660691bb82cc74204ad2ee615f6573667802fec0a8ee', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'bigfive/index.html': {size: 37963, hash: '355fbe49e3d39c6a693bcd90d8dbacb6f40537a9c3d46d06126a2d29f6cfd1e4', text: () => import('./assets-chunks/bigfive_index_html.mjs').then(m => m.default)},
    'appointments/index.html': {size: 28932, hash: 'ee693b6a2051d8c723679402762fd39054d1c5000a811a603d1456e82e154195', text: () => import('./assets-chunks/appointments_index_html.mjs').then(m => m.default)},
    'meditations/index.html': {size: 65617, hash: 'e201e06653d017ff829f168137c959ca15775b4180d67fcd3784750e6ae660e0', text: () => import('./assets-chunks/meditations_index_html.mjs').then(m => m.default)},
    'historials/index.html': {size: 29402, hash: '9f10998a1a3502c19cfebee0920e4154225088e947e4a3cc982d4bbdcb8d8025', text: () => import('./assets-chunks/historials_index_html.mjs').then(m => m.default)},
    'community/new/index.html': {size: 38393, hash: '503a92ef5ab6d0dc4a3adf4fa248a91e997754394320313477848cb0df1b9f27', text: () => import('./assets-chunks/community_new_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
