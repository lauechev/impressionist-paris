import{n as l,h as z,r as q,s as k,j as v}from"./scheduler.DhaTo4UK.js";const c=[];function x(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(k(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function b(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,f)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:f,subscribe:b}}function B(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=o.length<2;return x(r,(b,t)=>{let i=!1;const s=[];let p=0,d=l;const g=()=>{if(p)return;d();const u=o(n?s[0]:s,b,t);f?b(u):d=v(u)?u:l},y=a.map((u,_)=>z(u,w=>{s[_]=w,p&=~(1<<_),i&&g()},()=>{p|=1<<_}));return i=!0,g(),function(){q(y),d(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1lfezem)==null?void 0:h.base)??"/impressionist-paris";var m;const E=((m=globalThis.__sveltekit_1lfezem)==null?void 0:m.assets)??T;export{E as a,T as b,B as d,x as r,A as w};
