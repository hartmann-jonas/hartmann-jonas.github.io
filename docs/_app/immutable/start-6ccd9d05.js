import{S as nt,i as at,s as rt,a as it,e as V,c as ot,b as K,g as Y,t as N,d as Q,f as j,h as C,j as st,o as Pe,k as lt,l as ct,m as ft,n as Ee,p as G,q as ut,r as dt,u as pt,v as M,w as B,x as oe,y as H,z as J,A as de}from"./chunks/index-75a51a4d.js";import{S as et,I as W,g as Je,f as Ge,a as ke,b as pe,s as x,i as We,c as _e,P as xe,d as _t,e as mt,h as ht}from"./chunks/singletons-38c6d290.js";import{_ as D}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Ae}from"./chunks/control-e7f5239e.js";import{u as gt}from"./chunks/parse-b67c4dc9.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const o of bt){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Rt(a){return a.replace(/\/$/,"")+$t}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Te(a)),me(a,e));const re=new Map;function St(a,e){const n=Te(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:s,...p}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&re.set(n,{body:s,init:p,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,p))}return me(a,e)}function Pt(a,e,n){if(re.size>0){const o=Te(a,n),s=re.get(o);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);re.delete(o)}}return me(e,n)}function Te(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Lt(e.body)}"]`),o}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Tt(a).map(o=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,h)=>{if(h%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const w=At.exec(u);if(!w)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,T,E,F]=w;return e.push({name:E,matcher:F,optional:!!R,rest:!!T,chained:T?h===1&&t[0]==="":!1}),T?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function It(a){return!/^\([^)]+\)$/.test(a)}function Tt(a){return a.slice(1).split("/").filter(It)}function Ut(a,e,n){const o={},s=a.slice(1);let p="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=s[t];if(f.chained&&f.rest&&p&&(u=u?p+"/"+u:p),p="",u===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let h=s.indexOf(void 0,t);if(h===-1){const w=e[t+1];if(w!=null&&w.rest&&w.chained)p=u;else return}for(;h>=t;)s[h]=s[h-1],h-=1;continue}return}o[f.name]=u}}if(!p)return o}function $e(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(a,e,n,o){const s=new Set(e);return Object.entries(n).map(([f,[u,h,w]])=>{const{pattern:R,params:T}=Ot(f),E={id:f,exec:F=>{const O=R.exec(F);if(O)return Ut(O,T,o)},errors:[1,...w||[]].map(F=>a[F]),layouts:[0,...h||[]].map(t),leaf:p(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function p(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function Vt(a){let e,n,o;var s=a[0][0];function p(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=M(s,p(a))),{c(){e&&B(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&H(e,t,f),K(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),s!==(s=t[0][0])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=M(s,p(t)),B(e.$$.fragment),j(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Nt(a){let e,n,o;var s=a[0][0];function p(t){return{props:{data:t[2],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return s&&(e=M(s,p(a))),{c(){e&&B(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&H(e,t,f),K(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=M(s,p(t)),B(e.$$.fragment),j(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function jt(a){let e,n,o;var s=a[0][1];function p(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=M(s,p(a))),{c(){e&&B(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&H(e,t,f),K(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),s!==(s=t[0][1])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=M(s,p(t)),B(e.$$.fragment),j(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function qt(a){let e,n,o;var s=a[0][1];function p(t){return{props:{data:t[3],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=M(s,p(a))),{c(){e&&B(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&H(e,t,f),K(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][1])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=M(s,p(t)),B(e.$$.fragment),j(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Ct(a){let e,n,o;var s=a[0][2];function p(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=M(s,p(a))),{c(){e&&B(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&H(e,t,f),K(t,n,f),o=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),s!==(s=t[0][2])){if(e){Y();const h=e;N(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=M(s,p(t)),B(e.$$.fragment),j(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Ft(a){let e,n,o,s;const p=[qt,jt],t=[];function f(u,h){return u[0][2]?0:1}return e=f(a),n=t[e]=p[e](a),{c(){n.c(),o=V()},l(u){n.l(u),o=V()},m(u,h){t[e].m(u,h),K(u,o,h),s=!0},p(u,h){let w=e;e=f(u),e===w?t[e].p(u,h):(Y(),N(t[w],1,1,()=>{t[w]=null}),Q(),n=t[e],n?n.p(u,h):(n=t[e]=p[e](u),n.c()),j(n,1),n.m(o.parentNode,o))},i(u){s||(j(n),s=!0)},o(u){N(n),s=!1},d(u){t[e].d(u),u&&C(o)}}}function Ye(a){let e,n=a[6]&&Qe(a);return{c(){e=lt("div"),n&&n.c(),this.h()},l(o){e=ct(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);n&&n.l(s),s.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(o,s){K(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=Qe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Qe(a){let e;return{c(){e=ut(a[7])},l(n){e=dt(n,a[7])},m(n,o){K(n,e,o)},p(n,o){o&128&&pt(e,n[7])},d(n){n&&C(e)}}}function zt(a){let e,n,o,s,p;const t=[Nt,Vt],f=[];function u(w,R){return w[0][1]?0:1}e=u(a),n=f[e]=t[e](a);let h=a[5]&&Ye(a);return{c(){n.c(),o=it(),h&&h.c(),s=V()},l(w){n.l(w),o=ot(w),h&&h.l(w),s=V()},m(w,R){f[e].m(w,R),K(w,o,R),h&&h.m(w,R),K(w,s,R),p=!0},p(w,[R]){let T=e;e=u(w),e===T?f[e].p(w,R):(Y(),N(f[T],1,1,()=>{f[T]=null}),Q(),n=f[e],n?n.p(w,R):(n=f[e]=t[e](w),n.c()),j(n,1),n.m(o.parentNode,o)),w[5]?h?h.p(w,R):(h=Ye(w),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(w){p||(j(n),p=!0)},o(w){N(n),p=!1},d(w){f[e].d(w),w&&C(o),h&&h.d(w),w&&C(s)}}}function Kt(a,e,n){let{stores:o}=e,{page:s}=e,{components:p}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;st(o.page.notify);let w=!1,R=!1,T=null;return Pe(()=>{const E=o.page.subscribe(()=>{w&&(n(6,R=!0),n(7,T=document.title||"untitled page"))});return n(5,w=!0),E}),a.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,p=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,f=E.data_0),"data_1"in E&&n(3,u=E.data_1),"data_2"in E&&n(4,h=E.data_2)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(s)},[p,t,f,u,h,w,R,T,o,s]}class Mt extends nt{constructor(e){super(),at(this,e,Kt,zt,rt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Bt={},he=[()=>D(()=>import("./chunks/0-b947b10e.js"),["./chunks/0-b947b10e.js","./chunks/_layout-da46b06b.js","./components/layout.svelte-098a8353.js","./chunks/index-75a51a4d.js"],import.meta.url),()=>D(()=>import("./chunks/1-40b04c40.js"),["./chunks/1-40b04c40.js","./components/error.svelte-f6edfaf4.js","./chunks/index-75a51a4d.js","./chunks/stores-763488d8.js","./chunks/singletons-38c6d290.js"],import.meta.url),()=>D(()=>import("./chunks/2-a5774629.js"),["./chunks/2-a5774629.js","./components/pages/blog/_layout.svelte-a4bd93bd.js","./chunks/index-75a51a4d.js","./assets/_layout-8003c18b.css"],import.meta.url),()=>D(()=>import("./chunks/3-ba7a498f.js"),["./chunks/3-ba7a498f.js","./components/pages/search/_layout.svelte-6212f491.js","./chunks/index-75a51a4d.js"],import.meta.url),()=>D(()=>import("./chunks/4-5d82b8e2.js"),["./chunks/4-5d82b8e2.js","./components/pages/search/_category_/_error.svelte-5e165fb3.js","./chunks/index-75a51a4d.js","./chunks/stores-763488d8.js","./chunks/singletons-38c6d290.js"],import.meta.url),()=>D(()=>import("./chunks/5-6be691b8.js"),["./chunks/5-6be691b8.js","./components/pages/_page.svelte-e1a53c49.js","./chunks/index-75a51a4d.js","./chunks/Nav-81d19403.js","./assets/Nav-f2d7e707.css"],import.meta.url),()=>D(()=>import("./chunks/6-432a7a73.js"),["./chunks/6-432a7a73.js","./chunks/_page-80848ead.js","./components/pages/blog/_page.svelte-e58236c0.js","./chunks/index-75a51a4d.js"],import.meta.url),()=>D(()=>import("./chunks/7-c9247226.js"),["./chunks/7-c9247226.js","./chunks/_page-fff50009.js","./chunks/preload-helper-41c905a7.js","./components/pages/blog/_path_/_page.svelte-32c904ef.js","./chunks/index-75a51a4d.js"],import.meta.url),()=>D(()=>import("./chunks/8-31f18818.js"),["./chunks/8-31f18818.js","./components/pages/clicker/_page.svelte-d8a614db.js","./chunks/index-75a51a4d.js","./chunks/Nav-81d19403.js","./assets/Nav-f2d7e707.css","./assets/_page-ced923e3.css"],import.meta.url),()=>D(()=>import("./chunks/9-79d674ed.js"),["./chunks/9-79d674ed.js","./components/pages/eliza/_page.svelte-a5193791.js","./chunks/index-75a51a4d.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-38c6d290.js","./assets/_page-708c6fa2.css"],import.meta.url),()=>D(()=>import("./chunks/10-d76d3ea2.js"),["./chunks/10-d76d3ea2.js","./components/pages/memory/_page.svelte-c947c3cf.js","./chunks/index-75a51a4d.js","./chunks/Nav-81d19403.js","./assets/Nav-f2d7e707.css","./assets/_page-90a834e1.css"],import.meta.url),()=>D(()=>import("./chunks/11-29a998bf.js"),["./chunks/11-29a998bf.js","./components/pages/search/_page.svelte-04417fa8.js","./chunks/index-75a51a4d.js"],import.meta.url),()=>D(()=>import("./chunks/12-2422f3d7.js"),["./chunks/12-2422f3d7.js","./chunks/_page-00ed60eb.js","./chunks/control-e7f5239e.js","./components/pages/search/_category_/_page.svelte-683b260c.js","./chunks/index-75a51a4d.js"],import.meta.url),()=>D(()=>import("./chunks/13-b484c665.js"),["./chunks/13-b484c665.js","./components/pages/todo/_page.svelte-3ad5f3b8.js","./chunks/index-75a51a4d.js","./chunks/Nav-81d19403.js","./assets/Nav-f2d7e707.css","./assets/_page-c77a625c.css"],import.meta.url)],Ht=[],Jt={"/":[5],"/blog":[6,[2]],"/blog/[path]":[7,[2]],"/clicker":[8],"/eliza":[9],"/memory":[10],"/search":[11,[3]],"/search/[category]":[12,[3],[,4]],"/todo":[13]},Gt={handleError:({error:a})=>{console.error(a)}};async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,s])=>[o,await s])));return a}function xt(a){return a.filter(e=>e!=null)}const Re=Dt(he,Ht,Jt,Bt),Oe=he[0],Ie=he[1];Oe();Ie();let ie={};try{ie=JSON.parse(sessionStorage[et])}catch{}function Le(a){ie[a]=_e()}function Xt({target:a,base:e}){var Me;const n=document.documentElement,o=[];let s=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,h=!0,w=!1,R=!1,T=!1,E=!1,F,O=(Me=history.state)==null?void 0:Me[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ge=ie[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let X,Ue,se;async function De(){se=se||Promise.resolve(),await se,se=null;const r=new URL(location.href),i=fe(r,!0);s=null,await Ne(i,r,[])}async function we(r,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:_={},invalidateAll:d=!1},m,v){return typeof r=="string"&&(r=new URL(r,Je(document))),ue({url:r,scroll:i?_e():null,keepfocus:l,redirect_chain:m,details:{state:_,replaceState:c},nav_token:v,accepted:()=>{d&&(E=!0)},blocked:()=>{},type:"goto"})}async function Ve(r){const i=fe(r,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:i.id,promise:Ce(i).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function le(...r){const c=Re.filter(l=>r.some(_=>l.exec(_))).map(l=>Promise.all([...l.layouts,l.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(c)}async function Ne(r,i,c,l,_={},d){var v,y;Ue=_;let m=r&&await Ce(r);if(m||(m=await Ke(i,{id:null},await ae(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,Ue!==_)return!1;if(m.type==="redirect")if(c.length>10||c.includes(i.pathname))m=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return we(new URL(m.location,i).href,{},[...c,i.pathname],_),!1;else((y=(v=m.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await x.updated.check()&&await ne(i);if(o.length=0,E=!1,w=!0,l&&l.details){const{details:g}=l,k=g.replaceState?0:1;g.state[W]=O+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(s=null,u?(t=m.state,m.props.page&&(m.props.page.url=i),F.$set(m.props)):je(m),l){const{scroll:g,keepfocus:k}=l;if(k||Se(),await de(),h){const P=i.hash&&document.getElementById(i.hash.slice(1));g?scrollTo(g.x,g.y):P?P.scrollIntoView():scrollTo(0,0)}}else await de();h=!0,m.props.page&&(X=m.props.page),d&&d(),w=!1}function je(r){var l;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),X=r.props.page,F=new Mt({target:a,props:{...r.props,stores:x},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(_=>_(c)),u=!0}async function te({url:r,params:i,branch:c,status:l,error:_,route:d,form:m}){let v="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);r.pathname=wt(r.pathname,v),r.search=r.search;const y={type:"loaded",state:{url:r,params:i,branch:c,error:_,route:d},props:{components:xt(c).map(L=>L.node.component)}};m!==void 0&&(y.props.form=m);let g={},k=!X,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const b=c[L],I=t.branch[L];(b==null?void 0:b.data)!==(I==null?void 0:I.data)&&(k=!0),b&&(g={...g,...b.data},k&&(y.props[`data_${P}`]=g),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==_||m!==void 0&&m!==X.form||k)&&(y.props.page={error:_,params:i,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(r),form:m??null,data:k?g:X.data}),y}async function ye({loader:r,parent:i,url:c,params:l,route:_,server_data_node:d}){var g,k,P;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((g=y.universal)!=null&&g.load){let z=function(...b){for(const I of b){const{href:q}=new URL(I,c);v.dependencies.add(q)}};const L={route:{get id(){return v.route=!0,_.id}},params:new Proxy(l,{get:(b,I)=>(v.params.add(I),b[I])}),data:(d==null?void 0:d.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(b,I){let q;b instanceof Request?(q=b.url,I={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...I}):q=b;const $=new URL(q,c).href;return z($),u?Pt(q,$,I):St(q,I)},setHeaders:()=>{},depends:z,parent(){return v.parent=!0,i()}};m=await y.universal.load.call(null,L)??null,m=m?await Wt(m):null}return{node:y,loader:r,server:d,universal:(k=y.universal)!=null&&k.load?{type:"data",data:m,uses:v}:null,data:m??(d==null?void 0:d.data)??null,slash:((P=y.universal)==null?void 0:P.trailingSlash)??(d==null?void 0:d.slash)}}function qe(r,i,c,l,_){if(E)return!0;if(!l)return!1;if(l.parent&&r||l.route&&i||l.url&&c)return!0;for(const d of l.params)if(_[d]!==t.params[d])return!0;for(const d of l.dependencies)if(o.some(m=>m(new URL(d))))return!0;return!1}function ve(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function Ce({id:r,invalidating:i,url:c,params:l,route:_}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:d,layouts:m,leaf:v}=_,y=[...m,v];d.forEach($=>$==null?void 0:$().catch(()=>{})),y.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let g=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?_.id!==t.route.id:!1,z=y.reduce(($,A,U)=>{var ee;const S=t.branch[U],Z=!!(A!=null&&A[0])&&((S==null?void 0:S.loader)!==A[1]||qe($.some(Boolean),P,k,(ee=S.server)==null?void 0:ee.uses,l));return $.push(Z),$},[]);if(z.some(Boolean)){try{g=await Ze(c,z)}catch($){return ce({status:500,error:await ae($,{url:c,params:l,route:{id:_.id}}),url:c,route:_})}if(g.type==="redirect")return g}const L=g==null?void 0:g.nodes;let b=!1;const I=y.map(async($,A)=>{var ee;if(!$)return;const U=t.branch[A],S=L==null?void 0:L[A];if((!S||S.type==="skip")&&$[1]===(U==null?void 0:U.loader)&&!qe(b,P,k,(ee=U.universal)==null?void 0:ee.uses,l))return U;if(b=!0,(S==null?void 0:S.type)==="error")throw S;return ye({loader:$[1],url:c,params:l,route:_,parent:async()=>{var He;const Be={};for(let be=0;be<A;be+=1)Object.assign(Be,(He=await I[be])==null?void 0:He.data);return Be},server_data_node:ve(S===void 0&&$[0]?{type:"skip"}:S??null,U==null?void 0:U.server)})});for(const $ of I)$.catch(()=>{});const q=[];for(let $=0;$<y.length;$+=1)if(y[$])try{q.push(await I[$])}catch(A){if(A instanceof Xe)return{type:"redirect",location:A.location};let U=500,S;if(L!=null&&L.includes(A))U=A.status??U,S=A.error;else if(A instanceof Ae)U=A.status,S=A.body;else{if(await x.updated.check())return await ne(c);S=await ae(A,{params:l,url:c,route:{id:_.id}})}const Z=await Fe($,q,d);return Z?await te({url:c,params:l,branch:q.slice(0,Z.idx).concat(Z.node),status:U,error:S,route:_}):await Ke(c,{id:_.id},S,U)}else q.push(void 0);return await te({url:c,params:l,branch:q,status:200,error:null,route:_,form:i?void 0:null})}async function Fe(r,i,c){for(;r--;)if(c[r]){let l=r;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:r,error:i,url:c,route:l}){const _={},d=await Oe();let m=null;if(d.has_server_load)try{const g=await Ze(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ne(c)}const v=await ye({loader:Oe,url:c,params:_,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(m)}),y={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await te({url:c,params:_,branch:[v,y],status:r,error:i,route:null})}function fe(r,i){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of Re){const _=l.exec(c);if(_)return{id:r.pathname+r.search,invalidating:i,route:l,params:vt(_),url:r}}}function ze({url:r,type:i,intent:c,delta:l}){var v,y;let _=!1;const d={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:i};l!==void 0&&(d.delta=l);const m={...d,cancel:()=>{_=!0}};return R||p.before_navigate.forEach(g=>g(m)),_?null:d}async function ue({url:r,scroll:i,keepfocus:c,redirect_chain:l,details:_,type:d,delta:m,nav_token:v,accepted:y,blocked:g}){const k=fe(r,!1),P=ze({url:r,type:d,delta:m,intent:k});if(!P){g();return}Le(O),y(),R=!0,u&&x.navigating.set(P),await Ne(k,r,l,{scroll:i,keepfocus:c,details:_},v,()=>{R=!1,p.after_navigate.forEach(z=>z(P)),x.navigating.set(null)})}async function Ke(r,i,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ce({status:l,error:c,url:r,route:i}):await ne(r)}function ne(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;n.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function i(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(le(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(d,m){const v=Ge(d,n);if(!v)return;const{url:y,external:g}=ke(v,e);if(g)return;const k=pe(v);k.reload||(m<=k.preload_data?Ve(y):m<=k.preload_code&&le(y.pathname))}function _(){c.disconnect();for(const d of n.querySelectorAll("a")){const{url:m,external:v}=ke(d,e);if(v)continue;const y=pe(d);y.reload||(y.preload_code===xe.viewport&&c.observe(d),y.preload_code===xe.eager&&le(m.pathname))}}p.after_navigate.push(_),_()}return{after_navigate:r=>{Pe(()=>(p.after_navigate.push(r),()=>{const i=p.after_navigate.indexOf(r);p.after_navigate.splice(i,1)}))},before_navigate:r=>{Pe(()=>(p.before_navigate.push(r),()=>{const i=p.before_navigate.indexOf(r);p.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(w||!u)&&(h=!1)},goto:(r,i={})=>we(r,i,[]),invalidate:r=>{if(typeof r=="function")o.push(r);else{const{href:i}=new URL(r,location.href);o.push(c=>c.href===i)}return De()},invalidateAll:()=>(E=!0,De()),preload_data:async r=>{const i=new URL(r,Je(document));await Ve(i)},preload_code:le,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const _=await Fe(t.branch.length,c,l.errors);if(_){const d=await te({url:i,params:t.params,branch:c.slice(0,_.idx).concat(_.node),status:r.status??500,error:r.error,route:l});t=d.state,F.$set(d.props),de().then(Se)}}else if(r.type==="redirect")we(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...X,form:r.data,status:r.status}};F.$set(i),r.type==="success"&&de().then(Se)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!R){const _={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};p.before_navigate.forEach(d=>d(_))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(O);try{sessionStorage[et]=JSON.stringify(ie)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=Ge(i.composedPath()[0],n);if(!c)return;const{url:l,external:_,target:d}=ke(c,e);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const m=pe(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(_||m.reload){ze({url:l,type:"link"})||i.preventDefault(),R=!0;return}const[y,g]=l.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){T=!0,Le(O),t.url=l,x.page.set({...X,url:l}),x.page.notify();return}ue({url:l,scroll:m.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(d,e))return;const m=i.target,{noscroll:v,reload:y}=pe(m);if(y)return;i.preventDefault(),i.stopPropagation();const g=new FormData(m),k=l==null?void 0:l.getAttribute("name");k&&g.append(k,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(g).toString(),ue({url:d,scroll:v?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[W]){if(i.state[W]===O)return;const l=i.state[W]-O;ue({url:new URL(location.href),scroll:ie[i.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&x.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:c,params:l,route:_,data:d,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:_={id:null}}=fe(v,!1)||{});let y;try{const g=c.map(async(k,P)=>{const z=d[P];return ye({loader:he[k],url:v,params:l,route:_,parent:async()=>{const L={};for(let b=0;b<P;b+=1)Object.assign(L,(await g[b]).data);return L},server_data_node:ve(z)})});y=await te({url:v,params:l,branch:await Promise.all(g),status:r,error:i,form:m,route:Re.find(({id:k})=>k===_.id)??null})}catch(g){if(g instanceof Xe){await ne(new URL(g.location,location.href));return}y=await ce({status:g instanceof Ae?g.status:500,error:await ae(g,{url:v,params:l,route:_}),url:v,route:_})}je(y)}}}async function Ze(a,e){var p;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await me(n.href),s=await o.json();if(!o.ok)throw new Error(s);return(p=s.nodes)==null||p.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=gt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ae(a,e){return a instanceof Ae?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:a,hydrate:e,paths:n,target:o,version:s}){_t(n),ht(s);const p=Xt({target:o,base:n.base});mt({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{nn as start};