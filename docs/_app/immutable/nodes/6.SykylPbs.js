const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/openseadragon.DLuAdKxU.js","../chunks/_commonjsHelpers.Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{p as L}from"../chunks/metadata.DKnR7ZmP.js";import{s as N,n as A,o as W,f as z}from"../chunks/scheduler.DhaTo4UK.js";import{S as O,i as q,e as v,s as w,f as $,n as b,k as m,h as I,r as h,j as E,p as d,l as g,o as k,u as S,B as X,q as Q,c as C,z as Z,a as F,m as Y,t as P,b as V,d as U}from"../chunks/index.-h0uDtK9.js";import{P as x}from"../chunks/Page.CNgJ-bJz.js";import{_ as ee}from"../chunks/preload-helper.C1FmrZbK.js";import{u as te}from"../chunks/helpers.C8goa5Ji.js";import{b as j}from"../chunks/paths.OAFCIj2_.js";import{e as D,u as ae,d as se,c as T}from"../chunks/Footer.xGiIlgBw.js";async function le({params:o}){return{itemMetadata:L.find(t=>t.pid===o.id)}}const re=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,load:le,prerender:re},Symbol.toStringTag,{value:"Module"}));function ie(o){let e,t,a;return{c(){e=v("div"),t=v("a"),a=g("IIIF Manifest"),this.h()},l(u){e=$(u,"DIV",{class:!0});var i=b(e);t=$(i,"A",{href:!0,target:!0});var r=b(t);a=k(r,"IIIF Manifest"),r.forEach(m),i.forEach(m),this.h()},h(){h(t,"href",o[1].manifest),h(t,"target","_blank"),h(e,"class","manifest-link svelte-1wx3wfr")},m(u,i){E(u,e,i),d(e,t),d(t,a)},p:A,d(u){u&&m(e)}}}function oe(o){let e,t,a,u=o[1].manifest!==void 0&&ie(o);return{c(){e=v("div"),t=v("div"),a=w(),u&&u.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var r=b(e);t=$(r,"DIV",{id:!0,class:!0}),b(t).forEach(m),a=I(r),u&&u.l(r),r.forEach(m),this.h()},h(){h(t,"id","osd-container-"+o[0]),h(t,"class","osd-container svelte-1wx3wfr"),h(e,"class","viewer-container svelte-1wx3wfr")},m(i,r){E(i,e,r),d(e,t),d(e,a),u&&u.m(e,null)},p(i,[r]){i[1].manifest!==void 0&&u.p(i,r)},i:A,o:A,d(i){i&&m(e),u&&u.d()}}}function ne(o,e,t){let{pid:a}=e;const u=te(),i=L.find(l=>l.pid===a),r=s(i._images);function s(l){const n=[];for(let c=0;c<l;c++){const _=`${j}/iiif/${a}/${c}/info.json`;n.push(_)}return n}return W(()=>{ee(()=>import("../chunks/openseadragon.DLuAdKxU.js").then(l=>l.o),__vite__mapDeps([0,1]),import.meta.url).then(l=>{const n=l.default;n({id:`osd-container-${u}`,preload:!1,sequenceMode:!0,prefixUrl:`${j}/openseadragon/images/`,tileSources:r})}).catch(l=>{console.error("Error loading OpenSeadragon:",l)})}),o.$$set=l=>{"pid"in l&&t(2,a=l.pid)},[u,i,a]}class ue extends O{constructor(e){super(),q(this,e,ne,oe,N,{pid:2})}}function B(o,e,t){const a=o.slice();return a[3]=e[t].key,a[4]=e[t].label,a[5]=e[t].type,a}function G(o,e,t){const a=o.slice();a[8]=e[t];const u=L.find(function(...r){return o[2](a[8],...r)});return a[9]=u,a}function ce(o){let e,t,a=o[4]+"",u,i,r,s,l,n;return{c(){e=v("li"),t=v("span"),u=g(a),i=g(":"),r=w(),s=v("iframe"),n=w(),this.h()},l(c){e=$(c,"LI",{class:!0});var _=b(e);t=$(_,"SPAN",{class:!0});var f=b(t);u=k(f,a),i=k(f,":"),f.forEach(m),r=I(_),s=$(_,"IFRAME",{src:!0,title:!0,frameborder:!0,referrerpolicy:!0,class:!0}),b(s).forEach(m),n=I(_),_.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),z(s.src,l=`https://www.youtube.com/embed/${o[0][o[3]]}`)||h(s,"src",l),h(s,"title","YouTube video player"),h(s,"frameborder","0"),h(s,"referrerpolicy","strict-origin-when-cross-origin"),s.allowFullscreen=!0,h(s,"class","svelte-18ajzuo"),h(e,"class","metadata-item block-item svelte-18ajzuo")},m(c,_){E(c,e,_),d(e,t),d(t,u),d(t,i),d(e,r),d(e,s),d(e,n)},p(c,_){_&1&&!z(s.src,l=`https://www.youtube.com/embed/${c[0][c[3]]}`)&&h(s,"src",l)},d(c){c&&m(e)}}}function fe(o){let e,t,a=o[4]+"",u,i,r,s,l,n,c,_;return{c(){e=v("li"),t=v("span"),u=g(a),i=g(":"),r=w(),s=v("audio"),l=v("source"),c=g("Your browser does not support the audio element / Tu buscador no soporta reproducción de audio"),_=w(),this.h()},l(f){e=$(f,"LI",{class:!0});var p=b(e);t=$(p,"SPAN",{class:!0});var y=b(t);u=k(y,a),i=k(y,":"),y.forEach(m),r=I(p),s=$(p,"AUDIO",{});var M=b(s);l=$(M,"SOURCE",{src:!0}),c=k(M,"Your browser does not support the audio element / Tu buscador no soporta reproducción de audio"),M.forEach(m),_=I(p),p.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),z(l.src,n=/(^http)/.test(o[0][o[3]])?o[0][o[3]]:`${j}/${o[0][o[3]]}`)||h(l,"src",n),s.controls=!0,h(e,"class","metadata-item block-item svelte-18ajzuo")},m(f,p){E(f,e,p),d(e,t),d(t,u),d(t,i),d(e,r),d(e,s),d(s,l),d(s,c),d(e,_)},p(f,p){p&1&&!z(l.src,n=/(^http)/.test(f[0][f[3]])?f[0][f[3]]:`${j}/${f[0][f[3]]}`)&&h(l,"src",n)},d(f){f&&m(e)}}}function de(o){let e,t,a=o[4]+"",u,i,r,s,l,n,c,_;return{c(){e=v("li"),t=v("span"),u=g(a),i=g(":"),r=w(),s=v("div"),l=v("video"),n=g("Your browser does not support the video element / Tu buscador no soporta reprodución de video"),_=w(),this.h()},l(f){e=$(f,"LI",{class:!0});var p=b(e);t=$(p,"SPAN",{class:!0});var y=b(t);u=k(y,a),i=k(y,":"),y.forEach(m),r=I(p),s=$(p,"DIV",{class:!0});var M=b(s);l=$(M,"VIDEO",{src:!0,class:!0,controlslist:!0});var R=b(l);n=k(R,"Your browser does not support the video element / Tu buscador no soporta reprodución de video"),R.forEach(m),M.forEach(m),_=I(p),p.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),z(l.src,c=/(^http)/.test(o[0][o[3]])?o[0][o[3]]:`${j}/${o[0][o[3]]}`)||h(l,"src",c),h(l,"class","video svelte-18ajzuo"),l.controls=!0,h(l,"controlslist","nodownload noremoteplayback"),h(s,"class","video-container"),h(e,"class","metadata-item block-item svelte-18ajzuo")},m(f,p){E(f,e,p),d(e,t),d(t,u),d(t,i),d(e,r),d(e,s),d(s,l),d(l,n),d(e,_)},p(f,p){p&1&&!z(l.src,c=/(^http)/.test(f[0][f[3]])?f[0][f[3]]:`${j}/${f[0][f[3]]}`)&&h(l,"src",c)},d(f){f&&m(e)}}}function _e(o){let e,t,a=o[4]+"",u,i,r,s,l,n,c;return{c(){e=v("li"),t=v("span"),u=g(a),i=g(":"),r=w(),s=v("div"),l=v("img"),c=w(),this.h()},l(_){e=$(_,"LI",{class:!0});var f=b(e);t=$(f,"SPAN",{class:!0});var p=b(t);u=k(p,a),i=k(p,":"),p.forEach(m),r=I(f),s=$(f,"DIV",{class:!0});var y=b(s);l=$(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(m),c=I(f),f.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),z(l.src,n=/(^http)/.test(o[0][o[3]])?o[0][o[3]]:`${j}/${o[0][o[3]]}`)||h(l,"src",n),h(l,"alt",o[4]),h(l,"class","svelte-18ajzuo"),h(s,"class","image-container svelte-18ajzuo"),h(e,"class","metadata-item block-item svelte-18ajzuo")},m(_,f){E(_,e,f),d(e,t),d(t,u),d(t,i),d(e,r),d(e,s),d(s,l),d(e,c)},p(_,f){f&1&&!z(l.src,n=/(^http)/.test(_[0][_[3]])?_[0][_[3]]:`${j}/${_[0][_[3]]}`)&&h(l,"src",n)},d(_){_&&m(e)}}}function he(o){let e,t,a=o[4]+"",u,i,r,s,l=D(o[0][o[3]].split("/")),n=[];for(let c=0;c<l.length;c+=1)n[c]=J(G(o,l,c));return{c(){e=v("li"),t=v("span"),u=g(a),i=g(":"),r=w();for(let c=0;c<n.length;c+=1)n[c].c();s=w(),this.h()},l(c){e=$(c,"LI",{class:!0});var _=b(e);t=$(_,"SPAN",{class:!0});var f=b(t);u=k(f,a),i=k(f,":"),f.forEach(m),r=I(_);for(let p=0;p<n.length;p+=1)n[p].l(_);s=I(_),_.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),h(e,"class","metadata-item svelte-18ajzuo")},m(c,_){E(c,e,_),d(e,t),d(t,u),d(t,i),d(e,r);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,null);d(e,s)},p(c,_){if(_&3){l=D(c[0][c[3]].split("/"));let f;for(f=0;f<l.length;f+=1){const p=G(c,l,f);n[f]?n[f].p(p,_):(n[f]=J(p),n[f].c(),n[f].m(e,s))}for(;f<n.length;f+=1)n[f].d(1);n.length=l.length}},d(c){c&&m(e),X(n,c)}}}function me(o){let e,t,a=o[4]+"",u,i;return{c(){e=v("li"),t=v("a"),u=g(a),this.h()},l(r){e=$(r,"LI",{class:!0});var s=b(e);t=$(s,"A",{class:!0,href:!0,target:!0});var l=b(t);u=k(l,a),l.forEach(m),s.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),h(t,"href",i=o[0][o[3]]),h(t,"target","_blank"),h(e,"class","metadata-item svelte-18ajzuo")},m(r,s){E(r,e,s),d(e,t),d(t,u)},p(r,s){s&1&&i!==(i=r[0][r[3]])&&h(t,"href",i)},d(r){r&&m(e)}}}function pe(o){let e,t,a=o[4]+"",u,i,r,s=o[0][o[3]]+"",l;return{c(){e=v("li"),t=v("span"),u=g(a),i=g(":"),r=v("span"),l=g(s),this.h()},l(n){e=$(n,"LI",{class:!0});var c=b(e);t=$(c,"SPAN",{class:!0});var _=b(t);u=k(_,a),i=k(_,":"),_.forEach(m),r=$(c,"SPAN",{});var f=b(r);l=k(f,s),f.forEach(m),c.forEach(m),this.h()},h(){h(t,"class","metadata-key svelte-18ajzuo"),h(e,"class","metadata-item svelte-18ajzuo")},m(n,c){E(n,e,c),d(e,t),d(t,u),d(t,i),d(e,r),d(r,l)},p(n,c){c&1&&s!==(s=n[0][n[3]]+"")&&Q(l,s)},d(n){n&&m(e)}}}function H(o){let e,t=o[9].label+"",a,u;return{c(){e=v("a"),a=g(t),this.h()},l(i){e=$(i,"A",{href:!0,"data-sveltekit-reload":!0,class:!0});var r=b(e);a=k(r,t),r.forEach(m),this.h()},h(){h(e,"href",u=j+"/pages/"+o[9].pid),h(e,"data-sveltekit-reload",""),h(e,"class","svelte-18ajzuo")},m(i,r){E(i,e,r),d(e,a)},p(i,r){r&1&&t!==(t=i[9].label+"")&&Q(a,t),r&1&&u!==(u=j+"/pages/"+i[9].pid)&&h(e,"href",u)},d(i){i&&m(e)}}}function J(o){let e,t=o[9]!==void 0&&H(o);return{c(){t&&t.c(),e=S()},l(a){t&&t.l(a),e=S()},m(a,u){t&&t.m(a,u),E(a,e,u)},p(a,u){a[9]!==void 0?t?t.p(a,u):(t=H(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(a){a&&m(e),t&&t.d(a)}}}function K(o,e){let t,a;function u(s,l){if(s[5]==="text")return pe;if(s[5]==="link")return me;if(s[5]==="ref")return he;if(s[5]==="image")return _e;if(s[5]==="video")return de;if(s[5]==="audio")return fe;if(s[5]==="youtube")return ce}let i=u(e),r=i&&i(e);return{key:o,first:null,c(){t=S(),r&&r.c(),a=S(),this.h()},l(s){t=S(),r&&r.l(s),a=S(),this.h()},h(){this.first=t},m(s,l){E(s,t,l),r&&r.m(s,l),E(s,a,l)},p(s,l){e=s,r&&r.p(e,l)},d(s){s&&(m(t),m(a)),r&&r.d(s)}}}function ve(o){let e,t,a=[],u=new Map,i=D(o[1].metadataToShow);const r=s=>s[3];for(let s=0;s<i.length;s+=1){let l=B(o,i,s),n=r(l);u.set(n,a[s]=K(n,l))}return{c(){e=v("div"),t=v("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var l=b(e);t=$(l,"UL",{class:!0});var n=b(t);for(let c=0;c<a.length;c+=1)a[c].l(n);n.forEach(m),l.forEach(m),this.h()},h(){h(t,"class","svelte-18ajzuo"),h(e,"class","metadata-card svelte-18ajzuo")},m(s,l){E(s,e,l),d(e,t);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,null)},p(s,[l]){l&3&&(i=D(s[1].metadataToShow),a=ae(a,l,r,1,s,i,u,t,se,K,null,B))},i:A,o:A,d(s){s&&m(e);for(let l=0;l<a.length;l+=1)a[l].d()}}}function $e(o,e,t){const a=T.pages;let{itemMetadata:u}=e;const i=(r,s)=>s.pid===r.trim();return o.$$set=r=>{"itemMetadata"in r&&t(0,u=r.itemMetadata)},[u,a,i]}class be extends O{constructor(e){super(),q(this,e,$e,ve,N,{itemMetadata:0})}}function ge(o){let e,t;return e=new ue({props:{pid:o[0].pid}}),{c(){C(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,u){Y(e,a,u),t=!0},p:A,i(a){t||(P(e.$$.fragment,a),t=!0)},o(a){V(e.$$.fragment,a),t=!1},d(a){U(e,a)}}}function ke(o){let e,t=o[0].label+"",a,u,i,r,s,l=o[1].iiifViewer&&ge(o);return r=new be({props:{itemMetadata:o[0]}}),{c(){e=v("h1"),a=g(t),u=w(),l&&l.c(),i=w(),C(r.$$.fragment)},l(n){e=$(n,"H1",{});var c=b(e);a=k(c,t),c.forEach(m),u=I(n),l&&l.l(n),i=I(n),F(r.$$.fragment,n)},m(n,c){E(n,e,c),d(e,a),E(n,u,c),l&&l.m(n,c),E(n,i,c),Y(r,n,c),s=!0},p(n,c){n[1].iiifViewer&&l.p(n,c)},i(n){s||(P(l),P(r.$$.fragment,n),s=!0)},o(n){V(l),V(r.$$.fragment,n),s=!1},d(n){n&&(m(e),m(u),m(i)),l&&l.d(n),U(r,n)}}}function Ee(o){let e,t,a,u;return document.title=e=`${o[0].label} - ${T.title}`,a=new x({props:{name:o[0].label,$$slots:{default:[ke]},$$scope:{ctx:o}}}),{c(){t=w(),C(a.$$.fragment)},l(i){Z("svelte-1dkgvkw",document.head).forEach(m),t=I(i),F(a.$$.fragment,i)},m(i,r){E(i,t,r),Y(a,i,r),u=!0},p(i,[r]){(!u||r&1)&&e!==(e=`${i[0].label} - ${T.title}`)&&(document.title=e);const s={};r&8&&(s.$$scope={dirty:r,ctx:i}),a.$set(s)},i(i){u||(P(a.$$.fragment,i),u=!0)},o(i){V(a.$$.fragment,i),u=!1},d(i){i&&m(t),U(a,i)}}}function we(o,e,t){let{data:a}=e;const u=a.itemMetadata,i=T.pages;return o.$$set=r=>{"data"in r&&t(2,a=r.data)},[u,i,a]}class De extends O{constructor(e){super(),q(this,e,we,Ee,N,{data:2})}}export{De as component,Ve as universal};
