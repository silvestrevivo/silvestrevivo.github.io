var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const u="undefined"!=typeof window;let c=u?()=>window.performance.now():()=>Date.now(),l=u?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach(n=>{n.c(t)||(a.delete(n),n.f())}),0!==a.size&&l(f)}function d(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function $(){return h(" ")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let v,y,b=0,w={};function _(t,n,e,r,o,s,i,u=0){const c=16.666/r;let l="{\n";for(let t=0;t<=1;t+=c){const r=n+(e-n)*s(t);l+=100*t+`%{${i(r,1-r)}}\n`}const a=l+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${u}`;if(!w[f]){if(!v){const t=p("style");document.head.appendChild(t),v=t.sheet}w[f]=!0,v.insertRule(`@keyframes ${f} ${a}`,v.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${o}ms 1 both`,b+=1,f}function x(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--b&&l(()=>{if(b)return;let t=v.cssRules.length;for(;t--;)v.deleteRule(t);w={}})}function j(t){y=t}function k(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const E=[],C=[],A=[],S=[],M=Promise.resolve();let N,O=!1;function R(t){A.push(t)}function z(){const t=new Set;do{for(;E.length;){const t=E.shift();j(t),F(t.$$)}for(;C.length;)C.pop()();for(let n=0;n<A.length;n+=1){const e=A[n];t.has(e)||(e(),t.add(e))}A.length=0}while(E.length);for(;S.length;)S.pop()();O=!1}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}function P(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const T=new Set;let q;function D(){q={r:0,c:[],p:q}}function H(){q.r||o(q.c),q=q.p}function L(t,n){t&&t.i&&(T.delete(t),t.i(n))}function B(t,n,e,r){if(t&&t.o){if(T.has(t))return;T.add(t),q.c.push(()=>{T.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const V={duration:0};function G(e,r,i,u){let d=r(e,i),m=u?0:1,p=null,h=null,$=null;function g(){$&&x(e,$)}function v(t,n){const e=t.b-m;return n*=Math.abs(e),{a:m,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(r){const{delay:s=0,duration:i=300,easing:u=n,tick:y=t,css:b}=d||V,w={start:c()+s,b:r};r||(w.group=q,q.r+=1),p?h=w:(b&&(g(),$=_(e,m,r,i,s,u,b)),r&&y(0,1),p=v(w,i),R(()=>P(e,r,"start")),function(t){let n;0===a.size&&l(f),new Promise(e=>{a.add(n={c:t,f:e})})}(t=>{if(h&&t>h.start&&(p=v(h,i),h=null,P(e,p.b,"start"),b&&(g(),$=_(e,m,p.b,p.duration,0,u,d.css))),p)if(t>=p.end)y(m=p.b,1-m),P(e,p.b,"end"),h||(p.b?g():--p.group.r||o(p.group.c)),p=null;else if(t>=p.start){const n=t-p.start;m=p.a+p.d*u(n/p.duration),y(m,1-m)}return!(!p&&!h)}))}return{run(t){s(d)?(N||(N=Promise.resolve(),N.then(()=>{N=null})),N).then(()=>{d=d(),y(t)}):y(t)},end(){g(),p=h=null}}}function I(t){t&&t.c()}function J(t,n,r){const{fragment:i,on_mount:u,on_destroy:c,after_update:l}=t.$$;i&&i.m(n,r),R(()=>{const n=u.map(e).filter(s);c?c.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(R)}function K(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Q(t,n){-1===t.$$.dirty[0]&&(E.push(t),O||(O=!0,M.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,e,s,i,u,c,l=[-1]){const a=y;j(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:l};let m=!1;d.ctx=s?s(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),m&&Q(n,t)),e}):[],d.update(),m=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):d.fragment&&d.fragment.c(),e.intro&&L(n.$$.fragment),J(n,e.target,e.anchor),z()),j(a)}class W{$destroy(){K(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function X(t){const n=t-1;return n*n*n+1}function Y(t,{delay:n=0,duration:e=400,easing:r=X,x:o=0,y:s=0,opacity:i=0}){const u=getComputedStyle(t),c=+u.opacity,l="none"===u.transform?"":u.transform,a=c*(1-i);return{delay:n,duration:e,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*o}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-a*n}`}}function Z(t){let n,e,r,o,s,i;return{c(){n=p("h1"),n.innerHTML="\n        Silvestre Vivo\n        <br>\n        Front-end Developer\n      ",r=$(),o=p("h2"),o.textContent="Coming soon...",g(n,"class","svelte-lf7ssr"),g(o,"class","svelte-lf7ssr")},m(t,e){d(t,n,e),d(t,r,e),d(t,o,e),i=!0},i(t){i||(R(()=>{e||(e=G(n,Y,{y:-100,duration:2500},!0)),e.run(1)}),R(()=>{s||(s=G(o,Y,{y:400,duration:2e3},!0)),s.run(1)}),i=!0)},o(t){e||(e=G(n,Y,{y:-100,duration:2500},!1)),e.run(0),s||(s=G(o,Y,{y:400,duration:2e3},!1)),s.run(0),i=!1},d(t){t&&m(n),t&&e&&e.end(),t&&m(r),t&&m(o),t&&s&&s.end()}}}function tt(t){let n,e,r,o=t[0]&&Z();return{c(){n=p("main"),e=p("div"),o&&o.c(),g(e,"class","svelte-lf7ssr"),g(n,"class","svelte-lf7ssr")},m(t,s){d(t,n,s),function(t,n){t.appendChild(n)}(n,e),o&&o.m(e,null),r=!0},p(t,[n]){t[0]?o?L(o,1):(o=Z(),o.c(),L(o,1),o.m(e,null)):o&&(D(),B(o,1,1,()=>{o=null}),H())},i(t){r||(L(o),r=!0)},o(t){B(o),r=!1},d(t){t&&m(n),o&&o.d()}}}function nt(t,n,e){let r=!1;return k(()=>{e(0,r=!0)}),[r]}class et extends W{constructor(t){super(),U(this,t,nt,tt,i,{})}}function rt(t){let n,e,r;return{c(){n=p("footer"),n.innerHTML='<ul><li class="svelte-1fj8unf"><a href="https://github.com/silvestrevivo" target="_blank" class="svelte-1fj8unf"><i class="fa fa-github"></i></a></li> \n      <li class="svelte-1fj8unf"><a href="https://twitter.com/silvestrevivo" target="_blank" class="svelte-1fj8unf"><i class="fa fa-twitter"></i></a></li> \n      <li class="svelte-1fj8unf"><a href="https://www.linkedin.com/in/silvestre-vivo-1a6843bb/" target="_blank" class="svelte-1fj8unf"><i class="fa fa-linkedin"></i></a></li> \n      <li class="svelte-1fj8unf"><a href="https://www.reddit.com/user/silvestrevivo/" target="_blank" class="svelte-1fj8unf"><i class="fa fa-reddit"></i></a></li></ul>',g(n,"class","svelte-1fj8unf")},m(t,e){d(t,n,e),r=!0},i(t){r||(R(()=>{e||(e=G(n,Y,{y:100,duration:4e3},!0)),e.run(1)}),r=!0)},o(t){e||(e=G(n,Y,{y:100,duration:4e3},!1)),e.run(0),r=!1},d(t){t&&m(n),t&&e&&e.end()}}}function ot(t){let n,e,r=t[0]&&rt();return{c(){r&&r.c(),n=h("")},m(t,o){r&&r.m(t,o),d(t,n,o),e=!0},p(t,[e]){t[0]?r?L(r,1):(r=rt(),r.c(),L(r,1),r.m(n.parentNode,n)):r&&(D(),B(r,1,1,()=>{r=null}),H())},i(t){e||(L(r),e=!0)},o(t){B(r),e=!1},d(t){r&&r.d(t),t&&m(n)}}}function st(t,n,e){let r=!1;return k(()=>{e(0,r=!0)}),[r]}class it extends W{constructor(t){super(),U(this,t,st,ot,i,{})}}function ut(n){let e,r;const o=new et({}),s=new it({});return{c(){I(o.$$.fragment),e=$(),I(s.$$.fragment)},m(t,n){J(o,t,n),d(t,e,n),J(s,t,n),r=!0},p:t,i(t){r||(L(o.$$.fragment,t),L(s.$$.fragment,t),r=!0)},o(t){B(o.$$.fragment,t),B(s.$$.fragment,t),r=!1},d(t){K(o,t),t&&m(e),K(s,t)}}}return new class extends W{constructor(t){super(),U(this,t,null,ut,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
