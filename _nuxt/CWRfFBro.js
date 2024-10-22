import{x as V,y as N,b as q,I as D,g as F,w as j,C as E}from"./BlUlfZUJ.js";import{m as u,o as c,y as p,w as l,z as i,A as L,B as S,u as n,p as v,a as k,x as T,C as y,D as w,b as d,E as z,c as x,F as A,G,d as B,t as $}from"./_E3UUY90.js";import{c as C}from"./BM_CldAA.js";import{u as K}from"./-K7QcQ8t.js";const Q=u({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(t,{emit:e}){const a=V(t,e);return(r,b)=>(c(),p(n(N),L(S(n(a))),{default:l(()=>[i(r.$slots,"default")]),_:3},16))}}),R=u({__name:"AccordionContent",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:s,...a}=e;return a});return(s,a)=>(c(),p(n(q),y(o.value,{class:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:l(()=>[k("div",{class:T(n(C)("pb-4 pt-0",e.class))},[i(s.$slots,"default")],2)]),_:3},16))}}),X=u({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:a,...r}=e;return r}),s=D(o);return(a,r)=>(c(),p(n(F),y(n(s),{class:n(C)("border-b",e.class)}),{default:l(()=>[i(a.$slots,"default")]),_:3},16,["class"]))}});/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=({size:t,strokeWidth:e=2,absoluteStrokeWidth:o,color:s,iconNode:a,name:r,class:b,...m},{slots:_})=>w("svg",{...h,width:t||h.width,height:t||h.height,stroke:s||h.stroke,"stroke-width":o?Number(e)*24/Number(t):e,class:["lucide",`lucide-${Z(r??"icon")}`],...m},[...a.map(g=>w(...g)),..._.default?[_.default()]:[]]);/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>(o,{slots:s})=>w(H,{...o,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=J("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),O=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:s,...a}=e;return a});return(s,a)=>(c(),p(n(E),{class:"flex"},{default:l(()=>[d(n(j),y(o.value,{class:n(C)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e.class)}),{default:l(()=>[i(s.$slots,"default"),i(s.$slots,"icon",{},()=>[d(n(M),{class:"h-4 w-4 shrink-0 transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}}),te=u({__name:"faq",async setup(t){var r;let e,o;const{data:s}=([e,o]=z(()=>K("/api/faq","$h1Pv1Xqmmj")),e=await e,o(),e),a=((r=s.value)==null?void 0:r.faqs)||[];return console.log(a),(b,m)=>{const _=O,g=R,P=X,I=Q;return c(),x(A,null,[m[0]||(m[0]=k("h1",null,"Esta es la pagina de FAQ",-1)),d(I,{type:"single",collapsible:""},{default:l(()=>[(c(!0),x(A,null,G(n(a),f=>(c(),p(P,{key:f.id,value:f.id.toString()},{default:l(()=>[d(_,null,{default:l(()=>[B($(f.question),1)]),_:2},1024),d(g,null,{default:l(()=>[B($(f.answer),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})],64)}}});export{te as default};
