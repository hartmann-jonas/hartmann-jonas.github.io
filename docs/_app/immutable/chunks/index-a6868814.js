function y(){}const rt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function A(t){t.forEach(J)}function M(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function ct(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(ct(e,n))}function Rt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function zt(t,e,n,i,r,o){if(r){const s=K(e,n,i,o);t.p(s,r)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){return t&&M(t.destroy)?t.destroy:y}const Q=typeof window<"u";let lt=Q?()=>window.performance.now():()=>Date.now(),L=Q?t=>requestAnimationFrame(t):y;const w=new Set;function W(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&L(W)}function ut(t){let e;return w.size===0&&L(W),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let T=!1;function at(){T=!0}function ft(){T=!1}function _t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:_t(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function ht(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=X("style");return pt(U(t),e),e.sheet}function pt(t,e){return ht(t.head||t,e),e.sheet}function yt(t,e){if(T){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function qt(t,e,n){T&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function Ft(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function Gt(){return z(" ")}function It(){return z("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,i,r=!1){xt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function $t(t,e,n,i){return Y(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Wt(t,e,n){return $t(t,e,n,X)}function bt(t,e){return Y(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Ut(t){return bt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e){t.value=e??""}function Yt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Zt(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function te(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ee(t,e){return new t(e)}const j=new Map;let k=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:mt(e),rules:{}};return j.set(t,n),n}function Nt(t,e,n,i,r,o,s,u=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const x=e+(n-e)*o(m);l+=m*100+`%{${s(x,1-x)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${vt(f)}_${u}`,_=U(t),{stylesheet:d,rules:h}=j.get(_)||Et(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,k+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),k-=r,k||At())}function At(){L(()=>{k||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),j.clear())})}let N;function E(t){N=t}function Z(){if(!N)throw new Error("Function called outside component initialization");return N}function ne(t){Z().$$.on_mount.push(t)}function ie(t){Z().$$.after_update.push(t)}const b=[],F=[],C=[],G=[],tt=Promise.resolve();let R=!1;function et(){R||(R=!0,tt.then(nt))}function re(){return et(),tt}function D(t){C.push(t)}const P=new Set;let $=0;function nt(){if($!==0)return;const t=N;do{try{for(;$<b.length;){const e=b[$];$++,E(e),Ct(e.$$)}}catch(e){throw b.length=0,$=0,e}for(E(null),b.length=0,$=0;F.length;)F.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(b.length);for(;G.length;)G.pop()();R=!1,P.clear(),E(t)}function Ct(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let v;function St(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function I(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const S=new Set;let p;function se(){p={r:0,c:[],p}}function oe(){p.r||A(p.c),p=p.p}function jt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const kt={duration:0};function le(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,u,c=0;function l(){s&&q(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=rt,tick:g=y,css:m}=r||kt;m&&(s=Nt(t,0,1,d,_,h,m,c++)),g(0,1);const x=lt()+_,it=x+d;u&&u.abort(),o=!0,D(()=>I(t,!0,"start")),u=ut(O=>{if(o){if(O>=it)return g(1,0),I(t,!0,"end"),l(),o=!1;if(O>=x){const B=h((O-x)/d);g(B,1-B)}}return o})}let a=!1;return{start(){a||(a=!0,q(t),M(r)?(r=r(i),St().then(f)):f())},invalidate(){a=!1},end(){o&&(l(),o=!1)}}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(J).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),o.forEach(D)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(b.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,o,s,u=[-1]){const c=N;E(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Tt(t,a)),_}):[],l.update(),f=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){at();const a=gt(e.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&jt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),ft(),nt()}E(c)}class _e{$destroy(){Mt(this,1),this.$destroy=y}$on(e,n){if(!M(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as A,y as B,Rt as C,zt as D,Bt as E,Lt as F,yt as G,Pt as H,Jt as I,te as J,Ht as K,Ft as L,Zt as M,D as N,le as O,Xt as P,Kt as Q,A as R,_e as S,Gt as a,qt as b,Ut as c,oe as d,It as e,jt as f,se as g,V as h,fe as i,ie as j,X as k,Wt as l,gt as m,Qt as n,ne as o,Yt as p,z as q,bt as r,Ot as s,ce as t,Vt as u,ee as v,ue as w,ae as x,Dt as y,Mt as z};