if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"e95a5507a4168085e163e6655870244e"},{url:"js/extensions.min.js",revision:"a6b272e834a0a5032db20b0c99ec7ce6"},{url:"js/stencils.min.js",revision:"01ce998337c8ff54a55d9b4cf2d4ee0d"},{url:"js/shapes-14-6-5.min.js",revision:"a96cd0313eb634ec44f4fc94d8cc0785"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"a3dcf8caa10e3ad0af9f1bac2830896b"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"a41acc9feab7d6280efd862deeab6812"},{url:"styles/atlas.css",revision:"47f4071d6d5308d3469de007d510ea12"},{url:"styles/dark.css",revision:"0db04afe3d4da079af9ef3e5298aad6b"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"9be8ae5743c54e2cbcdc722b9eb102a4"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"df9ba18d1f247c069258c13516f78a9d"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"36146c8b69293c22554aa861de8a5e71"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"631d8903db804bcbe95d0e4c1f7f3a97"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"6d39042068933e66a725e22af6d2986b"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"d089f12446d443ca01752a5115456fcc"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"15188e7f36099d5e2ad0fafe4f783f44"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c14807286438f2236b44c9fb78eb4bb3"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"9835a94d469af27db7dbfecf6d434ebc"},{url:"connect/confluence/includeDiagram.html",revision:"1f2e4d088a8a1525ba047239643f3f4f"},{url:"connect/confluence/macro-editor.js",revision:"412bc4b87e630b697a40f247c579d398"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"ec6923c9e85fca4cc87313778f6aa5b0"},{url:"resources/dia_am.txt",revision:"05b547a97e23cd82b148e7d3c433afde"},{url:"resources/dia_ar.txt",revision:"59ab039cd5758dacd1e15712fb8b6509"},{url:"resources/dia_bg.txt",revision:"7d5ca9a5630c4f161626d1329d5fe2d7"},{url:"resources/dia_bn.txt",revision:"77f21abbf51d1623e1c1b0902d749b92"},{url:"resources/dia_bs.txt",revision:"38b6399a65ff2b1a7abb4837a830e0fb"},{url:"resources/dia_ca.txt",revision:"d018321e303214bdd3918c4823e89738"},{url:"resources/dia_cs.txt",revision:"8df5aee9ba07a172b1124e50d6475233"},{url:"resources/dia_da.txt",revision:"a6ee52dd37b1eb2330c585495a9dd011"},{url:"resources/dia_de.txt",revision:"21a17015bd78e1127e71f32d9b14a62f"},{url:"resources/dia_el.txt",revision:"775c2133374b7b56493aef8e88ab7a97"},{url:"resources/dia_eo.txt",revision:"2611d4b4215c74d334c4c27eeab82064"},{url:"resources/dia_es.txt",revision:"d7e7f538fb43fd83bddf5613dbc8d322"},{url:"resources/dia_et.txt",revision:"4088a2a0eb288aa34259ed917cc69c5c"},{url:"resources/dia_eu.txt",revision:"25f003b479cab698f367b7366804a3c9"},{url:"resources/dia_fa.txt",revision:"f688beed930b3bbb4d35916b3a892148"},{url:"resources/dia_fi.txt",revision:"a98d6c5d0169a5c6902db87f683587eb"},{url:"resources/dia_fil.txt",revision:"92f2d03881ee9b10aaf609a7594a5a66"},{url:"resources/dia_fr.txt",revision:"82a2f5a53106dbf9b997a9de2d5cccc1"},{url:"resources/dia_gl.txt",revision:"0ed13e03f0c8ef61c28eab172f725932"},{url:"resources/dia_gu.txt",revision:"848e0af84d41c62631997179a1703e9e"},{url:"resources/dia_he.txt",revision:"515bd70bd181345e85a13086319cc60e"},{url:"resources/dia_hi.txt",revision:"aee6182dbc55d6ac68f28a69e394f214"},{url:"resources/dia_hr.txt",revision:"a517d274f46ca0deb538632ee628979e"},{url:"resources/dia_hu.txt",revision:"25bd09434a9f66341dfb5c8156786792"},{url:"resources/dia_id.txt",revision:"c658033b15b194f6aa53f371b811b747"},{url:"resources/dia_it.txt",revision:"2ae9e6fb17fac6a13039afd77bc89179"},{url:"resources/dia_ja.txt",revision:"d833140dd078d0272429d81d61d90335"},{url:"resources/dia_kn.txt",revision:"c5198c60f526a1020e86c2e57353a0a9"},{url:"resources/dia_ko.txt",revision:"fc578511abae26fe29181d1529da6765"},{url:"resources/dia_lt.txt",revision:"d80012b8a753aad348da196330c5af52"},{url:"resources/dia_lv.txt",revision:"7f7b01e9ede5ed043a1a4530e41fac2b"},{url:"resources/dia_ml.txt",revision:"8e7a224afe49a0e42fed932c17684d38"},{url:"resources/dia_mr.txt",revision:"64e06956c002478cb4c37a014b82bb89"},{url:"resources/dia_ms.txt",revision:"35bc85b5d231aa702671d93253d6f238"},{url:"resources/dia_my.txt",revision:"ec6923c9e85fca4cc87313778f6aa5b0"},{url:"resources/dia_nl.txt",revision:"0e3d0f032b5d7d2799dcffb8cc3159fb"},{url:"resources/dia_no.txt",revision:"7df78d190146c173ec8f525ad0bba859"},{url:"resources/dia_pl.txt",revision:"720586a24da1e6c0156522372793781e"},{url:"resources/dia_pt-br.txt",revision:"0de632978bebb905b0100b72613ba0f4"},{url:"resources/dia_pt.txt",revision:"ac5c5997fa0f15fb1fdf0e07d0cdb3ad"},{url:"resources/dia_ro.txt",revision:"bab63d4d92dd628d1f802dc7037643f6"},{url:"resources/dia_ru.txt",revision:"ed17d9d9fe9d7dfbc9b072a7c64ccc64"},{url:"resources/dia_si.txt",revision:"ec6923c9e85fca4cc87313778f6aa5b0"},{url:"resources/dia_sk.txt",revision:"feb3e6ccc9f07034aa1c96d1252b44f1"},{url:"resources/dia_sl.txt",revision:"20fd00f32fa0935dd59122675eca7be9"},{url:"resources/dia_sr.txt",revision:"83d1a5df1668faccda9d0165e9258cd7"},{url:"resources/dia_sv.txt",revision:"4906c9be12231b57d2d00baf5c22f749"},{url:"resources/dia_sw.txt",revision:"6b3f8d2b56d2a7be7d23ff6a817bfcaf"},{url:"resources/dia_ta.txt",revision:"325ff4964925a42e173658175aedab7b"},{url:"resources/dia_te.txt",revision:"2f84e9c8224c02700608dd6880680a9b"},{url:"resources/dia_th.txt",revision:"1b80ce006b5cfab3fec8ae4f36d68614"},{url:"resources/dia_tr.txt",revision:"c144242cbed994fcd5a67e654955d1f7"},{url:"resources/dia_uk.txt",revision:"063513f8eccd3c417d653f50ded1854b"},{url:"resources/dia_vi.txt",revision:"537d46153462e51baaa1be720328699a"},{url:"resources/dia_zh-tw.txt",revision:"926f42147bde174073a166b5177839e8"},{url:"resources/dia_zh.txt",revision:"56f6a9a0959c6db35c74910885123f28"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
