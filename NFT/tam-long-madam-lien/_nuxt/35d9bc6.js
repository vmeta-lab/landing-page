(window.webpackJsonp=window.webpackJsonp||[]).push([[32,7,10,21,27],{531:function(t,e,n){"use strict";n.r(e);var o={props:{backgroundColor:{type:String||void 0,default:"white"}},computed:{backgroundColorClass:function(){return"gray"===this.backgroundColor?"bg-light":"bg-white"}}},r=n(33),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.backgroundColorClass},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},538:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"button":"Buy NFA"},"de":{"button":"NFA kaufen"}}'),delete t.options._Ctor}},541:function(t,e,n){"use strict";n.r(e);var o=n(539),r=n.n(o),c=(n(540),{props:{youtubeId:{type:String,default:""}},data:function(){return{options:{}}},mounted:function(){return new r.a(this.$refs.player,{youtube:{modestbranding:0,loop:1}})}}),l=n(33),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"player",attrs:{"data-plyr-provider":"youtube","data-plyr-embed-id":t.youtubeId}})}),[],!1,null,null,null);e.default=component.exports},542:function(t,e,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("3626a802",content,!0,{sourceMap:!1})},546:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("044257fe",content,!0,{sourceMap:!1})},555:function(t,e,n){"use strict";n.r(e);n(13),n(30);var o={props:{content:{type:Object,default:function(){}}},data:function(){return{defaultCssClasses:"btn btn-lg rounded-pill px-4"}},computed:{buttonType:function(){switch(this.content.Type){case"primary":return"btn-primary";case"transparent":return"btn-light btn-outline-dark";default:return"btn-black btn-outline-dark text-white"}},splittedUrl:function(){var t=this.content.Page.Url.split("#"),e=t[1]||!1;return{path:this.localePath(t[0]),hash:e}}}},r=n(33),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline"},["anchor"===t.content.Target?n("a",{class:t.defaultCssClasses+" "+t.buttonType,attrs:{href:t.content.Page.Url}},[t._v(t._s(t.content.Label))]):"external"===t.content.Target?n("a",{class:t.defaultCssClasses+" "+t.buttonType,attrs:{href:t.content.Page.Url,target:"_blank"}},[t._v(t._s(t.content.Label))]):n("nuxt-link",{class:t.defaultCssClasses+" "+t.buttonType,attrs:{to:t.splittedUrl}},[t._v(t._s(t.content.Label))])],1)}),[],!1,null,null,null);e.default=component.exports},562:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"price-disclaimer":"The USDC price is binding. The total amount in EUR is always rounded (depending on the exchange rate)."},"de":{"price-disclaimer":"Der USDC Preis ist verbindlich. Der Gesamtbetrag in EUR wird (abhängig vom Wechselkurs) immer gerundet."}}'),delete t.options._Ctor}},563:function(t,e,n){var map={"./stage_S_DE.webm":564,"./stage_S_EN.webm":565};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=563},564:function(t,e,n){t.exports=n.p+"videos/stage_S_DE.95d01b6.webm"},565:function(t,e,n){t.exports=n.p+"videos/stage_S_EN.4ca8647.webm"},566:function(t,e,n){var map={"./stage_S_DE.mp4":567,"./stage_S_EN.mp4":568};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=566},567:function(t,e,n){t.exports=n.p+"videos/stage_S_DE.60454dd.mp4"},568:function(t,e,n){t.exports=n.p+"videos/stage_S_EN.9829231.mp4"},569:function(t,e,n){var map={"./stage_M_DE.webm":570,"./stage_M_EN.webm":571};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=569},570:function(t,e,n){t.exports=n.p+"videos/stage_M_DE.e97d4d2.webm"},571:function(t,e,n){t.exports=n.p+"videos/stage_M_EN.610621d.webm"},572:function(t,e,n){var map={"./stage_M_DE.mp4":573,"./stage_M_EN.mp4":574};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=572},573:function(t,e,n){t.exports=n.p+"videos/stage_M_DE.beb6893.mp4"},574:function(t,e,n){t.exports=n.p+"videos/stage_M_EN.d26ea4d.mp4"},575:function(t,e,n){var map={"./stage_L_DE.webm":576,"./stage_L_EN.webm":577};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=575},576:function(t,e,n){t.exports=n.p+"videos/stage_L_DE.33ec966.webm"},577:function(t,e,n){t.exports=n.p+"videos/stage_L_EN.4091440.webm"},578:function(t,e,n){var map={"./stage_L_DE.mp4":579,"./stage_L_EN.mp4":580};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=578},579:function(t,e,n){t.exports=n.p+"videos/stage_L_DE.67be7dc.mp4"},580:function(t,e,n){t.exports=n.p+"videos/stage_L_EN.56489a4.mp4"},581:function(t,e,n){"use strict";n(542)},582:function(t,e,n){var o=n(74)(!1);o.push([t.i,".stage-section[data-v-60cf875d]{width:1200px;max-width:100%;margin:0 auto;position:relative}.video[data-v-60cf875d]{width:575px;left:50%;margin-left:-288px;position:absolute}@media (min-width:576px){.video[data-v-60cf875d]{max-width:100%;width:100%;position:relative;margin-left:0;left:0}}.video-link[data-v-60cf875d]{outline:0;height:586px}@media (min-width:576px){.video-link[data-v-60cf875d]{height:auto;display:-webkit-box;display:-ms-flexbox;display:flex}}.button[data-v-60cf875d]{position:absolute;left:auto;right:auto;top:470px;-webkit-transition:opacity 1s linear;transition:opacity 1s linear;width:160px;margin-left:-150px}@media (min-width:576px){.button[data-v-60cf875d]{margin-left:0;top:auto;left:9%;bottom:25%}}@media (min-width:768px){.button[data-v-60cf875d]{left:9%;bottom:28%}}@media (min-width:992px){.button[data-v-60cf875d]{left:7%;bottom:25%}}.button-move[data-v-60cf875d]{opacity:0;margin-left:-80px;left:50%!important;-webkit-animation:fadeIn-data-v-60cf875d 1s linear forwards;animation:fadeIn-data-v-60cf875d 1s linear forwards}@media (min-width:576px){.button-move[data-v-60cf875d]{bottom:22px!important}}@media (min-width:768px){.button-move[data-v-60cf875d]{bottom:42px!important}}@media (min-width:992px){.button-move[data-v-60cf875d]{bottom:12px!important}}@media (min-width:1024px){.button-move[data-v-60cf875d]{bottom:22px!important}}@-webkit-keyframes fadeIn-data-v-60cf875d{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-60cf875d{0%{opacity:0}to{opacity:1}}",""]),t.exports=o},583:function(t,e,n){"use strict";var o=n(538),r=n.n(o);e.default=r.a},586:function(t,e,n){t.exports=n.p+"img/94d6531.png"},587:function(t,e,n){"use strict";n(546)},588:function(t,e,n){var o=n(74)(!1);o.push([t.i,".nfa[data-v-790db0be]{margin:0 auto;max-width:480px;position:relative;overflow:hidden}.nfa img[data-v-790db0be]{-webkit-filter:grayscale(1);filter:grayscale(1);width:100%}.nfa .nfa__progress[data-v-790db0be]{background-position:bottom;background-repeat:no-repeat;background-size:cover;bottom:0;left:0;position:absolute;width:100%;-webkit-transition:max-height 2s linear;transition:max-height 2s linear;overflow:hidden;max-height:0}hr[data-v-790db0be]{max-width:335px}",""]),t.exports=o},602:function(t,e,n){"use strict";n.r(e);n(5);var o={props:{content:{type:Object,default:function(){}}},mounted:function(){var t=this,e=function(t){document.querySelectorAll('.stage-section [data-media="'.concat(t,'"]')).forEach((function(t){t.setAttribute("src",t.getAttribute("data-src"))}))},n=function(){window.innerWidth<576?e("S"):window.innerWidth>=576&&window.innerWidth<992?e("M"):e("L")};n(),window.addEventListener("resize",(function(){document.querySelectorAll(".stage-section source").forEach((function(t){t.removeAttribute("src")})),t.$refs.video.load(),n()})),this.$refs.restart.addEventListener("click",(function(){t.$refs.video.play()})),this.$refs.video.addEventListener("timeupdate",(function(e){e.target.currentTime>6?t.$refs.button.classList.add("button-move"):t.$refs.button.classList.remove("button-move")}))}},r=(n(581),n(33)),c=n(583),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"stage-section"},[o("div",{ref:"restart",staticClass:"video-link",attrs:{to:t.localePath("/details/special-edition-persian-leopard")}},[o("video",{ref:"video",staticClass:"video",attrs:{muted:"",playsinline:"",autoplay:""},domProps:{muted:!0}},[o("source",{attrs:{"data-media":"S","data-src":n(563)("./stage_S_"+("en"===t.$i18n.locale?"EN":"DE")+".webm"),type:"video/webm"}}),t._v(" "),o("source",{attrs:{"data-media":"S","data-src":n(566)("./stage_S_"+("en"===t.$i18n.locale?"EN":"DE")+".mp4"),type:"video/mp4"}}),t._v(" "),o("source",{attrs:{"data-media":"M","data-src":n(569)("./stage_M_"+("en"===t.$i18n.locale?"EN":"DE")+".webm"),type:"video/webm"}}),t._v(" "),o("source",{attrs:{"data-media":"M","data-src":n(572)("./stage_M_"+("en"===t.$i18n.locale?"EN":"DE")+".mp4"),type:"video/mp4"}}),t._v(" "),o("source",{attrs:{"data-media":"L","data-src":n(575)("./stage_L_"+("en"===t.$i18n.locale?"EN":"DE")+".webm"),type:"video/webm"}}),t._v(" "),o("source",{attrs:{"data-media":"L","data-src":n(578)("./stage_L_"+("en"===t.$i18n.locale?"EN":"DE")+".mp4"),type:"video/mp4"}})])]),t._v(" "),o("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#gallery-section",expression:"'#gallery-section'"}],ref:"button",staticClass:"button btn btn-primary btn-lg rounded-pill px-4"},[t._v(t._s(t.$t("button")))])])}),[],!1,null,"60cf875d",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},603:function(t,e,n){"use strict";n.r(e);var o={props:{content:{type:Object,default:function(){}}}},r=n(33),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-5 text-center"},[n("div",{staticClass:"about-section"},[n("section-header",{staticClass:"mb-5 container"},[n("template",{slot:"head"},[t._v(t._s(t.content.SectionHeader.Head))]),t._v(" "),n("template",{slot:"main"},[t._v(t._s(t.content.SectionHeader.Main))]),t._v(" "),n("template",{slot:"foot"},[t._v(t._s(t.content.SectionHeader.Foot))])],2),t._v(" "),n("div",{staticClass:"container-xl"},[n("youtube-player",{attrs:{"youtube-id":t.$t("about.youtube-id")}}),t._v(" "),n("div",{staticClass:"row my-4"},t._l([t.content.TextLeft,t.content.TextMiddle,t.content.TextRight],(function(e){return n("div",{key:e,staticClass:"col-12 col-md-4 d-flex d-md-block"},[n("svg-icon",{staticClass:"svg-icon display-4 mb-2 mr-2 mx-md-auto text-primary",attrs:{name:"check"}}),t._v(" "),n("p",{staticClass:"text-left text-md-center",domProps:{innerHTML:t._s(e)}})],1)})),0)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionHeader:n(529).default,YoutubePlayer:n(541).default})},606:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nfa mb-3"},[e("img",{attrs:{src:n(586),alt:""}})])}],r=(n(5),{props:{content:{type:Object,required:!0}},computed:{stats:function(){var t=0,e=0,n=0;return this.$store.state.sold.items.forEach((function(o){t+=o.population||0,e+=o.population-o.remaining||0,n+=(o.population-o.remaining)*o.eur||0})),{population:t,soldnfas:e,fundings:n}}}}),c=(n(587),n(33)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-container py-5"},[n("div",{staticClass:"container"},[n("section-header",{staticClass:"mb-4"},[n("template",{slot:"head"},[t._v(t._s(t.content.Head.Head))]),t._v(" "),n("template",{slot:"main"},[t._v(t._s(t.content.Head.Main))]),t._v(" "),n("template",{slot:"foot"},[t._v(t._s(t.content.Head.Foot))])],2),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"text-mid-grey"},[t._v("Non-Fungible Animals")]),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("p",{staticClass:"headline display-4 mb-0 text-primary"},[t._v("\n      "+t._s(t.$localisedNumber(t.stats.fundings,"currency"))+"\n    ")]),t._v(" "),n("p",{staticClass:"text-mid-grey text-uppercase"},[t._v(t._s(t.$t("project-stats.fundings-received")))]),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("section-header",{staticClass:"mb-2"},[n("template",{slot:"head"},[t._v(t._s(t.content.Foot.Head))]),t._v(" "),n("template",{slot:"main"},[t._v(t._s(t.content.Foot.Main))]),t._v(" "),n("template",{slot:"foot"},[t._v(t._s(t.content.Foot.Foot))])],2)],1)])}),o,!1,null,"790db0be",null);e.default=component.exports;installComponents(component,{SectionHeader:n(529).default})},613:function(t,e,n){"use strict";var o=n(562),r=n.n(o);e.default=r.a},627:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(54),n(70),{name:"IndexPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,o=t.i18n,e.next=3,n.$homepage.find({_locale:o.locale});case 3:return r=e.sent,e.abrupt("return",{Homepage:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"WWF ".concat(this.Homepage.PageDetails.Title),meta:[{hid:"description",name:"description",content:this.Homepage.PageDetails.Description},{hid:"og:description",name:"og:description",content:this.Homepage.PageDetails.Description}]}},computed:{NFAs:function(){return this.$store.state.nfas.items}},mounted:function(){var t=this;this.$route.hash&&this.$nextTick((function(){t.scrollToHash()}))},methods:{scrollToHash:function(){var t=this;this.$nextTick((function(){t.$scrollTo(t.$route.hash,0,{offset:-24})}))}}}),c=n(33),l=n(613),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h1",{staticClass:"sr-only"},[t._v("WWF "+t._s(t.Homepage.PageDetails.Title))]),t._v(" "),n("stage-section",{attrs:{content:t.Homepage.StageSection}}),t._v(" "),n("background-layer",{attrs:{"background-color":"gray"}},[n("about-section",{attrs:{content:t.Homepage.AboutSection}})],1),t._v(" "),n("section",{staticClass:"section-container py-5 d-flex",attrs:{id:"gallery-section"}},[n("div",{staticClass:"container-fluid p-0"},[n("gallery-section",{attrs:{nfas:t.NFAs}}),t._v(" "),n("p",{staticClass:"px-3 pt-4"},[n("small",[t._v("\n          "+t._s(t.$t("price-disclaimer"))+"\n        ")])])],1)]),t._v(" "),n("background-layer",{attrs:{"background-color":"gray"}},[n("div",{staticClass:"container py-5"},[n("section-header",{staticClass:"mb-4"},[n("template",{slot:"head"},[t._v(t._s(t.Homepage.GetReadySection.SectionHeader.Head))]),t._v(" "),n("template",{slot:"main"},[t._v(t._s(t.Homepage.GetReadySection.SectionHeader.Main))]),t._v(" "),n("template",{slot:"foot"},[t._v(t._s(t.Homepage.GetReadySection.SectionHeader.Foot))])],2),t._v(" "),n("div",{staticClass:"flex"},[n("button-custom",{staticClass:"d-block d-md-inline mx-2",attrs:{content:t.Homepage.GetReadySection.ButtonLeft}}),t._v(" "),n("button-custom",{staticClass:"d-block d-md-inline mx-2 mt-2 mt-md-0",attrs:{content:t.Homepage.GetReadySection.ButtonRight}})],1)],1)]),t._v(" "),n("project-stats",{attrs:{content:t.Homepage.ProjectStats}}),t._v(" "),n("background-layer",{attrs:{"background-color":"gray"}},[n("div",{staticClass:"container py-5"},[n("section-header",[n("template",{slot:"head"},[t._v(t._s(t.Homepage.BlockchainSection.SectionHeader.Head))]),t._v(" "),n("template",{slot:"main"},[t._v(t._s(t.Homepage.BlockchainSection.SectionHeader.Main))])],2),t._v(" "),n("img",{staticClass:"my-3",attrs:{srcset:t.$getStrapiUrl(t.Homepage.BlockchainSection.Image.url)+" 2x",alt:t.Homepage.BlockchainSection.Image.alternativeText}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.$renderStrapiMarkdown(t.Homepage.BlockchainSection.Text))}})],1)]),t._v(" "),n("b-container",{staticClass:"py-5"},[t._l(t.Homepage.HomepageHelp.SectionHeaders,(function(e){return n("section-header",{key:e.id,staticClass:"mb-5",attrs:{image:e.Image}},[n("template",{slot:"main"},[t._v(t._s(e.Main))]),t._v(" "),n("template",{slot:"foot"},[t._v(t._s(t.$renderStrapiMarkdown(e.Foot)))])],2)})),t._v(" "),n("ButtonCustom",{attrs:{content:t.Homepage.HomepageHelp.Button}})],2)],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{StageSection:n(602).default,AboutSection:n(603).default,BackgroundLayer:n(531).default,GallerySection:n(623).default,SectionHeader:n(529).default,ButtonCustom:n(555).default,ProjectStats:n(606).default,ButtonCustom:n(555).default})}}]);