import{s as ee,d as y,n as J,e as te,r as ne,f as se}from"../chunks/scheduler.BCV7q1ob.js";import{S as le,i as oe,d as X,v as ie,n as S,e as R,s as I,c as C,f as j,o as L,h as v,j as T,p,k as E,l as k,q as G,r as Q,b as W,g as z,m as ae}from"../chunks/index.BOFzzGSU.js";const ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;class w{constructor(e,t,c){this.label=t,this.data=e,this.weights=c}}class g{constructor(e,t){this.weight=e,this.majors=t}}const Y={radio:"radio",checkbox:"checkbox"},B={Text:"Text",Image:"Image"};class q{constructor(e,t,c,d){this.text=e,this.data=t,this.select=c,this.options=d}}const O=[new q("Какъв език учиш би искал/а да учиш?",B.Text,Y.radio,[new w("Източен","Източен",[new g(1,["Африканистика","Арабистика","Китаистика","Японистика","Кореистика","Арменистика и кавказология","Индология","Иранистика","Тюркология","Южна, Източна и Югоизточна Азия"])]),new w("Западен","Западен",[new g(1,["Класическа филология","Новогръцка филология","Унгарска филология","Френска филология","Италианска филология","Румънска филология","Немска филология","Скандинавистика","Английска филология","Испанска филология","Португалска филология"])])]),new q("Колко езика би искал/а да учиш?",B.Text,Y.radio,[new w("Един","Един",[new g(1,[])]),new w("Два или повече","Два или повече",[new g(1,["Южна, Източна и Югоизточна Азия","Скандинавистика","Африканистика","Индинология","Арабистика"])])]),new q("Коя закуска ти изглежда най-апетитно?",B.Image,Y.radio,[new w("/BOP.jpg","",[new g(1,["Английска филология"])]),new w("/quaso.jpg","",[new g(1,["Френска филология"])]),new w("/sleep.jpg","",[new g(1,["Испанска филология"])]),new w("/pie.jpg","",[new g(1,["Португалска филология"])]),new w("/dafuque.jpg","",[new g(1,["Скандинавистика"])]),new w("/bao.jpg","",[new g(1,["Китаистика"])])]),new q("Как предпочиташ да прекарваш свободното си време?",B.Text,Y.radio,[new w("Да купонясвам","Да купонясвам",[new g(1,["Унгарска филология"])]),new w("Да спя","Да спя",[new g(1,["Испанска филология"])]),new w("Да си мисля за римската империя","Да си мисля за римската империя",[new g(1,["Класическа филология"])]),new w("Да гледам/отида на футболен мач","Да гледам/отида на футболен мач",[new g(1,["Португалска филология"])]),new w("Да гледам к-драми","Да гледам к-драми",[new g(1,["Кореистика"])])]),new q("Кой е любимият ти сезон?",B.Text,Y.radio,[new w("Пролет","Пролет",[new g(1,["Японистика","Китаистика"])]),new w("Лято","Лято",[new g(1,["Френска филология","Испанска филология","Португалска филология","Италианска филология"])]),new w("Есен","Есен",[new g(1,["Английска филология","Кореистика"])]),new w("Зима","Зима",[new g(1,["Скандинавистика"])])]),new q("Кой е любимия ти вкус?",B.Text,Y.radio,[new w("Люто","Люто",[new g(1,["Китаистика","Кореистика","Японистика","Южна, Източна и Югоисточна Азия"])]),new w("Солено","Солено",[new g(1,["Италианска филология","Английска филология"])]),new w("Сладко","Сладко",[new g(1,["Френска филология, Английска филология"])]),new w("Кисело","Кисело",[new g(1,["Китаистика"])]),new w("Всичко и по много","Всичко и по много",[new g(1,["Португалска филология","Индология"])])])],{console:re}=ce,P="src/routes/+page.svelte";function K(l,e,t){const c=l.slice();return c[9]=e[t],c}function Z(l,e,t){const c=l.slice();return c[12]=e[t],c[14]=t,c}function x(l,e,t){const c=l.slice();return c[15]=e[t],c[17]=t,c}function M(l){let e,t,c,d="Резултати",h,_,f=S(O),o=[];for(let m=0;m<f.length;m+=1)o[m]=V(Z(l,f,m));const r={c:function(){e=R("section");for(let n=0;n<o.length;n+=1)o[n].c();t=I(),c=R("button"),c.textContent=d,this.h()},l:function(n){e=C(n,"SECTION",{class:!0});var s=j(e);for(let i=0;i<o.length;i+=1)o[i].l(s);s.forEach(v),t=T(n),c=C(n,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),L(c)!=="svelte-naat1v"&&(c.textContent=d),this.h()},h:function(){p(e,"class","questions s-y_bCXRrkrYfP"),y(e,P,101,4,2358),p(c,"type","button"),p(c,"class","s-y_bCXRrkrYfP"),y(c,P,121,4,3028)},m:function(n,s){E(n,e,s);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(e,null);E(n,t,s),E(n,c,s),h||(_=G(c,"click",l[3],!1,!1,!1,!1),h=!0)},p:function(n,s){if(s&4){f=S(O);let i;for(i=0;i<f.length;i+=1){const a=Z(n,f,i);o[i]?o[i].p(a,s):(o[i]=V(a),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=f.length}},d:function(n){n&&(v(e),v(t),v(c)),Q(o,n),h=!1,_()}};return X("SvelteRegisterBlock",{block:r,id:M.name,type:"if",source:"(101:2) {#if !showResults}",ctx:l}),r}function $(l){let e,t;const c={c:function(){e=R("img"),this.h()},l:function(h){e=C(h,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){se(e.src,t=l[15].data)||p(e,"src",t),p(e,"alt",""),p(e,"class","s-y_bCXRrkrYfP"),y(e,P,112,20,2840)},m:function(h,_){E(h,e,_)},d:function(h){h&&v(e)}};return X("SvelteRegisterBlock",{block:c,id:$.name,type:"if",source:'(112:18) {#if q.data === \\"Image\\"}',ctx:l}),c}function N(l){let e,t,c,d,h=l[15].label+"",_,f,o,r,m;function n(){return l[6](l[15])}let s=l[12].data==="Image"&&$(l);const i={c:function(){e=R("div"),t=R("input"),c=I(),d=R("label"),_=W(h),f=I(),s&&s.c(),o=I(),this.h()},l:function(u){e=C(u,"DIV",{class:!0});var b=j(e);t=C(b,"INPUT",{type:!0,name:!0,id:!0,class:!0}),c=T(b),d=C(b,"LABEL",{for:!0,class:!0});var D=j(d);_=z(D,h),f=T(D),s&&s.l(D),D.forEach(v),o=T(b),b.forEach(v),this.h()},h:function(){p(t,"type",l[12].select),p(t,"name",l[14]),p(t,"id",l[14]+"-"+l[17]),t.value=l[15].data,p(t,"class","s-y_bCXRrkrYfP"),y(t,P,108,16,2593),p(d,"for",l[14]+"-"+l[17]),p(d,"class","s-y_bCXRrkrYfP"),y(d,P,109,16,2718),p(e,"class","option s-y_bCXRrkrYfP"),y(e,P,107,14,2556)},m:function(u,b){E(u,e,b),k(e,t),k(e,c),k(e,d),k(d,_),k(d,f),s&&s.m(d,null),k(e,o),r||(m=G(t,"input",n,!1,!1,!1,!1),r=!0)},p:function(u,b){l=u},d:function(u){u&&v(e),s&&s.d(),r=!1,m()}};return X("SvelteRegisterBlock",{block:i,id:N.name,type:"each",source:"(107:12) {#each q.options as option, j}",ctx:l}),i}function V(l){let e,t,c=l[12].text+"",d,h,_,f,o=S(l[12].options),r=[];for(let n=0;n<o.length;n+=1)r[n]=N(x(l,o,n));const m={c:function(){e=R("div"),t=R("p"),d=W(c),h=I(),_=R("div");for(let s=0;s<r.length;s+=1)r[s].c();f=I(),this.h()},l:function(s){e=C(s,"DIV",{class:!0});var i=j(e);t=C(i,"P",{class:!0});var a=j(t);d=z(a,c),a.forEach(v),h=T(i),_=C(i,"DIV",{class:!0});var u=j(_);for(let b=0;b<r.length;b+=1)r[b].l(u);u.forEach(v),f=T(i),i.forEach(v),this.h()},h:function(){p(t,"class","s-y_bCXRrkrYfP"),y(t,P,104,9,2451),p(_,"class","options s-y_bCXRrkrYfP"),y(_,P,105,10,2477),p(e,"class","question s-y_bCXRrkrYfP"),y(e,P,103,8,2419)},m:function(s,i){E(s,e,i),k(e,t),k(t,d),k(e,h),k(e,_);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(_,null);k(e,f)},p:function(s,i){if(i&4){o=S(s[12].options);let a;for(a=0;a<o.length;a+=1){const u=x(s,o,a);r[a]?r[a].p(u,i):(r[a]=N(u),r[a].c(),r[a].m(_,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=o.length}},d:function(s){s&&v(e),Q(r,s)}};return X("SvelteRegisterBlock",{block:m,id:V.name,type:"each",source:"(103:6) {#each qs as q, i}",ctx:l}),m}function A(l){let e,t,c,d,h="Повтори теста",_,f,o=S(l[1]),r=[];for(let n=0;n<o.length;n+=1)r[n]=U(K(l,o,n));const m={c:function(){e=R("div"),t=R("div");for(let s=0;s<r.length;s+=1)r[s].c();c=I(),d=R("button"),d.textContent=h,this.h()},l:function(s){e=C(s,"DIV",{class:!0});var i=j(e);t=C(i,"DIV",{class:!0});var a=j(t);for(let u=0;u<r.length;u+=1)r[u].l(a);a.forEach(v),c=T(i),d=C(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),L(d)!=="svelte-8lps65"&&(d.textContent=h),i.forEach(v),this.h()},h:function(){p(t,"class","scores s-y_bCXRrkrYfP"),y(t,P,126,6,3155),p(d,"type","button"),p(d,"class","s-y_bCXRrkrYfP"),y(d,P,131,6,3289),p(e,"class","results s-y_bCXRrkrYfP"),y(e,P,125,4,3127)},m:function(s,i){E(s,e,i),k(e,t);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null);k(e,c),k(e,d),_||(f=[te(l[5].call(null,t)),G(d,"click",l[4],!1,!1,!1,!1)],_=!0)},p:function(s,i){if(i&2){o=S(s[1]);let a;for(a=0;a<o.length;a+=1){const u=K(s,o,a);r[a]?r[a].p(u,i):(r[a]=U(u),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=o.length}},d:function(s){s&&v(e),Q(r,s),_=!1,ne(f)}};return X("SvelteRegisterBlock",{block:m,id:A.name,type:"if",source:"(125:2) {#if showResults}",ctx:l}),m}function U(l){let e,t=l[9]+"",c;const d={c:function(){e=R("p"),c=W(t),this.h()},l:function(_){e=C(_,"P",{class:!0});var f=j(e);c=z(f,t),f.forEach(v),this.h()},h:function(){p(e,"class","s-y_bCXRrkrYfP"),y(e,P,128,11,3237)},m:function(_,f){E(_,e,f),k(e,c)},p:function(_,f){f&2&&t!==(t=_[9]+"")&&ae(c,t)},d:function(_){_&&v(e)}};return X("SvelteRegisterBlock",{block:d,id:U.name,type:"each",source:"(128:8) {#each rankings as ranking}",ctx:l}),d}function H(l){let e,t,c="ФКНФ MBTI",d,h,_,f=!l[0]&&M(l),o=l[0]&&A(l);const r={c:function(){e=R("div"),t=R("h1"),t.textContent=c,d=I(),h=R("main"),f&&f.c(),_=I(),o&&o.c(),this.h()},l:function(n){e=C(n,"DIV",{class:!0});var s=j(e);t=C(s,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-dj2kad"&&(t.textContent=c),s.forEach(v),d=T(n),h=C(n,"MAIN",{class:!0});var i=j(h);f&&f.l(i),_=T(i),o&&o.l(i),i.forEach(v),this.h()},h:function(){p(t,"class","s-y_bCXRrkrYfP"),y(t,P,96,2,2282),p(e,"class","title s-y_bCXRrkrYfP"),y(e,P,95,0,2260),p(h,"class","centered s-y_bCXRrkrYfP"),y(h,P,99,0,2309)},m:function(n,s){E(n,e,s),k(e,t),E(n,d,s),E(n,h,s),f&&f.m(h,null),k(h,_),o&&o.m(h,null)},p:function(n,[s]){n[0]?f&&(f.d(1),f=null):f?f.p(n,s):(f=M(n),f.c(),f.m(h,_)),n[0]?o?o.p(n,s):(o=A(n),o.c(),o.m(h,null)):o&&(o.d(1),o=null)},i:J,o:J,d:function(n){n&&(v(e),v(d),v(h)),f&&f.d(),o&&o.d()}};return X("SvelteRegisterBlock",{block:r,id:H.name,type:"component",source:"",ctx:l}),r}function fe(l,e,t){let{$$slots:c={},$$scope:d}=e;ie("Page",c,[]);let h=new Map([["Класическа филология",0],["Новогръцка филология",0],["Унгарска филология",0],["Френска филология",0],["Италианска филология",0],["Румънска филология",0],["Немска филология",0],["Скандинавистика",0],["Английска филология",0],["Испанска филология",0],["Португалска филология",0],["Африканистика",0],["Арабистика",0],["Китаистика",0],["Японистика",0],["Кореистика",0],["Арменистика и кавказология",0],["Индология",0],["Иранистика",0],["Тюркология",0],["Южна, Източна и Югоизточна Азия",0]]),_=!1,f=[],o=!0;function r(u){u.weights.forEach(b=>{b.majors.forEach(F=>h.set(F,h.get(F)+b.weight))}),console.log(h)}function m(){t(1,f=[...h.entries()].filter(u=>u[1]>0).sort((u,b)=>u[1]<b[1]?-1:1).reverse().slice(0,3).map(u=>u[0])),t(0,_=!_)}function n(){h=new Map([["Класическа филология",0],["Новогръцка филология",0],["Унгарска филология",0],["Френска филология",0],["Италианска филология",0],["Румънска филология",0],["Немска филология",0],["Скандинавистика",0],["Английска филология",0],["Испанска филология",0],["Португалска филология",0],["Африканистика",0],["Арабистика",0],["Китаистика",0],["Японистика",0],["Кореистика",0],["Арменистика и кавказология",0],["Индология",0],["Иранистика",0],["Тюркология",0],["Южна, Източна и Югоизточна Азия",0]]),t(1,f=[]),t(0,_=!1)}const s=()=>{const u=()=>window.scroll({top:document.body.scrollHeight,behaviour:"smooth"});return u(),{update:u}},i=[];Object.keys(e).forEach(u=>{!~i.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&re.warn(`<Page> was created with unknown prop '${u}'`)});const a=u=>r(u);return l.$capture_state=()=>({qs:O,major_scores:h,showResults:_,rankings:f,visible:o,applyAnswer:r,toggleResults:m,reset:n,scrollBot:s}),l.$inject_state=u=>{"major_scores"in u&&(h=u.major_scores),"showResults"in u&&t(0,_=u.showResults),"rankings"in u&&t(1,f=u.rankings),"visible"in u&&(o=u.visible)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),[_,f,r,m,n,s,a]}class de extends le{constructor(e){super(e),oe(this,e,fe,H,ee,{}),X("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:H.name})}}export{de as component};
