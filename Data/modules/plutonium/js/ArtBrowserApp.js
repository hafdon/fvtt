const _0x5562=['close','remove','post','artBrowser','create','_pDoLoadAndPlaceImage','Plutonium\x20','_onLoadProgress','Config\x20window\x22><span\x20class=\x22fas\x20fa-cogs\x22></span></button>','scale','naturalHeight','_isDownloadingPack','set','tiles','_BLOCKED_HOSTS','plutonium__art__hide-main-button','artDirectoryPath','RenderTexture','status','_handleInstanceConfigUpdate_cycleImportModeButton','open','addEventListener','dataset','Unhandled\x20drop\x20mode\x20\x22','_preInit_getInnerToolMeta','tools','#board','plutonium__art__hide-token-button','_ID_HIDE_TILE_BUTTON','get','<style\x20id=\x22','log','plutonium.configUpdate','body','artBrowserDownloadPack','_handleConfigUpdate_toggleTokenButton','find','TilesLayer','ve-Art','_jsonDownloadMode','/template/ArtBrowserApp.handlebars','blob','onreadystatechange','_ART_SCENE_CONTROLS_NAME','artBrowserCancelDownloadPack','<span\x20class=\x22fas\x20fa-user\x22></span>','getMaxWindowWidth','replace','application/json','Failed\x20to\x20load\x20image!','getData','/upload','app','_pCopyImageToLocalViaCorsAnywhere','.window-content','importImagesAs','getMaxWindowHeight','json','_pCopyImageToLocalViaBackend','__bound__handleInstanceConfigUpdate','<button\x20class=\x22artr__btn-lg\x20artr__btn-lg--search-controls\x20mr-1\x22><span\x20class=\x22fas\x20fa-spinner\x22></span></button>','type','fas\x20fa-palette','_handleConfigUpdate','length','https://cors-anywhere.herokuapp.com/','getPosCanvasSpace','<span\x20class=\x22fas\x20fa-cubes\x22></span>','round','name','max','_pDownloadPack','\x22>\x0a\x09\x09\x09#controls\x20.scene-control[data-control=\x22ve-art__btn-scene\x22]\x20{\x0a\x09\x09\x09\x09display:\x20none\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09</style>','\x22>\x0a\x09\x09\x09#controls\x20.scene-control[data-canvas-layer=\x22TokenLayer\x22]\x20.control-tool[data-tool=\x22ve-art__btn-scene\x22]\x20{\x0a\x09\x09\x09\x09display:\x20none\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09</style>','source','Sprite','bringToFront','host','pct','_URL_CORS_ANYWHERE','Could\x20not\x20directly\x20load\x20image\x20from\x20','pHandleButtonClick','error','buttonDisplay','addClass','Drag-Drop\x20Images\x20as\x20Tiles','\x20--\x20falling\x20back\x20on\x20alternate\x20loader.','_ID_HIDE_TOKEN_BUTTON','maximize','upload','user','_handleInstanceConfigUpdate','_pLoadImageViaCorsAnywhere','path','off','dragstart','Download\x20complete!\x20Images\x20will\x20be\x20available\x20in\x20your\x20\x22User\x20Data\x22\x20directory.','backendEndpoint','token','control','progress','_preInit_handleOpenClick','P_GET_BACKEND_VERSION','TokenLayer','POST','render','push','_pLoadImage','init','_onClickLayer','drop','notifications','send','height','naturalWidth','renderer','<span\x20class=\x22fas\x20fa-map\x22></span>','title','Failed\x20to\x20load\x20image!\x20','.artr__search','click','text','.webp','controls','split','currentTarget','width','_handleCustomDrop','pInit','uri','append','artBrowserCopyToLocal','_preInit_addTileButton','stopPropagation','_$btnCycleImportMode','then','_doCancelPackDownload','_ID_HIDE_MAIN_BUTTON','toBlob','_preInit_addMainButton','Error\x20during\x20request\x20(','html','canvas','_handleConfigUpdate_toggleTileButton','ve-art__btn-scene','appendTo','stringify','some','p-0','STR_SEE_CONSOLE','closest','data','_textDownloadMode','info','preInit','_handleConfigUpdate_toggleMainButton','Foundry\x20Assets','_INSTANCE','draw','_pLoadImageViaBackend','Art\x20Browser','warn','_preInit_addTokenButton','activateListeners','image/webp','.artr__item__lnk-fullsize','_pPingImage','<button\x20class=\x22artr__btn-lg\x20artr__btn-lg--search-controls\x20mr-1\x22\x20title=\x22Cancel\x20running\x20downloads\x22><span\x20class=\x22fas\x20fa-stop\x22></span></button>'];(function(_0x3c7ed1,_0x5562cb){const _0x222306=function(_0x1895c0){while(--_0x1895c0){_0x3c7ed1['push'](_0x3c7ed1['shift']());}};_0x222306(++_0x5562cb);}(_0x5562,0x73));const _0x2223=function(_0x3c7ed1,_0x5562cb){_0x3c7ed1=_0x3c7ed1-0x0;let _0x222306=_0x5562[_0x3c7ed1];return _0x222306;};'use strict';import{SharedConsts}from'../shared/SharedConsts.js';import{Util,LGT}from'./Util.js';import{Config}from'./Config.js';import{UtilCanvas}from'./UtilCanvas.js';import{ArtBrowser}from'../art-js/ArtBrowser.js';import{UtilApplications}from'./UtilApplications.js';class ArtBrowserApp extends Application{static[_0x2223('0x27')](){Hooks['on']('getSceneControlButtons',_0x44885b=>{if(!game[_0x2223('0x8f')]['isGM'])return;this['_preInit_addMainButton'](_0x44885b),this[_0x2223('0x11')](_0x44885b),this['_preInit_addTokenButton'](_0x44885b);});}static[_0x2223('0x9a')](){if(ArtBrowserApp[_0x2223('0x2a')]){ArtBrowserApp[_0x2223('0x2a')]['render'](!![]),ArtBrowserApp[_0x2223('0x2a')][_0x2223('0x8d')](),UtilApplications[_0x2223('0x81')](ArtBrowserApp[_0x2223('0x2a')]);return;}ArtBrowserApp[_0x2223('0x2a')]=new ArtBrowserApp(),ArtBrowserApp['_INSTANCE'][_0x2223('0x9e')](!![]);}static[_0x2223('0x18')](_0x5e1ef2){const _0x1f383e=_0x5e1ef2['find'](_0x55c509=>_0x55c509[_0x2223('0x7a')]===ArtBrowserApp[_0x2223('0x60')]);if(_0x1f383e)return;_0x5e1ef2[_0x2223('0x9f')]({'name':ArtBrowserApp[_0x2223('0x60')],'title':_0x2223('0x2d'),'icon':'fas\x20fa-palette','tools':[{'name':ArtBrowserApp['_ART_SCENE_CONTROLS_NAME'],'title':_0x2223('0x2d'),'icon':_0x2223('0x73'),'onClick':()=>ui[_0x2223('0xa4')][_0x2223('0x54')]('Hi!\x20You\x20shouldn\x27t\x20be\x20able\x20to\x20click\x20this,\x20something\x20has\x20gone\x20wrong.'),'button':!![]}],'activeTool':_0x2223('0x49')});const _0x38ffb1=ui[_0x2223('0x8')][_0x2223('0xa2')]['bind'](ui[_0x2223('0x8')]);ui[_0x2223('0x8')]['_onClickLayer']=function(_0x3abe39){if(_0x3abe39[_0x2223('0xa')][_0x2223('0x4b')][_0x2223('0x98')]===ArtBrowserApp['_ART_SCENE_CONTROLS_NAME']){ArtBrowserApp[_0x2223('0x9a')]();return;}_0x38ffb1(_0x3abe39);};}static['_preInit_getInnerToolMeta'](_0x46f98d){return{'name':ArtBrowserApp[_0x2223('0x60')],'title':_0x2223('0x2d'),'icon':_0x2223('0x73'),'onClick':()=>{Config[_0x2223('0x41')]('artBrowser','importImagesAs',_0x46f98d),ArtBrowserApp['_preInit_handleOpenClick']();},'button':!![]};}static[_0x2223('0x11')](_0x1be8c9){const _0x315911=_0x1be8c9[_0x2223('0x59')](_0x3fa4ed=>_0x3fa4ed[_0x2223('0x7a')]===_0x2223('0x42')),_0x1307dc=_0x315911[_0x2223('0x4e')][_0x2223('0x20')](_0x47de97=>_0x47de97[_0x2223('0x7a')]===ArtBrowserApp['_ART_SCENE_CONTROLS_NAME']);if(_0x1307dc)return;_0x315911[_0x2223('0x4e')]['push'](this[_0x2223('0x4d')](0x0));}static[_0x2223('0x2f')](_0x591b8e){const _0x309ad1=_0x591b8e[_0x2223('0x59')](_0x311c67=>_0x311c67['name']===_0x2223('0x97')),_0x3e92cf=_0x309ad1[_0x2223('0x4e')]['some'](_0x475f25=>_0x475f25[_0x2223('0x7a')]===ArtBrowserApp['_ART_SCENE_CONTROLS_NAME']);if(_0x3e92cf)return;_0x309ad1[_0x2223('0x4e')][_0x2223('0x9f')](this[_0x2223('0x4d')](0x1));}static async[_0x2223('0x7c')](_0x3afedb){await fetch(Config[_0x2223('0x96')],{'method':'post','headers':{'Content-Type':_0x2223('0x65')},'body':JSON['stringify']({'type':_0x2223('0x57'),'json':_0x3afedb,'directoryPath':Config[_0x2223('0x52')](_0x2223('0x38'),_0x2223('0x45'))})});}static[_0x2223('0xa1')](){$(document[_0x2223('0x56')])['on'](_0x2223('0x94'),_0x2223('0x32'),_0x349096=>{_0x349096[_0x2223('0x12')]();}),$(_0x2223('0x4f'))[0x0][_0x2223('0x4a')](_0x2223('0xa3'),this[_0x2223('0xc')]['bind'](this)),game['socket']['on'](_0x2223('0x99'),_0xe2491f=>{if(_0xe2491f[_0x2223('0x72')]!=='plutoniumDownloadPackImage')return;if(!ArtBrowserApp['_INSTANCE'])return;if(!ArtBrowserApp[_0x2223('0x2a')][_0x2223('0x40')])return;SceneNavigation[_0x2223('0x3c')](_0xe2491f[_0x2223('0x6')],_0xe2491f[_0x2223('0x83')]);}),Hooks['on'](_0x2223('0x55'),()=>this[_0x2223('0x74')]()),this[_0x2223('0x74')]();}constructor(){super({'title':_0x2223('0x2d'),'template':SharedConsts['MODULE_LOCATION']+_0x2223('0x5d'),'height':Util[_0x2223('0x6d')](),'width':Math[_0x2223('0x7b')](0x258,Util[_0x2223('0x63')]()/0x2),'resizable':!![]}),this[_0x2223('0x40')]=![],this[_0x2223('0x13')]=null,this[_0x2223('0x70')]=null;}static[_0x2223('0x74')](){this[_0x2223('0x58')](),this['_handleConfigUpdate_toggleTileButton'](),this[_0x2223('0x28')]();}static[_0x2223('0x58')](){const _0x5131d7=Config[_0x2223('0x52')]('artBrowser',_0x2223('0x88')),_0x554409=$('#'+ArtBrowserApp[_0x2223('0x8c')]);if(_0x5131d7[0x0])return _0x554409[_0x2223('0x36')]();if(_0x554409[_0x2223('0x75')])return;$('<style\x20id=\x22'+ArtBrowserApp[_0x2223('0x8c')]+_0x2223('0x7e'))[_0x2223('0x1e')](document[_0x2223('0x56')]);}static[_0x2223('0x1c')](){const _0x41c83d=Config['get'](_0x2223('0x38'),'buttonDisplay'),_0x1f6e6e=$('#'+ArtBrowserApp['_ID_HIDE_TILE_BUTTON']);if(_0x41c83d[0x1])return _0x1f6e6e[_0x2223('0x36')]();if(_0x1f6e6e[_0x2223('0x75')])return;$('<style\x20id=\x22'+ArtBrowserApp[_0x2223('0x51')]+'\x22>\x0a\x09\x09\x09#controls\x20.scene-control[data-canvas-layer=\x22TilesLayer\x22]\x20.control-tool[data-tool=\x22ve-art__btn-scene\x22]\x20{\x0a\x09\x09\x09\x09display:\x20none\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09</style>')[_0x2223('0x1e')](document['body']);}static[_0x2223('0x28')](){const _0xa889d=Config[_0x2223('0x52')](_0x2223('0x38'),_0x2223('0x88')),_0x4c5b2f=$('#'+ArtBrowserApp[_0x2223('0x16')]);if(_0xa889d[0x2])return _0x4c5b2f[_0x2223('0x36')]();if(_0x4c5b2f[_0x2223('0x75')])return;$(_0x2223('0x53')+ArtBrowserApp[_0x2223('0x16')]+_0x2223('0x7d'))[_0x2223('0x1e')](document[_0x2223('0x56')]);}['_handleInstanceConfigUpdate'](){this[_0x2223('0x48')]();}[_0x2223('0x48')](){const _0x2477f3=Config['get'](_0x2223('0x38'),_0x2223('0x6c'))||0x0;switch(_0x2477f3){case 0x0:this[_0x2223('0x13')]['html'](_0x2223('0x78'))[_0x2223('0x2')](_0x2223('0x8a'));break;case 0x1:this[_0x2223('0x13')]['html'](_0x2223('0x62'))[_0x2223('0x2')]('Drag-Drop\x20Images\x20as\x20Tokens');break;case 0x2:this['_$btnCycleImportMode'][_0x2223('0x1a')](_0x2223('0x1'))['title']('Drag-Drop\x20Images\x20as\x20Scenes');break;default:throw new Error(_0x2223('0x4c')+_0x2477f3+'\x22');}}[_0x2223('0x67')](){return{'owner':!![],'entity':{'name':_0x2223('0x2d')}};}[_0x2223('0x30')](_0x179ab3){const _0x1fd2d7=this;this[_0x2223('0x70')]=this[_0x2223('0x90')]['bind'](this),Hooks['on'](_0x2223('0x55'),this[_0x2223('0x70')]),_0x179ab3[_0x2223('0x23')](_0x2223('0x6b'))[_0x2223('0x89')](_0x2223('0x21'))[_0x2223('0x89')]('artb__window-outer');const _0x3bc19a=new ArtBrowser(_0x179ab3);_0x3bc19a['_pGetDownloadModes']=async function(){const _0x39b962=[this[_0x2223('0x25')],this[_0x2223('0x5c')]];return await Config[_0x2223('0x9b')]&&_0x39b962['unshift']({'name':_0x2223('0x29'),'isMultipleFilesOnly':!![],'pDownloadAsMultipleFiles':(_0x48593d,_0x4e939c,_0x5a348d)=>_0x1fd2d7['_activateListeners_pHandleDownloadAssets'](_0x48593d,_0x4e939c,_0x5a348d)}),_0x39b962;},_0x3bc19a[_0x2223('0xd')]()[_0x2223('0x14')](()=>{const _0x2a6eaf=_0x179ab3['find'](_0x2223('0x4')),_0x4516a3=$(_0x2223('0x34'))['click'](()=>ArtBrowserApp['_doCancelPackDownload']());this['_$btnCycleImportMode']=$(_0x2223('0x71'))[_0x2223('0x5')](()=>{const _0x4a4ec9=Config['get'](_0x2223('0x38'),'importImagesAs')||0x0,_0x4f94f6=_0x4a4ec9===0x2?0x0:_0x4a4ec9+0x1;Config['set'](_0x2223('0x38'),_0x2223('0x6c'),_0x4f94f6);});const _0x42e6e3=$('<button\x20class=\x22artr__btn-lg\x20artr__btn-lg--search-controls\x22\x20title=\x22Open\x20'+(Config[_0x2223('0x52')]('ui','isStreamerMode')?'':_0x2223('0x3b'))+_0x2223('0x3d'))[_0x2223('0x5')](_0x4b4d76=>Config[_0x2223('0x86')](_0x4b4d76,'artBrowser'));$$`<div class="flex-v-center h-100">
					<div class="artr__search__divider mx-2"></div>
					<div class="flex-v-center">${_0x4516a3}</div>
					<div class="flex-v-center">${this['_$btnCycleImportMode']}</div>
					<div class="flex-v-center">${_0x42e6e3}</div>
				</div>`[_0x2223('0x1e')](_0x2a6eaf),this[_0x2223('0x70')]();});}static async[_0x2223('0x15')](){await fetch(Config[_0x2223('0x96')],{'method':_0x2223('0x37'),'headers':{'Content-Type':'application/json'},'body':JSON[_0x2223('0x1f')]({'type':_0x2223('0x61')})});}async['_activateListeners_pHandleDownloadAssets'](_0x5734a,_0x123646,_0x1bd0df){try{ArtBrowserApp[_0x2223('0x2a')][_0x2223('0x40')]=!![],await ArtBrowserApp[_0x2223('0x7c')](_0x5734a);}catch(_0xba2d37){ArtBrowserApp[_0x2223('0x2a')][_0x2223('0x40')]=![];}_0x123646+0x1===_0x1bd0df&&(ArtBrowserApp[_0x2223('0x2a')][_0x2223('0x40')]=![],ui[_0x2223('0xa4')][_0x2223('0x26')](_0x2223('0x95')));}static[_0x2223('0xc')](_0x2c28a6){let _0x5c0e96;try{const _0x396b6b=_0x2c28a6['dataTransfer']['getData'](_0x2223('0x65'));if(!_0x396b6b)return;_0x5c0e96=JSON['parse'](_0x396b6b);}catch(_0x4145ea){ui[_0x2223('0xa4')]['error'](_0x2223('0x3')+VeCt[_0x2223('0x22')]),setTimeout(()=>{throw _0x4145ea;});}if(!_0x5c0e96||_0x5c0e96[_0x2223('0x72')]!==_0x2223('0x5b'))return;return this[_0x2223('0x3a')](_0x2c28a6,_0x5c0e96)['catch'](_0x1c36d7=>{ui[_0x2223('0xa4')][_0x2223('0x87')](_0x2223('0x3')+VeCt[_0x2223('0x22')]),setTimeout(()=>{throw _0x1c36d7;});}),![];}static async[_0x2223('0x3a')](_0x56b0a9,_0x2e1a9f){const _0x1f645a=Config[_0x2223('0x52')](_0x2223('0x38'),_0x2223('0x6c'))||0x0;let _0x11b6b3=_0x2e1a9f[_0x2223('0xe')],_0x53ae7f,_0x2b5f1c,_0x585814;if(await this[_0x2223('0x33')](_0x11b6b3))_0x53ae7f=await this['_pLoadImage'](_0x11b6b3);else{console[_0x2223('0x2e')](...LGT,_0x2223('0x85')+_0x11b6b3+_0x2223('0x8b'));try{if(await Config['P_GET_BACKEND_VERSION']){const {url:_0x43f588,image:_0x478594}=await this['_pLoadImageViaBackend'](_0x11b6b3);_0x11b6b3=_0x43f588,_0x53ae7f=_0x478594;}else{const {url:_0x1cbad7,image:_0x110044}=await this[_0x2223('0x91')](_0x11b6b3);_0x11b6b3=_0x1cbad7,_0x53ae7f=_0x110044;}}catch(_0x31f63e){console[_0x2223('0x87')](...LGT,_0x2223('0x66'),_0x31f63e),ui[_0x2223('0xa4')][_0x2223('0x87')](_0x2223('0x3')+VeCt[_0x2223('0x22')]);return;}}_0x2b5f1c=_0x53ae7f[_0x2223('0xa7')],_0x585814=_0x53ae7f[_0x2223('0x3f')];let _0x55ee44=Config[_0x2223('0x52')](_0x2223('0x38'),_0x2223('0x3e'));switch(_0x1f645a){case 0x0:{const _0x50f4a5=UtilCanvas[_0x2223('0x77')](_0x56b0a9,_0x2223('0x5a'));Tile[_0x2223('0x39')]({'img':encodeURL(_0x11b6b3),'width':Math[_0x2223('0x79')](_0x2b5f1c*_0x55ee44),'height':Math[_0x2223('0x79')](_0x585814*_0x55ee44),'hidden':![],'scale':_0x55ee44,'x':_0x50f4a5['x'],'y':_0x50f4a5['y']});break;}case 0x1:{const _0x5f0443=UtilCanvas[_0x2223('0x77')](_0x56b0a9,_0x2223('0x9c')),_0x126b7b=Config[_0x2223('0x52')]('artBrowser','tokenSize')||0x1;Token['create']({'name':'-','x':_0x5f0443['x'],'y':_0x5f0443['y'],'img':encodeURL(_0x11b6b3),'width':_0x126b7b,'height':_0x126b7b,'scale':0x1});break;}case 0x2:{let _0x62f035=_0x11b6b3[_0x2223('0x9')]('/')['last']();try{_0x62f035=decodeURIComponent(_0x62f035),_0x62f035=_0x62f035['split']('.')[0x0],_0x62f035=_0x62f035['replace'](/_/g,'\x20')[_0x2223('0x64')](/\s+/g,'\x20')['replace'](/\d+\s*[xX*]\s*\d+/g,'');}catch(_0x3ef904){}const _0x56c781={'name':_0x62f035,'active':!![],'navigation':!![],'img':encodeURL(_0x11b6b3),'width':Math['round'](_0x2b5f1c*_0x55ee44),'height':Math[_0x2223('0x79')](_0x585814*_0x55ee44)},_0x52b2fc=await Scene[_0x2223('0x39')](_0x56c781,{'renderSheet':!![]});canvas[_0x2223('0x2b')]();break;}}}static async[_0x2223('0x33')](_0x180952){let _0x1d0990;try{_0x1d0990=new URL(_0x180952);}catch(_0x4d0407){}if(_0x1d0990&&ArtBrowserApp[_0x2223('0x43')][_0x1d0990[_0x2223('0x82')]])return![];try{const _0xcd0d23=await fetch(_0x180952);return await _0xcd0d23[_0x2223('0x5e')](),!![];}catch(_0x50fe2d){if(_0x1d0990)ArtBrowserApp[_0x2223('0x43')][_0x1d0990[_0x2223('0x82')]]=!![];return![];}}static[_0x2223('0xa0')](_0x1e8b3){return new Promise((_0x4e3871,_0x10f682)=>{const _0x459f0a=new Image();_0x459f0a['onerror']=_0x2b64cc=>_0x10f682(_0x2b64cc),_0x459f0a['onload']=()=>_0x4e3871(_0x459f0a),_0x459f0a['src']=_0x1e8b3;});}static async['_pCopyImageToLocalViaBackend'](_0x4b765b){const _0x395ff9=await fetch(Config[_0x2223('0x96')],{'method':_0x2223('0x37'),'headers':{'Content-Type':_0x2223('0x65')},'body':JSON[_0x2223('0x1f')]({'type':_0x2223('0x10'),'url':_0x4b765b,'directoryPath':Config[_0x2223('0x52')](_0x2223('0x38'),_0x2223('0x45'))})}),_0x447162=await _0x395ff9[_0x2223('0x6e')]();return _0x447162[_0x2223('0x92')];}static async[_0x2223('0x2c')](_0x212dd1){const _0x3bb449=await this[_0x2223('0x6f')](_0x212dd1),_0x508311=await this[_0x2223('0xa0')](_0x3bb449);return{'url':_0x3bb449,'image':_0x508311};}static async[_0x2223('0x6a')](_0x89c81f){const _0x166339=''+ArtBrowserApp[_0x2223('0x84')]+_0x89c81f,_0x1e2524=async _0x1054c4=>{const _0x1d636d=Config[_0x2223('0x52')]('artBrowser',_0x2223('0x45')),_0x1f35f3=_0x89c81f[_0x2223('0x9')]('/')['last']()+_0x2223('0x7'),_0x8e3c3e=(_0x1d636d+'/'+_0x1f35f3)[_0x2223('0x64')](/\/+/g,'/'),_0x4eee10=new FormData();return _0x4eee10[_0x2223('0xf')]('target',_0x1d636d),_0x4eee10['append'](_0x2223('0x8e'),_0x1054c4,_0x1f35f3),_0x4eee10[_0x2223('0xf')](_0x2223('0x7f'),_0x2223('0x24')),await new Promise((_0x21c71b,_0x2b0341)=>{const _0xef8921=new XMLHttpRequest();_0xef8921[_0x2223('0x49')](_0x2223('0x9d'),_0x2223('0x68'),!![]),_0xef8921[_0x2223('0x5f')]=()=>{if(_0xef8921['readyState']!==0x4)return;if(_0xef8921['status']<0xc8||_0xef8921[_0x2223('0x47')]>=0x190)_0x2b0341(new Error(_0x2223('0x19')+_0xef8921[_0x2223('0x47')]+')'));_0x21c71b();},_0xef8921[_0x2223('0xa5')](_0x4eee10);}),_0x8e3c3e;},_0xa7ae=await loadTexture(_0x166339),_0x2845bf=new PIXI[(_0x2223('0x80'))](_0xa7ae),_0x4417a8=PIXI[_0x2223('0x46')][_0x2223('0x39')](_0x2845bf[_0x2223('0xb')],_0x2845bf[_0x2223('0xa6')]);canvas[_0x2223('0x69')]['renderer'][_0x2223('0x9e')](_0x2845bf,_0x4417a8);const _0x3cc561=new PIXI[(_0x2223('0x80'))](_0x4417a8),_0x4157d3=await new Promise((_0x56b3de,_0x257dcf)=>{canvas[_0x2223('0x69')][_0x2223('0x0')]['extract'][_0x2223('0x1b')](_0x3cc561)[_0x2223('0x17')](async _0x29deae=>{try{const _0xdb255e=await _0x1e2524(_0x29deae);_0x56b3de(_0xdb255e);}catch(_0x1e54a5){_0x257dcf(_0x1e54a5);}},_0x2223('0x31'),0x1);});return _0x4417a8['destroy'](!![]),_0x4157d3;}static async[_0x2223('0x91')](_0x5bccd3){const _0x23b9a5=await this['_pCopyImageToLocalViaCorsAnywhere'](_0x5bccd3),_0x3ee85f=await this['_pLoadImage'](_0x23b9a5);return{'url':_0x23b9a5,'image':_0x3ee85f};}async[_0x2223('0x35')](..._0x4b69cb){super[_0x2223('0x35')](..._0x4b69cb),Hooks[_0x2223('0x93')]('plutonium.configUpdate',this[_0x2223('0x70')]),ArtBrowserApp['_INSTANCE']=null;}}ArtBrowserApp[_0x2223('0x43')]={},ArtBrowserApp['_INSTANCE']=null,ArtBrowserApp[_0x2223('0x8c')]=_0x2223('0x50'),ArtBrowserApp[_0x2223('0x51')]='plutonium__art__hide-tile-button',ArtBrowserApp[_0x2223('0x16')]=_0x2223('0x44'),ArtBrowserApp['_URL_CORS_ANYWHERE']=_0x2223('0x76'),ArtBrowserApp[_0x2223('0x60')]=_0x2223('0x1d');export{ArtBrowserApp};