import{W as d,n,C as c,c as w,U as p,u,O as g,D,a as R,E,P as C,b as h,M as P,H as y,z as _,v as S,w as b,x as k,R as N}from"../chunks/ResultsForm.8b152475.js";import{S as A,i as L,s as z,e as v,b as M,g as f,d as F,f as O,h as I,o as W,y as B,z as K,A as U,B as V,v as G}from"../chunks/index.8eacf69c.js";const H=async({params:i})=>{const t=new d({id:n(),name:"Основная",size:{a:5e3,c:5e3,h:800,maxLength:4900}});n(),new d({id:n(),name:"Д. №1",size:{a:500,c:1e3,h:800,maxLength:t.size.maxLength}}),n(),new d({id:n(),name:"Д. №5",size:{a:1e3,c:500,h:800,maxLength:t.size.maxLength}}),n(),new d({id:n(),name:"Деталь №4",size:{a:500,c:500,h:800,maxLength:t.size.maxLength}});const e=new c({id:n(),name:"KLIMOV.RED",type:w.BUSINESS}),a=[new p({id:n(),name:"Николай Поздняков",company:e,type:u.MANAGER,avatar:"/orders-klimov-red-public/imgs/user/managers/manager.png"}),new p({id:n(),name:"Дмитрий Рудин",company:e,type:u.MANAGER})],o=[new p({id:n(),name:"Эдуард Рябов",company:e,type:u.WORKER}),new p({id:n(),name:"Василий Петров",company:e,type:u.WORKER})],m=[new c({id:n(),name:"ООО Транзит",type:w.BUSINESS}),new c({id:n(),name:"ИП Иванов",type:w.IE}),new c({id:n(),name:"Самозанятый Ласточкин",type:w.INDIVIDUAL})],l={openingSides:[new g({id:n(),name:"Правая на себя",side:"right",opening:"inside"}),new g({id:n(),name:"Правая от себя",side:"right",opening:"outside"}),new g({id:n(),name:"Левая на себя",side:"left",opening:"inside"}),new g({id:n(),name:"Левая от себя",side:"left",opening:"outside"})],doorFrames:[new D({id:n(),name:"HANK REARDEN 59",width:42.2,height:36,length:5e3}),new D({id:n(),name:"RAGNAR DANNESKJOLD 42",width:52.5,height:28.2,length:5e3})],canvasConstructionTypes:[new R({id:"torec",name:"Торец"}),new R({id:"carcas",name:"Каркас"})],endFaceTypes:[new E({id:n(),name:"EddieWillers 42.1 | Прямой",width:42,height:7.75,length:5e3}),new E({id:n(),name:"Dagny Taggart 58.1 | С четвертью ",width:58,height:2.55,length:5e3})],profileMaterials:[new C({id:n(),name:"Алюминий"}),new C({id:n(),name:"Сталь"})],profileColors:[new h({id:n(),name:"Зеленый",color:"green"}),new h({id:n(),name:"Синий",color:"blue"}),new h({id:n(),name:"Серый",color:"gray"}),new h({id:n(),name:"Белый",color:"white"})],millingVersions:[new P({id:n(),name:"6360/38"}),new P({id:n(),name:"B-Forty N62 WC"})],hingesTypes:[new y({id:n(),name:"Петля 20х120",width:20,height:120}),new y({id:n(),name:"Петля 40х100",width:40,height:100}),new y({id:n(),name:"Петля 50х100",width:50,height:100})]};return{managers:new Promise(r=>r(a)),workers:new Promise(r=>r(o)),companies:new Promise(r=>r(m)),canvasConstructionTypes:new Promise(r=>r(l.canvasConstructionTypes))}},J=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function T(i){let s,t;return s=new N({props:{class:"mx-auto py-5 px-10 w-[300mm] h-[350mm]",canvasConstructionTypes:i[3],order:i[2],resultsForDrawDoorFrame:i[0],resultsForDrawEndFace:i[1]}}),{c(){B(s.$$.fragment)},l(e){K(s.$$.fragment,e)},m(e,a){U(s,e,a),t=!0},p(e,a){const o={};a&4&&(o.order=e[2]),a&1&&(o.resultsForDrawDoorFrame=e[0]),a&2&&(o.resultsForDrawEndFace=e[1]),s.$set(o)},i(e){t||(f(s.$$.fragment,e),t=!0)},o(e){F(s.$$.fragment,e),t=!1},d(e){V(s,e)}}}function $(i){let s,t,e=i[2]&&i[3].length&&T(i);return{c(){e&&e.c(),s=v()},l(a){e&&e.l(a),s=v()},m(a,o){e&&e.m(a,o),M(a,s,o),t=!0},p(a,[o]){a[2]&&a[3].length?e?(e.p(a,o),o&4&&f(e,1)):(e=T(a),e.c(),f(e,1),e.m(s.parentNode,s)):e&&(G(),F(e,1,1,()=>{e=null}),O())},i(a){t||(f(e),t=!0)},o(a){F(e),t=!1},d(a){e&&e.d(a),a&&I(s)}}}function j(i,s,t){let{data:e}=s,a=e.canvasConstructionTypes,o=[],m=[],l;return W(()=>{t(0,o=_("resultsForDrawDoorFrame_report").map(r=>new S(r))),t(1,m=_("resultsForDrawEndFace_report").map(r=>new b(r))),t(2,l=new k(_("order_report")))}),i.$$set=r=>{"data"in r&&t(4,e=r.data)},[o,m,l,a,e]}class Q extends A{constructor(s){super(),L(this,s,j,$,z,{data:4})}}export{Q as component,J as universal};
