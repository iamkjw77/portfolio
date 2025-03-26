(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{70:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,347,23)),Promise.resolve().then(a.t.bind(a,8346,23)),Promise.resolve().then(a.bind(a,2654)),Promise.resolve().then(a.bind(a,2260))},347:()=>{},2260:(e,t,a)=>{"use strict";a.d(t,{D:()=>n,default:()=>h});var r=a(5155),l=a(3717),s=a(2115);let i=(0,s.createContext)(void 0),n=()=>{let e=(0,s.useContext)(i);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e},h=e=>{let{children:t}=e,[a,n]=(0,s.useState)(()=>localStorage.getItem("theme")||l.S.Light),h=e=>{n(e),localStorage.setItem("theme",e),document.documentElement.classList.toggle(l.S.Dark,e===l.S.Dark)};return(0,s.useEffect)(()=>{let e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e?h(e):h(t?l.S.Dark:l.S.Light);let a=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{localStorage.getItem("theme")||h(e.matches?l.S.Dark:l.S.Light)};return a.addEventListener("change",r),setTimeout(()=>{document.documentElement.classList.add("theme-transition")},0),()=>a.removeEventListener("change",r)},[]),(0,r.jsx)(i.Provider,{value:{theme:a,toggleTheme:()=>h(a===l.S.Light?l.S.Dark:l.S.Light)},children:t})}},2654:(e,t,a)=>{"use strict";a.d(t,{default:()=>f});var r=a(5155),l=a(9932);let s=Object.freeze({NAV_ITEMS:[{label:"Home",path:"/",target:"_self"},{label:"Blog",path:"https://medium.com/@iamkjw",target:"_blank"},{label:"Github",path:"https://github.com/iamkjw77",target:"_blank"}]});var i=a(9946);let n=(0,i.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),h=(0,i.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var o=a(6874),c=a.n(o),d=a(8999),m=a(2115);let u=()=>{let[e,t]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{t(!0)},[]),e};var x=a(2260),g=a(3717);let p=(0,i.A)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]),k=(0,i.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),y=()=>{let{theme:e,toggleTheme:t}=(0,x.D)();return u()?(0,r.jsx)(l.P.button,{type:"button",whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer",onClick:t,children:e===g.S.Light?(0,r.jsx)(p,{}):(0,r.jsx)(k,{})}):null};function f(){let e=(0,d.usePathname)(),[t,a]=(0,m.useState)(!1);return(0,r.jsx)("header",{className:"fixed top-0 z-100 w-full bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsx)(l.P.h1,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},className:"text-xl font-bold text-foreground",children:(0,r.jsx)(c(),{href:"/",children:"Jiwon Kim"})}),(0,r.jsxs)("div",{className:"hidden md:flex items-center gap-6",children:[(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"flex gap-6",children:s.NAV_ITEMS.map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:t.path,target:t.target,className:"text-sm font-medium transition-colors ".concat(e===t.path?"text-primary":"text-foreground"),children:t.label})},t.label))})}),(0,r.jsx)(y,{})]}),(0,r.jsxs)("div",{className:"md:hidden flex items-center gap-2",children:[(0,r.jsx)(y,{}),(0,r.jsx)("button",{onClick:()=>a(!t),className:"p-2 cursor-pointer",children:t?(0,r.jsx)(n,{}):(0,r.jsx)(h,{})})]})]}),(0,r.jsx)(l.P.div,{initial:!1,animate:{height:t?"auto":0,opacity:+!!t},className:"md:hidden overflow-hidden",children:(0,r.jsx)("nav",{className:"py-4",children:(0,r.jsx)("ul",{className:"flex flex-col gap-4",children:s.NAV_ITEMS.map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:t.path,target:t.target,className:"text-lg block font-medium transition-colors ".concat(e===t.path?"text-primary":"text-foreground"),children:t.label})},t.label))})})})]})})}},3717:(e,t,a)=>{"use strict";a.d(t,{S:()=>r});var r=function(e){return e.Light="light",e.Dark="dark",e}({})},8346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_38a7f8"}}},e=>{var t=t=>e(e.s=t);e.O(0,[838,26,874,441,684,358],()=>t(70)),_N_E=e.O()}]);