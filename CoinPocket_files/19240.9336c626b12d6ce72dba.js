(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[19240],{608902:t=>{t.exports={}},1338:t=>{t.exports={"common-tooltip":"common-tooltip-C8z_hVli","common-tooltip--hidden":"common-tooltip--hidden-C8z_hVli","common-tooltip--horizontal":"common-tooltip--horizontal-C8z_hVli","common-tooltip--farther":"common-tooltip--farther-C8z_hVli","common-tooltip--vertical":"common-tooltip--vertical-C8z_hVli","common-tooltip-farther":"common-tooltip-farther-C8z_hVli","common-tooltip--direction_normal":"common-tooltip--direction_normal-C8z_hVli","common-tooltip__body":"common-tooltip__body-C8z_hVli","common-tooltip__button-container":"common-tooltip__button-container-C8z_hVli","common-tooltip__body--no-buttons":"common-tooltip__body--no-buttons-C8z_hVli","common-tooltip__button":"common-tooltip__button-C8z_hVli","common-tooltip--direction_reversed":"common-tooltip--direction_reversed-C8z_hVli","common-tooltip__ear-holder":"common-tooltip__ear-holder-C8z_hVli","common-tooltip__ear-holder--below":"common-tooltip__ear-holder--below-C8z_hVli","common-tooltip__ear-holder--above":"common-tooltip__ear-holder--above-C8z_hVli","common-tooltip__ear-holder--before":"common-tooltip__ear-holder--before-C8z_hVli","common-tooltip__ear-holder--after":"common-tooltip__ear-holder--after-C8z_hVli","common-tooltip__body--with-hotkey":"common-tooltip__body--with-hotkey-C8z_hVli","common-tooltip__body--width_wide":"common-tooltip__body--width_wide-C8z_hVli","common-tooltip__body--width_narrow":"common-tooltip__body--width_narrow-C8z_hVli","common-tooltip__body--no-padding":"common-tooltip__body--no-padding-C8z_hVli","common-tooltip__hotkey-block":"common-tooltip__hotkey-block-C8z_hVli","common-tooltip__hotkey-block--divider":"common-tooltip__hotkey-block--divider-C8z_hVli","common-tooltip__hotkey-text":"common-tooltip__hotkey-text-C8z_hVli","common-tooltip__hotkey-button":"common-tooltip__hotkey-button-C8z_hVli","common-tooltip__plus-sign":"common-tooltip__plus-sign-C8z_hVli"}},499994:(t,e,o)=>{"use strict";o.d(e,{getTooltipData:()=>i,setTooltipData:()=>n});const s=new WeakMap;function i(t,e){const o=s.get(t);return o instanceof Function?o(e):o&&o[e]}function n(t,e,o){if(o instanceof Function)return void s.set(t,o);const i=s.get(t),n=void 0===i||i instanceof Function?{}:i;n[e]=o,s.set(t,n)}},604286:(t,e,o)=>{"use strict";o.d(e,{hotKeySerialize:()=>i,hotKeyDeserialize:()=>n});var s=o(809350);function i(t){return(0,s.clean)(JSON.stringify(t))}function n(t){return JSON.parse((0,s.clean)(t,!0))}},309103:(t,e,o)=>{"use strict";o.r(e),o.d(e,{hide:()=>G,show:()=>j,showOnElement:()=>$,tooltipClickHandler:()=>B,updateTooltipText:()=>P});var s=o(778785);let i=0,n=0,a=0;function r(){clearTimeout(i),clearTimeout(n),clearTimeout(a)}function l(t,e){i=setTimeout(t,e)}const c="tooltip-root-element";let d;function _(){const t=document.getElementById(c);t?d=t:(d=document.createElement("div"),d.id=c,document.body.appendChild(d))}function u(){d&&(d.innerHTML="")}"interactive"===document.readyState?_():document.addEventListener("DOMContentLoaded",_)
;var h=o(650151);const p={default:"",white:"theme-white","round-shadow":"theme-round-shadow"},m=Object.keys(p);var y=o(499994),b=o(604286),f=o(878134),v=o(768038),g=(o(984919),o(587080)),w=o(43329),S=o(638456),L=o(1338);function x(t){const e=t.hasAttribute("data-tooltip")?t.getAttribute("data-tooltip"):t.getAttribute("title");return e&&((0,y.setTooltipData)(t,"text",e),t.removeAttribute("title")),(0,y.getTooltipData)(t,"text")||""}function T(t){const e=V.cloneNode(!0),o=z(e),{content:s}=t;switch(s.type){case"element":o.innerHTML="",o.appendChild(s.data);break;case"html":o.innerHTML=s.data;break;case"text":if(t.hotkey){const t=D.cloneNode(!0);t.innerText=s.data,o.appendChild(t)}else o.innerText=s.data}if(t.hotkey){const e="none"!==s.type,i=A.cloneNode(!0),n=(0,b.hotKeyDeserialize)(t.hotkey),a=n.keys.map((t=>`<span class="${L["common-tooltip__hotkey-button"]}">${t}</span>`));i.innerHTML=function(t,e){const o=/{\d}|{hotkey_\d}/gi;return t.replace(o,(t=>{const o=Number(t.match(/\d/));return e[o]}))}(n.text,a).replace(/\s\+\s/g,`<span class="${L["common-tooltip__plus-sign"]}">+</span>`),o.classList.add(L["common-tooltip__body--with-hotkey"]),e&&i.classList.add(L["common-tooltip__hotkey-block--divider"]),o.appendChild(i)}return e.addEventListener("contextmenu",g.preventDefault),e}function C(t,e){const o=e.rect;if(!o)return;!function(t,e){const o=m.includes(e)?p[e]:"";t.classList.remove(...m.map((t=>p[t])).filter((t=>!!t))),o&&!t.classList.contains(o)&&t.classList.add(o)}(t,e.colorTheme||"default"),e.addClass&&t.classList.add(e.addClass);const s=z(t),i=t.querySelector(`.${L["common-tooltip__button-container"]}`);s.classList.toggle(L["common-tooltip__body--width_wide"],Boolean(e.wide)),s.classList.toggle(L["common-tooltip__body--no-padding"],Boolean(e.noPadding)),s.classList.toggle(L["common-tooltip__body--width_narrow"],Boolean(e.narrow)),s.classList.toggle(L["common-tooltip__body--no-buttons"],!0),s.style.left=M(0),s.style.width=M(s.clientWidth+(Boolean(e.noPadding)?0:2));const n=document.body.clientWidth,a=S.CheckMobile.iOS()||(0,S.supportTouch)()&&(0,S.isMac)()?window.innerHeight:document.body.clientHeight,r=e.vertical,l=e.extendMargin||r&&o.w<20||!r&&o.h<20;t.classList.toggle(L["common-tooltip--farther"],l),t.classList.toggle(L["common-tooltip--vertical"],r),t.classList.toggle(L["common-tooltip--horizontal"],!r);const c=function(t){return t.querySelector(`.${L["common-tooltip__ear-holder"]}`)}(t),d=t.offsetHeight;if(r){const r=10,l=a-10,_=12,u=r+_,h=l-_,p=(0,w.clamp)(o.y+o.h/2,u,h)-d/2,m=p+d;t.style.left=M(o.x+o.w),t.style.top=M(p),p<r?s.style.top=i.style.top=M(r-p):m>l&&(s.style.top=i.style.top=M(l-m));const{right:y}=(t.querySelector(":last-child")||s).getBoundingClientRect(),b=y+10>n;t.classList.toggle(L["common-tooltip--direction_reversed"],b),t.classList.toggle(L["common-tooltip--direction_normal"],!b);let f=b?"after":"before";(0,v.isRtl)()?(f=e.otr?"after":f,f=e.otl?"before":f):(f=e.otr?"before":f,f=e.otl?"after":f),c.classList.toggle(L["common-tooltip__ear-holder--before"],"before"===f),
c.classList.toggle(L["common-tooltip__ear-holder--after"],"after"===f),"after"===f&&(t.style.left="auto",t.style.right=M(n-o.x))}else{const r=o.x-(s.offsetWidth-o.w)/2,l=n-10-t.offsetWidth,_=Math.max(10,Math.min(r,l));t.style.left=M(_);const u=l<r;t.classList.toggle(L["common-tooltip--direction_reversed"],u),t.classList.toggle(L["common-tooltip--direction_normal"],!u);const h=function(t,e,o,s){if(t.above)return O(e,s)?"above":"below";if(t.below)return function(t,e,o){return o.y+o.h+e+10<t}(e,o,s)?"below":"above";return O(o,s)?"above":"below"}(e,a,d,o);"above"===h?t.style.bottom=M(a-o.y):t.style.top=M(o.y+o.h),c.classList.add("above"===h?L["common-tooltip__ear-holder--above"]:L["common-tooltip__ear-holder--below"]);const{left:p}=s.getBoundingClientRect();let m=Math.trunc(o.x+o.w/2-(p+s.clientWidth/2));t.style.left=M(_+m),t.style.width=M(s.clientWidth+i.clientWidth),m=u?Math.max(0,m):Math.min(0,m),i.style.left=M(-m),s.style.left=M(-m)}}function k(t){t.classList.toggle(L["common-tooltip--hidden"],!0)}function M(t){return`${Math.floor(t)}px`}const q=`\n\t<div id="common-tooltip-wrapper" class="${L["common-tooltip"]}">\n\t\t<div class="${L["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${L["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${L["common-tooltip__button-container"]}"></div>\n\t</div>\n`,F=`\n\t<div class="${L["common-tooltip__hotkey-block"]}"></div>\n`,E=`\n\t<div class="${L["common-tooltip__hotkey-text"]}"></div>\n`,V=(0,f.parseHtmlElement)(q),A=(0,f.parseHtmlElement)(F),D=(0,f.parseHtmlElement)(E);function z(t){return t.querySelector(`.${L["common-tooltip__body"]}`)}function O(t,e){return 10+t<e.y}var I=o(799786);let H=!1,N=null,Q=null;s.mobiletouch||document.addEventListener("mouseover",(function(t){var e;if(null===(e=t.sourceCapabilities)||void 0===e?void 0:e.firesTouchEvents)return;const o=t.target,s=t.currentTarget,i=function(t,e,o){const s=[];for(;t&&t!==e;)t.classList&&t.classList.contains(o)&&s.push(t),t=t.parentElement||J(t.parentNode);return s}(o,s,"apply-common-tooltip"),n=()=>{Q&&(Q.destroy(),Q=null)};for(const e of i){if("buttons"in t){if(1&t.buttons)continue}else if(1===t.which)continue;const o=()=>$(e);if(o()){const t=t=>{t.target instanceof Element&&t.target.contains(e)&&s(null,!0)},s=(i,a=!1)=>{e.removeEventListener("common-tooltip-update",o),e.removeEventListener("mouseleave",s),e.removeEventListener("mousedown",s),document.removeEventListener("scroll",t,{capture:!0}),n(),G(a)};e.addEventListener("common-tooltip-update",o),e.addEventListener("mouseleave",s),e.addEventListener("mousedown",s),document.addEventListener("scroll",t,{capture:!0}),null===Q&&(Q=(0,I.createGroup)({desc:"Tooltip"}),Q.add({desc:"Hide",hotkey:27,handler:s}));break}}}),!0);const U=new MutationObserver((()=>{if(N&&N.options.target){let t;t="isConnected"in N.options.target?N.options.target.isConnected:document.body.contains(N.options.target),t||G()}})),$=(t,e={})=>{const{content:o,...s}=X(e),i=function(t){const e=x(t),o=t.getBoundingClientRect(),s={h:o.height,w:o.width,x:o.left,y:o.top
},i=t.getAttribute("data-color-theme")||"",n=t.classList.contains("common-tooltip-html"),a=parseInt(t.getAttribute("data-tooltip-delay")||""),r=parseInt(t.getAttribute("data-tooltip-debounce")||"");let l={type:"none"};return e&&(l={type:n?"html":"text",data:e}),{above:t.classList.contains("common-tooltip-above"),below:t.classList.contains("common-tooltip-below"),otl:t.classList.contains("common-tooltip-otl"),otr:t.classList.contains("common-tooltip-otr"),vertical:t.classList.contains("common-tooltip-vertical"),hotkey:t.getAttribute("data-tooltip-hotkey"),narrow:t.classList.contains("common-tooltip-narrow"),wide:t.classList.contains("common-tooltip-wide"),colorTheme:i,tooltipDelay:a,tooltipDebounce:r,rect:s,content:l,target:t}}(t),n=Object.assign(i,s);return"none"!==o.type&&(n.content=o),!("none"===n.content.type&&!n.hotkey)&&(n.target=t,j(n),!0)},j=t=>{const e=X(t),o=T(e);var s;if(N={options:e,element:o},s=o,u(),d&&d.appendChild(s),r(),!H)return k(o),void l((()=>K(o)),function(t){return"number"!=typeof t.tooltipDelay||isNaN(t.tooltipDelay)?500:t.tooltipDelay}(e));const{tooltipDebounce:i}=t;"number"!=typeof i||isNaN(i)?K(o):l((()=>K(o)),i)},P=t=>x(t);function B(t){s.mobiletouch&&($(t.currentTarget,{tooltipDelay:0}),document.addEventListener("scroll",R),document.addEventListener("touchstart",R))}function R(){document.removeEventListener("scroll",R),document.removeEventListener("touchstart",R),G()}function W(){u(),H=!1,N=null}const G=t=>{if(r(),U.disconnect(),!N)return;if(!t&&!H)return;const{element:e,options:o}=N,s=()=>{e.removeEventListener("mouseleave",s),k(e),t?W():a=setTimeout((()=>{W()}),250)};var i,l;o.tooltipHideDelay?(i=()=>{e.querySelector(":hover")?e.addEventListener("mouseleave",s):s()},l=o.tooltipHideDelay,n=setTimeout(i,l)):s()};function K(t){const{options:e}=(0,h.ensureNotNull)(N);if(C(t,e),function(t){t.classList.toggle(L["common-tooltip--hidden"],!1)}(t),U.observe(document,{childList:!0,subtree:!0}),H=!0,e.forceHideOnMove){const t=()=>{document.removeEventListener("mousemove",t),G()};document.addEventListener("mousemove",t)}}function J(t){return t&&(t.nodeType===Node.ELEMENT_NODE?t:null)}function X(t){if(function(t){return"content"in t}(t))return t;const{inner:e,html:o,text:s,...i}=t;let n={type:"none"};return e&&(n={type:"element",data:e}),s&&(n={type:o?"html":"text",data:s}),{content:n,...i}}},780792:(t,e,o)=>{"use strict";o.d(e,{AbstractIndicator:()=>r});var s=o(272001),i=o(777491),n=o(947809);o(309103);const a=(0,s.getLogger)("GUI.Blocks.AbstractIndicator");class r{constructor(t){this._classSuffix="",this._quoteSessionPrefix="abstract-indicator",this._shortMode=!1,this._showTooltip=!0,this._subscribed=!1,this._tooltipType="custom",this._lastTooltipText="",this._quoteSession=t.quoteSession}getValue(){return this._value}getTooltipText(){return this._labelMap[this._value]||""}getLabel(){return this._labelMap[this._value]||""}getElement(){return this._el}update(t,e){this._updateValue(t,e),this._render()}setTooltipEnabled(t=!1){this._showTooltip!==t&&(this._showTooltip=t,this._renderTooltip())}
enableShortMode(){!0!==this._shortMode&&(this._shortMode=!0,this._render())}disableShortMode(){!1!==this._shortMode&&(this._shortMode=!1,this._render())}isShortModeEnabled(){return this._shortMode}start(){!this._subscribed&&this._symbolName&&(this._quoteSession||(this._quoteSession=(0,n.getQuoteSessionInstance)("simple")),this._quoteSession.subscribe(this._getQuoteSessionId(),this._symbolName,this.update.bind(this)),this._subscribed=!0)}stop(){this._subscribed&&this._quoteSession&&this._symbolName&&(this._quoteSession.unsubscribe(this._getQuoteSessionId(),this._symbolName),this._subscribed=!1)}_init(t){this._el=t.el?t.el:document.createElement("span"),this._el.innerHTML="",this._classMap=t.classMap,this._labelMap=t.labelMap,this._showTooltip=t.showTooltip,this._classSuffix=t.classSuffix,this._symbolName=t.symbol,t.tooltipType&&(this._tooltipType=t.tooltipType),this._quoteSessionGUID=(0,i.guid)(),!0===t.short&&this.enableShortMode(),t.data&&this._updateValue(t.data)}_clearClasses(){Object.values(this._classMap).map((t=>{this._el.classList.remove(`${t}`),this._el.classList.remove(`${t}${this._classSuffix}`)}))}_render(){this._renderClasses(),this._renderTooltip(),this._renderLabel()}_renderLabel(){this._el.textContent=this.getLabel()}_updateValue(t,e){const o=this._getValueFromData(t);(e||o!==this._value)&&(this._value=o)}_renderClasses(){const t=this._el.classList;t.add(this._componentClass,this._componentClass+this._classSuffix);const e=this._classMap[this._value];for(const o in this._classMap){const s=this._classMap[o];s&&(s===e?t.add(s,s+this._classSuffix):t.remove(s,s+this._classSuffix))}!e&&this._value&&a.logWarn(`no className for status ${this._value}`)}_renderTooltip(){const t=this._showTooltip?this.getTooltipText():"";t!==this._lastTooltipText&&(this._lastTooltipText=t,this._el.setAttribute("title",t),"custom"===this._tooltipType&&this._el.classList.toggle("apply-common-tooltip",this._showTooltip))}_getQuoteSessionId(){return`${this._quoteSessionPrefix}.${this._quoteSessionGUID}`}}},719240:(t,e,o)=>{"use strict";o.r(e),o.d(e,{DataModeIndicator:()=>c});var s=o(777754),i=(o(984919),o(608902),o(780792));const n={connecting:s.t(null,void 0,o(413859)),delayed:s.t(null,void 0,o(78211)),delayed_streaming:s.t(null,void 0,o(78211)),endofday:s.t(null,void 0,o(132023)),forbidden:s.t(null,void 0,o(113439)),realtime:s.t(null,void 0,o(906530)),snapshot:s.t(null,void 0,o(502927)),loading:"",replay:s.t(null,void 0,o(688506))},a={connecting:s.t(null,{context:"data_mode_connecting_letter"},o(52587)),delayed:s.t(null,{context:"data_mode_delayed_letter"},o(469219)),delayed_streaming:s.t(null,{context:"data_mode_delayed_streaming_letter"},o(426211)),endofday:s.t(null,{context:"data_mode_end_of_day_letter"},o(960582)),forbidden:s.t(null,{context:"data_mode_forbidden_letter"},o(957357)),realtime:s.t(null,{context:"data_mode_realtime_letter"},o(647310)),snapshot:s.t(null,{context:"data_mode_snapshot_letter"},o(87817)),loading:"",replay:s.t(null,{context:"data_mode_replay_letter"},o(214485))},r={streaming:"realtime"},l={classMap:{
connecting:"tv-data-mode--connecting",delayed:"tv-data-mode--delayed",delayed_streaming:"tv-data-mode--delayed",endofday:"tv-data-mode--endofday",forbidden:"tv-data-mode--forbidden",realtime:"tv-data-mode--realtime",snapshot:"tv-data-mode--snapshot",loading:"tv-data-mode--loading",replay:"tv-data-mode--replay"},classSuffix:"",data:{values:{update_mode:"connecting"}},labelMap:n,modeInterval:600,short:!1,shortLabelMap:a,showTooltip:!0,tooltipType:"custom"};class c extends i.AbstractIndicator{constructor(t){super(t),this._quoteSessionPrefix="data-mode-indicator",this._componentClass="tv-data-mode",this._init(t)}getLabel(){return!0===this._shortMode?this._shortLabelMap[this._value]||"":super.getLabel()}setMode(t,e){this.update({values:{update_mode:t,update_mode_seconds:e}})}hide(){this._el.classList.add("i-hidden")}show(){this._el.classList.remove("i-hidden")}getTooltipText(){let t="";const e=this.getValue();if(""===e)return t;switch(e){case"delayed":t=s.t(null,void 0,o(728332));break;case"delayed_streaming":t=s.t(null,void 0,o(887267));break;default:t=this._labelMap[e]||t}return["delayed","delayed_streaming"].includes(e)&&(t=t.format({number:String(Math.round(this._modeInterval/60))})),t}_init(t={}){const e=Object.assign({},l,t);this._modeInterval=e.modeInterval||600,this._shortLabelMap=e.shortLabelMap||a,super._init(e),this._render()}_getValueFromData(t){let e;return e=void 0!==t.values&&void 0!==t.values.update_mode?t.values.update_mode:this.getValue(),r[e]||e}_updateValue(t,e){void 0!==t.values&&void 0!==t.values.update_mode_seconds&&(this._modeInterval=t.values.update_mode_seconds),super._updateValue(t,e)}}},461909:(t,e,o)=>{"use strict";function s(t){if(void 0===t)return null;const e=t.match(/(delayed_streaming)_([\d]{1,4})/);return null===e?null:{mode:e[1],interval:parseInt(e[2])}}function i(t){const e=s(t.update_mode);return null===e||(t.update_mode=e.mode,t.update_mode_seconds=e.interval),t}o.r(e),o.d(e,{parseUpdateMode:()=>s,normalizeUpdateMode:()=>i})},736844:(t,e,o)=>{"use strict";o.r(e),o.d(e,{QuoteCache:()=>i,QUOTE_FIELDS:()=>n,QUOTE_FIELDS_CACHE:()=>a});var s=o(650151);class i{constructor(t){this._cache=new Map,this._fields=[...t.fields]}update(t,e,o){const i=(0,s.ensureDefined)(t.symbolname);if(this._cache.has(i)||this._cache.set(i,{symbolname:i,status:t.status,values:{}}),"error"===t.status)return;const n=(0,s.ensureDefined)(this._cache.get(i));n.status=t.status;for(const s of this._fields)e.has(s)&&(o||void 0!==t.values[s])&&(n.values[s]=t.values[s])}get(t){var e;return null!==(e=this._cache.get(t))&&void 0!==e?e:null}fields(){return this._fields}}
const n=new Set(["pro_name","base_name","logoid","currency-logoid","base-currency-logoid","short_name","description","exchange","listed_exchange","type","country_code","provider_id","sector","typespecs","industry","currency_id","last_price","fractional","minmov","minmove2","pricescale","change","change_percent","volume","average_volume","market_cap_basic","total_revenue","earnings_per_share_basic_ttm","price_earnings_ttm","beta_1_year","dps_common_stock_prim_issue_fy","dividends_yield","earnings_release_next_date","earnings_per_share_forecast_next_fq","earnings_release_date","earnings_per_share_fq","fundamental_currency_code","symbol-primaryname","currency_code","rates_mc","rates_fy","rates_ttm","value_unit_id","update_mode","language","local_description","short_description","source","source2","format","recommendation_mark","last_report_frequency"]),a=new i({fields:n})},947809:(t,e,o)=>{"use strict";o.r(e),o.d(e,{getQuoteSessionInstance:()=>a,setQuoteSessionInstance:()=>r,getQuoteSessionNoEnsure:()=>l,destroyQuoteSessions:()=>c});var s=o(291670),i=o.n(s);const n={};function a(t="full"){return n[t]||r(t,new(i())(t)),n[t]}function r(t="full",e){n[t]=e}function l(t="full"){return n[t]}function c(){for(const t in n)if(n.hasOwnProperty(t)){const e=n[t];void 0!==e&&e.destroy(),delete n[t]}}},801669:(t,e,o)=>{"use strict";o.d(e,{QuoteSession:()=>i});var s=o(777491);class i{constructor(t,e=(0,s.randomHash)()){this._sessionstarted=!1,this._globalHandler=null,this._chartApi=t,this._sessionid="qs_"+e}destroy(){this._sessionstarted&&(this._chartApi.quoteDeleteSession(this._sessionid),this._sessionstarted=!1)}connected(){return this._chartApi.connected()}connect(t){this._globalHandler=t,this._chartApi.createSession(this._sessionid,this),this._chartApi.connect()}disconnect(){this._chartApi.disconnect()}quoteAddSymbols(t){this._chartApi.quoteAddSymbols(this._sessionid,t)}quoteRemoveSymbols(t){this._chartApi.quoteRemoveSymbols(this._sessionid,t)}quoteFastSymbols(t){this._chartApi.quoteFastSymbols(this._sessionid,t)}quoteSetFields(t){this._chartApi.quoteSetFields(this._sessionid,t)}onMessage(t){var e;switch(t.method){case"connected":this._sessionstarted||(this._chartApi.quoteCreateSession(this._sessionid),this._sessionstarted=!0);break;case"disconnected":this._sessionstarted=!1}null===(e=this._globalHandler)||void 0===e||e.call(this,t)}quoteHibernateAll(){this._chartApi.quoteHibernateAll(this._sessionid)}}window.TradingView.QuoteSession=i},291670:(t,e,o)=>{"use strict";t=o.nmd(t);var s=o(869403),i=o(343370).default,n=o(12481).default,a=o(368725).PriceFormatter;const{uniq:r}=o(588565);var l=o(777491);const{normalizeUpdateMode:c}=o(461909);var d=o(120149).deepExtend;const{QUOTE_FIELDS_CACHE:_,QUOTE_FIELDS:u}=o(736844);var h;function p(t,e){this.options=Object.assign({throttleTimeout:125},e),this._connected=!1,this._symbol_data={},this._subscriptions={},this.onConnect=new s,this.onDisconnect=new s,this._quoteApi=new h(window.ChartApiInstance),this._type=t||"full",this._delayUpdateFastSymbols=n(this._updateFastSymbols,250),
this._throttledSymbolData={},this._formatterValuesCache={},this._waitingForFormatters={},this._snapshotValuesCache={},this._waitingForSnapshot={},this.connect()}h=o(801669).QuoteSession,p.prototype.destroy=function(){this._quoteApi.destroy(),this._quoteApi=null,this._connected=!1,this.onDisconnect.fire()},p.prototype.typeFields={},p.prototype.typeFields.simple=["base-currency-logoid","ch","chp","currency-logoid","currency_code","currency_id","base_currency_id","current_session","description","exchange","format","fractional","is_tradable","language","local_description","listed_exchange","logoid","lp","lp_time","minmov","minmove2","original_name","pricescale","pro_name","short_name","type","typespecs","update_mode","volume","value_unit_id"],p.prototype.typeFields.simpleDetailed=[].concat(p.prototype.typeFields.simple,["ask","bid","fundamentals","high_price","is_tradable","low_price","open_price","prev_close_price","rch","rchp","rtc","rtc_time","status","basic_eps_net_income","beta_1_year","earnings_per_share_basic_ttm","industry","market_cap_basic","price_earnings_ttm","sector","volume","dividends_yield","timezone"]),p.prototype.typeFields.full=[],p.prototype.typeFields.watchlist=[].concat(p.prototype.typeFields.simple,["rchp","rtc","country_code","provider_id"]),p.prototype.typeFields.portfolio=["pro_name","short_name","exchange","listed_exchange","description","sector","type","typespecs","industry","currency_code","currency_id","ch","chp","logoid","currency-logoid","base-currency-logoid","earnings_per_share_forecast_next_fq","earnings_release_next_date","earnings_release_date","earnings_per_share_fq","lp","fractional","minmov","minmove2","pricescale","volume","average_volume","market_cap_basic","total_revenue","earnings_per_share_basic_ttm","price_earnings_ttm","beta_1_year","dps_common_stock_prim_issue_fy","dividends_yield","fundamental_currency_code","rates_mc","rates_fy","rates_ttm","format"],p.prototype.typeFields.notes=["short_name","pro_name","logoid","currency-logoid","base-currency-logoid","symbol-primaryname","type","typespecs"],p.prototype.connect=function(t){this._quoteApi.connect(this.quoteHandler.bind(this))},p.prototype.quoteHandler=function(t){var e=t.method,o=t.params;switch(e){case"connected":this._connected||(this._connected=!0,this.onConnected());break;case"quote_list_fields":break;case"quote_symbol_data":this._connected&&this.onSymbolData(o[0]);break;case"quote_completed":this._connected&&this.onSymbolData({symbolname:o[0],complete:performance.now(),values:{}});break;case"disconnected":this._connected&&(this._connected=!1,this.onDisconnect.fire())}},p.prototype.onConnected=function(){this.setFields();var t=Object.keys(this._symbol_data);t.length&&(this._quoteApi.quoteAddSymbols(t),this._delayUpdateFastSymbols()),this.onConnect.fire()},p.prototype.setFields=function(){var t=p.prototype.typeFields[this._type];t&&t.length&&this._quoteApi.quoteSetFields(t)},p.prototype.onSymbolData=function(t){try{t.status&&_.update(t,u,!1)}catch(t){}var e=t.symbolname,o=this._throttledSymbolData[e]
;o||(o=this._throttledSymbolData[e]={fnDispatch:i(this.dipatchSymbolData.bind(this),this.options.throttleTimeout)}),o.cache?d(o.cache,t):o.cache=t,o.fnDispatch(e)},p.prototype._parseUpdateMode=function(t){c(t)},p.prototype.dipatchSymbolData=function(t){var e=this._symbol_data[t],o=this._throttledSymbolData[t].cache;if(delete this._throttledSymbolData[t].cache,this._symbol_data[t])for(var s in d(e,o),e.values&&this._parseUpdateMode(e.values),this._subscriptions){var i=this._subscriptions[s];i.has(t)&&i.get(t).forEach((function(t){t(e,o)}))}},p.prototype.subscribe=function(t,e,o){this._subscriptions[t]=this._subscriptions[t]||new Map;var s=this._subscriptions[t];e=[].concat(e);var i=[];e.forEach((function(t){this._symbol_data[t]?s&&s.has(t)||this._symbol_data[t].subscribers_count++:(this._symbol_data[t]={subscribers_count:1},i.push(t)),s.has(t)||s.set(t,[]),s.get(t).push(o),s.get(t).fast=!0,this._symbol_data[t]&&this._symbol_data[t].values&&o(this._symbol_data[t],this._symbol_data[t])}),this),i.length&&this._connected&&(this._quoteApi.quoteAddSymbols(i),this._delayUpdateFastSymbols())},p.prototype.unsubscribe=function(t,e,o){e=[].concat(e);for(var s=this._subscriptions[t],i=[],n=0;n<e.length;n++){var a=e[n];if(s)if(s.has(a)&&o){var r=s.get(a).indexOf(o);~r&&s.get(a).splice(r,1),s.get(a).length||s.delete(a)}else s.delete(a);s&&0===s.size&&delete this._subscriptions[t],this._symbol_data.hasOwnProperty(a)&&(s&&!s.has(a)&&this._symbol_data[a].subscribers_count--,this._symbol_data[a].subscribers_count||(delete this._symbol_data[a],i.push(a)))}i.length&&this._connected&&(this._quoteApi.quoteRemoveSymbols(i),this._delayUpdateFastSymbols())},p.prototype.setFastSymbols=function(t,e){if(this._subscriptions[t])for(var o=this._subscriptions[t],s=Array.from(o.keys()),i=0;i<s.length;++i){var n=s[i];o.get(n).fast=-1!==e.indexOf(n)}this._delayUpdateFastSymbols()},p.prototype._updateFastSymbols=function(){if(this._connected){var t=this._fastSymbols();0===t.length?this._quoteApi.quoteHibernateAll():this._quoteApi.quoteFastSymbols(t)}},p.prototype._delayUpdateFastSymbols=p.prototype._updateFastSymbols,p.prototype._fastSymbols=function(){var t=[];for(var e in this._subscriptions)for(var o=this._subscriptions[e],s=Array.from(o.keys()),i=0;i<s.length;++i){var n=s[i];o.get(n).fast&&t.push(n)}return t=r(t)},p.prototype.formatter=function(t,e){var o=this;if(this._waitingForFormatters[t])return this._waitingForFormatters[t];function s(t){var o=e&&!t.fractional?1:t.minmov;return new a(t.pricescale,o,t.fractional,t.minmove2)}var i=new Promise((function(e,i){if(o._formatterValuesCache[t])e(s(o._formatterValuesCache[t]));else{var n=l.guid();o.subscribe(n,[t],(function(a){"error"===a.status&&(o._waitingForFormatters[t]=null,i("Quotes snapshot is not received")),function(t){return t&&null!=t.pricescale&&null!=t.minmov}(a.values)&&(o._waitingForFormatters[t]=null,o._formatterValuesCache[t]=a.values,e(s(a.values)),o.unsubscribe(n,t))}))}}));return this._waitingForFormatters[t]=i,i},p.prototype.snapshot=function(t){var e=this
;if(this._waitingForSnapshot[t])return this._waitingForSnapshot[t];var o=new Promise((function(o,s){if(e._snapshotValuesCache[t])o(e._snapshotValuesCache[t]);else{var i=l.guid();e.subscribe(i,[t],(function(n){"error"===n.status&&(e._waitingForSnapshot[t]=null,s("Quotes snapshot is not received"));var a=n.values;a&&a.minmov&&a.pricescale&&a.description&&(e._waitingForSnapshot[t]=null,e._snapshotValuesCache[t]=a,o(a),e.unsubscribe(i,t))}))}}));return this._waitingForSnapshot[t]=o,o},TradingView.QuoteSessionMultiplexer=p,t&&t.exports&&(t.exports=p)},809350:(t,e,o)=>{t=o.nmd(t),TradingView.cleanButAmpersand=function(t,e){var o=e?["&amp;"]:["&"];return TradingView.clean(t,e,o)},TradingView.strip_tags=function(t){return t&&t.replace?t.replace(/(<([^>]+)>)/gi,""):t},TradingView.encodeSpread=function(t){return encodeURIComponent(t)},TradingView.clean=function(t,e,o){var s=[["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#039;"],["'","&#39;"]],i=t;if(!t||!t.replace)return i;for(var n=0;n<s.length;n++){var a=s[n][0],r=s[n][1];o&&o.indexOf&&-1!==o.indexOf(e?r:a)||(i=e?i.replace(new RegExp(r,"g"),a):i.replace(new RegExp(a,"g"),r))}return i},t&&t.exports&&(t.exports={clean:TradingView.clean,cleanButAmpersand:TradingView.cleanButAmpersand,stripTags:TradingView.strip_tags})},120149:(t,e,o)=>{"use strict";function s(t,...e){return t&&"object"==typeof t?(0===e.length||e.forEach((e=>{null!=e&&"object"==typeof e&&Object.keys(e).forEach((o=>{const n=t[o],a=e[o];if(a===t)return;const r=Array.isArray(a);if(a&&(i(a)||r)){let e;e=r?n&&Array.isArray(n)?n:[]:n&&i(n)?n:{},t[o]=s(e,a)}else void 0!==a&&(t[o]=a)}))})),t):t}function i(t){if(!t||"[object Object]"!==Object.prototype.toString.call(t))return!1;const e=Object.getPrototypeOf(t);if(!e)return!0;const o=Object.hasOwnProperty.toString,s=e.hasOwnProperty("constructor")&&e.constructor;return"function"==typeof s&&o.call(s)===o.call(Object)}o.d(e,{deepExtend:()=>s})}}]);