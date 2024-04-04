import{s as x,d as y,n as O,e as $,i as ee,f as te}from"../chunks/scheduler.BF1Ui5Kr.js";import{S as ne,i as se,d as Y,n as D,v as le,e as R,s as S,c as j,f as B,o as Q,h as v,j as X,p as b,k as q,l as k,q as J,r as L,b as U,g as G,m as oe}from"../chunks/index.YfuJqEKv.js";const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{console:ie}=ae,C="src/routes/+page.svelte";function W(o,e,a){const c=o.slice();return c[13]=e[a],c}function z(o,e,a){const c=o.slice();return c[16]=e[a],c[18]=a,c}function F(o,e,a){const c=o.slice();return c[19]=e[a],c[21]=a,c}function K(o){let e,a;const c={c:function(){e=R("img"),this.h()},l:function(n){e=j(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){te(e.src,a=o[19].data)||b(e,"src",a),b(e,"alt",""),b(e,"class","s-y_bCXRrkrYfP"),y(e,C,181,16,6714)},m:function(n,t){q(n,e,t)},p:O,d:function(n){n&&v(e)}};return Y("SvelteRegisterBlock",{block:c,id:K.name,type:"if",source:'(181:14) {#if q.data === \\"Image\\"}',ctx:o}),c}function V(o){let e,a,c,m=o[19].label+"",n,t,d,r,i;function g(){return o[6](o[19])}let l=o[16].data==="Image"&&K(o);const _={c:function(){e=R("input"),a=S(),c=R("label"),n=U(m),t=S(),l&&l.c(),d=S(),this.h()},l:function(s){e=j(s,"INPUT",{type:!0,name:!0,id:!0,class:!0}),a=X(s),c=j(s,"LABEL",{for:!0,class:!0});var u=B(c);n=G(u,m),t=X(u),l&&l.l(u),d=X(u),u.forEach(v),this.h()},h:function(){b(e,"type",o[16].select),b(e,"name",o[18]),b(e,"id",o[18]+"-"+o[21]),e.value=o[19].data,b(e,"class","s-y_bCXRrkrYfP"),y(e,C,177,12,6483),b(c,"for",o[18]+"-"+o[21]),b(c,"class","s-y_bCXRrkrYfP"),y(c,C,178,12,6604)},m:function(s,u){q(s,e,u),q(s,a,u),q(s,c,u),k(c,n),k(c,t),l&&l.m(c,null),k(c,d),r||(i=J(e,"input",g,!1,!1,!1,!1),r=!0)},p:function(s,u){o=s,o[16].data==="Image"&&l.p(o,u)},d:function(s){s&&(v(e),v(a),v(c)),l&&l.d(),r=!1,i()}};return Y("SvelteRegisterBlock",{block:_,id:V.name,type:"each",source:"(177:10) {#each q.options as option, j}",ctx:o}),_}function M(o){let e,a,c=o[16].text+"",m,n,t,d,r=D(o[16].options),i=[];for(let l=0;l<r.length;l+=1)i[l]=V(F(o,r,l));const g={c:function(){e=R("div"),a=R("p"),m=U(c),n=S(),t=R("div");for(let _=0;_<i.length;_+=1)i[_].c();d=S(),this.h()},l:function(_){e=j(_,"DIV",{class:!0});var w=B(e);a=j(w,"P",{class:!0});var s=B(a);m=G(s,c),s.forEach(v),n=X(w),t=j(w,"DIV",{class:!0});var u=B(t);for(let T=0;T<i.length;T+=1)i[T].l(u);u.forEach(v),d=X(w),w.forEach(v),this.h()},h:function(){b(a,"class","s-y_bCXRrkrYfP"),y(a,C,174,7,6384),b(t,"class","answers s-y_bCXRrkrYfP"),y(t,C,175,8,6408),b(e,"class","question s-y_bCXRrkrYfP"),y(e,C,173,6,6354)},m:function(_,w){q(_,e,w),k(e,a),k(a,m),k(e,n),k(e,t);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(t,null);k(e,d)},p:function(_,w){if(w&12){r=D(_[16].options);let s;for(s=0;s<r.length;s+=1){const u=F(_,r,s);i[s]?i[s].p(u,w):(i[s]=V(u),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=r.length}},d:function(_){_&&v(e),L(i,_)}};return Y("SvelteRegisterBlock",{block:g,id:M.name,type:"each",source:"(173:4) {#each qs as q, i}",ctx:o}),g}function N(o){let e,a,c,m,n=D(o[1]),t=[];for(let r=0;r<n.length;r+=1)t[r]=A(W(o,n,r));const d={c:function(){e=R("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l:function(i){e=j(i,"DIV",{class:!0});var g=B(e);for(let l=0;l<t.length;l+=1)t[l].l(g);g.forEach(v),this.h()},h:function(){b(e,"class","scores s-y_bCXRrkrYfP"),y(e,C,190,4,6948)},m:function(i,g){q(i,e,g);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);c||(m=$(a=o[5].call(null,e,o[1])),c=!0)},p:function(i,g){if(g&2){n=D(i[1]);let l;for(l=0;l<n.length;l+=1){const _=W(i,n,l);t[l]?t[l].p(_,g):(t[l]=A(_),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}a&&ee(a.update)&&g&2&&a.update.call(null,i[1])},d:function(i){i&&v(e),L(t,i),c=!1,m()}};return Y("SvelteRegisterBlock",{block:d,id:N.name,type:"if",source:"(190:71) {#if showResults}",ctx:o}),d}function A(o){let e,a=o[13]+"",c;const m={c:function(){e=R("p"),c=U(a),this.h()},l:function(t){e=j(t,"P",{class:!0});var d=B(e);c=G(d,a),d.forEach(v),this.h()},h:function(){b(e,"class","s-y_bCXRrkrYfP"),y(e,C,192,9,7037)},m:function(t,d){q(t,e,d),k(e,c)},p:function(t,d){d&2&&a!==(a=t[13]+"")&&oe(c,a)},d:function(t){t&&v(e)}};return Y("SvelteRegisterBlock",{block:m,id:A.name,type:"each",source:"(192:6) {#each rankings as ranking}",ctx:o}),m}function H(o){let e,a,c="Тест за специалност",m,n,t,d,r,i="Show Results",g,l,_,w=D(o[2]),s=[];for(let P=0;P<w.length;P+=1)s[P]=M(z(o,w,P));let u=o[0]&&N(o);const T={c:function(){e=R("div"),a=R("h1"),a.textContent=c,m=S(),n=R("main"),t=R("div");for(let p=0;p<s.length;p+=1)s[p].c();d=S(),r=R("button"),r.textContent=i,g=S(),u&&u.c(),this.h()},l:function(p){e=j(p,"DIV",{class:!0});var f=B(e);a=j(f,"H1",{"data-svelte-h":!0}),Q(a)!=="svelte-i5ubjt"&&(a.textContent=c),f.forEach(v),m=X(p),n=j(p,"MAIN",{class:!0});var h=B(n);t=j(h,"DIV",{class:!0});var I=B(t);for(let E=0;E<s.length;E+=1)s[E].l(I);I.forEach(v),d=X(h),r=j(h,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-1b46adg"&&(r.textContent=i),g=X(h),u&&u.l(h),h.forEach(v),this.h()},h:function(){y(a,C,167,2,6238),b(e,"class","title s-y_bCXRrkrYfP"),y(e,C,166,0,6216),b(t,"class","questions"),y(t,C,171,2,6301),b(r,"type","button"),b(r,"class","s-y_bCXRrkrYfP"),y(r,C,189,2,6857),b(n,"class","centered s-y_bCXRrkrYfP"),y(n,C,170,0,6275)},m:function(p,f){q(p,e,f),k(e,a),q(p,m,f),q(p,n,f),k(n,t);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(t,null);k(n,d),k(n,r),k(n,g),u&&u.m(n,null),l||(_=J(r,"click",o[4],!1,!1,!1,!1),l=!0)},p:function(p,[f]){if(f&12){w=D(p[2]);let h;for(h=0;h<w.length;h+=1){const I=z(p,w,h);s[h]?s[h].p(I,f):(s[h]=M(I),s[h].c(),s[h].m(t,null))}for(;h<s.length;h+=1)s[h].d(1);s.length=w.length}p[0]?u?u.p(p,f):(u=N(p),u.c(),u.m(n,null)):u&&(u.d(1),u=null)},i:O,o:O,d:function(p){p&&(v(e),v(m),v(n)),L(s,p),u&&u.d(),l=!1,_()}};return Y("SvelteRegisterBlock",{block:T,id:H.name,type:"component",source:"",ctx:o}),T}function ce(o,e,a){let{$$slots:c={},$$scope:m}=e;le("Page",c,[]);class n{constructor(h,I,E){this.label=I,this.data=h,this.weights=E}}class t{constructor(h,I){this.weight=h,this.majors=I}}const d={radio:"radio",checkbox:"checkbox"},r={Text:"Text",Image:"Image"};class i{constructor(h,I,E,Z){this.text=h,this.data=I,this.select=E,this.options=Z}}const g=[new i("Какъв език учиш би искал/а да учиш?",r.Text,d.radio,[new n("Източен","Източен",[new t(1,["Африканистика","Арабистика","Китаистика","Японистика","Кореистика","Арменистика и кавказология","Индология","Иранистика","Тюркология","Южна, Източна и Югоизточна Азия"])]),new n("Западен","Западен",[new t(1,["Класическа филология","Новогръцка филология","Унгарска филология","Френска филология","Италианска филология","Румънска филология","Немска филология","Скандинавистика","Английска филология","Испанска филология","Португалска филология"])])]),new i("Колко езика би искал/а да учиш?",r.Text,d.radio,[new n("Един","Един",[new t(1,[])]),new n("Два или повече","Два или повече",[new t(1,["Южна, Източна и Югоизточна Азия","Скандинавистика","Африканистика","Индинология","Арабистика"])])]),new i("Коя закуска ти изглежда най-апетитно?",r.Image,d.radio,[new n("/BOP.jpg","",[new t(1,["Английска филология"])]),new n("/quaso.jpg","",[new t(1,["Френска филология"])]),new n("/sleep.jpg","",[new t(1,["Испанска филология"])]),new n("/pie.jpg","",[new t(1,["Португалска филология"])]),new n("/dafuque.jpg","",[new t(1,["Скандинавистика"])]),new n("/bao.jpg","",[new t(1,["Китаистика"])])]),new i("Как предпочиташ да прекарваш свободното си време?",r.Text,d.radio,[new n("Да купонясвам","Да купонясвам",[new t(1,["Унгарска филология"])]),new n("Да спя","Да спя",[new t(1,["Испанска филология"])]),new n("Да си мисля за римската империя","Да си мисля за римската империя",[new t(1,["Класическа филология"])]),new n("Да гледам/отида на футболен мач","Да гледам/отида на футболен мач",[new t(1,["Португалска филология"])]),new n("Да гледам к-драми","Да гледам к-драми",[new t(1,["Кореистика"])])]),new i("Кой е любимият ти сезон?",r.Text,d.radio,[new n("Пролет","Пролет",[new t(1,["Японистика","Китаистика"])]),new n("Лято","Лято","спя",[new t(1,["Френска филология","Испанска филология","Португалска филология","Италианска филология"])]),new n("Есен","Есен",[new t(1,["Английска филология","Кореистика"])]),new n("Зима","Зима",[new t(1,["Скандинавистика"])])]),new i("Кой е любимия ти вкус?",r.Text,d.radio,[new n("Люто","Люто",[new t(1,["Италианска филология","Английска филология"])]),new n("Солено","Солено",[new t(1,["Италианска филология","Английска филология"])]),new n("Сладко","Сладко",[new t(1,["Френска филология, Английска филология"])]),new n("Кисело","Кисело",[new t(1,["Китаистика"])]),new n("Всичко и по много","Всичко и по много",[new t(1,["Португалска филология","Индология"])])])],l=new Map([["Класическа филология",0],["Новогръцка филология",0],["Унгарска филология",0],["Френска филология",0],["Италианска филология",0],["Румънска филология",0],["Немска филология",0],["Скандинавистика",0],["Английска филология",0],["Испанска филология",0],["Португалска филология",0],["Африканистика",0],["Арабистика",0],["Китаистика",0],["Японистика",0],["Кореистика",0],["Арменистика и кавказология",0],["Индология",0],["Иранистика",0],["Тюркология",0],["Южна, Източна и Югоизточна Азия",0]]);let _=!1,w=[];function s(f){f.weights.forEach(h=>{h.majors.forEach(E=>l.set(E,l.get(E)+h.weight))}),console.log(l)}async function u(){a(1,w=[...l.entries()].filter(f=>f[1]>0).sort((f,h)=>f[1]<h[1]?-1:1).reverse().slice(0,3).map(f=>f[0])),a(0,_=!_)}const T=()=>{const f=()=>window.scroll({top:document.body.scrollHeight,behaviour:"smooth"});return f(),{update:f}},P=[];Object.keys(e).forEach(f=>{!~P.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&ie.warn(`<Page> was created with unknown prop '${f}'`)});const p=f=>s(f);return o.$capture_state=()=>({Option:n,WeightedMajors:t,Select:d,Data:r,Question:i,qs:g,major_scores:l,showResults:_,rankings:w,applyAnswer:s,toggleResults:u,scrollBot:T}),o.$inject_state=f=>{"showResults"in f&&a(0,_=f.showResults),"rankings"in f&&a(1,w=f.rankings)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[_,w,g,s,u,T,p]}class fe extends ne{constructor(e){super(e),se(this,e,ce,H,x,{}),Y("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:H.name})}}export{fe as component};
