(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{1274:(e,t,s)=>{"use strict";s.d(t,{default:()=>E});var l=s(5155),a=s(9932),n=s(9946);let r=(0,n.A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var i=s(2115),c=s(869),o=s(2885),d=s(7494),h=s(845),m=s(1508);class u extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,s=e instanceof HTMLElement&&e.offsetWidth||0,l=this.props.sizeRef.current;l.height=t.offsetHeight||0,l.width=t.offsetWidth||0,l.top=t.offsetTop,l.left=t.offsetLeft,l.right=s-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function x(e){let{children:t,isPresent:s,anchorX:a}=e,n=(0,i.useId)(),r=(0,i.useRef)(null),c=(0,i.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:o}=(0,i.useContext)(m.Q);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:l,left:i,right:d}=c.current;if(s||!r.current||!e||!t)return;r.current.dataset.motionPopId=n;let h=document.createElement("style");return o&&(h.nonce=o),document.head.appendChild(h),h.sheet&&h.sheet.insertRule('\n          [data-motion-pop-id="'.concat(n,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===a?"left: ".concat(i):"right: ".concat(d),"px !important;\n            top: ").concat(l,"px !important;\n          }\n        ")),()=>{document.head.removeChild(h)}},[s]),(0,l.jsx)(u,{isPresent:s,childRef:r,sizeRef:c,children:i.cloneElement(t,{ref:r})})}let p=e=>{let{children:t,initial:s,isPresent:a,onExitComplete:n,custom:r,presenceAffectsLayout:c,mode:d,anchorX:m}=e,u=(0,o.M)(f),p=(0,i.useId)(),b=(0,i.useCallback)(e=>{for(let t of(u.set(e,!0),u.values()))if(!t)return;n&&n()},[u,n]),g=(0,i.useMemo)(()=>({id:p,initial:s,isPresent:a,custom:r,onExitComplete:b,register:e=>(u.set(e,!1),()=>u.delete(e))}),c?[Math.random(),b]:[a,b]);return(0,i.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[a]),i.useEffect(()=>{a||u.size||!n||n()},[a]),"popLayout"===d&&(t=(0,l.jsx)(x,{isPresent:a,anchorX:m,children:t})),(0,l.jsx)(h.t.Provider,{value:g,children:t})};function f(){return new Map}var b=s(2082);let g=e=>e.key||"";function j(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}let y=e=>{let{children:t,custom:s,initial:a=!0,onExitComplete:n,presenceAffectsLayout:r=!0,mode:h="sync",propagate:m=!1,anchorX:u="left"}=e,[x,f]=(0,b.xQ)(m),y=(0,i.useMemo)(()=>j(t),[t]),N=m&&!x?[]:y.map(g),v=(0,i.useRef)(!0),w=(0,i.useRef)(y),k=(0,o.M)(()=>new Map),[C,D]=(0,i.useState)(y),[E,M]=(0,i.useState)(y);(0,d.E)(()=>{v.current=!1,w.current=y;for(let e=0;e<E.length;e++){let t=g(E[e]);N.includes(t)?k.delete(t):!0!==k.get(t)&&k.set(t,!1)}},[E,N.length,N.join("-")]);let P=[];if(y!==C){let e=[...y];for(let t=0;t<E.length;t++){let s=E[t],l=g(s);N.includes(l)||(e.splice(t,0,s),P.push(s))}return"wait"===h&&P.length&&(e=P),M(j(e)),D(y),null}let{forceRender:R}=(0,i.useContext)(c.L);return(0,l.jsx)(l.Fragment,{children:E.map(e=>{let t=g(e),i=(!m||!!x)&&(y===E||N.includes(t));return(0,l.jsx)(p,{isPresent:i,initial:(!v.current||!!a)&&void 0,custom:s,presenceAffectsLayout:r,mode:h,onExitComplete:i?void 0:()=>{if(!k.has(t))return;k.set(t,!0);let e=!0;k.forEach(t=>{t||(e=!1)}),e&&(null==R||R(),M(w.current),m&&(null==f||f()),n&&n())},anchorX:u,children:e},t)})})},N=(0,n.A)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),v=(0,n.A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),w=(0,n.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),k=e=>{let{media:t,projectName:s}=e,[n,r]=(0,i.useState)(0),[c,o]=(0,i.useState)(!1);if(!t.length)return null;let d=t[n];return(0,l.jsxs)("div",{className:"relative w-full h-[400px] md:h-[500px] mb-12 mt-6",children:[(0,l.jsx)(y,{initial:!1,mode:"wait",children:(0,l.jsx)(a.P.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.3},className:"absolute inset-0 rounded-lg overflow-hidden",children:"image"===d.type?(0,l.jsx)("img",{src:d.url,alt:"".concat(s," ").concat(n+1),className:"w-full h-full object-contain translate-z-0",style:{willChange:"opacity, transform"}}):(0,l.jsxs)("div",{className:"relative w-full h-full",children:[!c&&d.thumbnail&&(0,l.jsxs)("div",{className:"absolute inset-0 z-10",children:[(0,l.jsx)("img",{src:d.thumbnail,alt:"".concat(s," 비디오 썸네일"),className:"w-full h-full object-contain translate-z-0",style:{willChange:"opacity, transform"}}),(0,l.jsx)("button",{onClick:()=>o(!0),className:"absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group",children:(0,l.jsx)("div",{className:"w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform",children:(0,l.jsx)(N,{className:"w-8 h-8 text-gray-900"})})})]}),(c||!d.thumbnail)&&(0,l.jsxs)("video",{className:"w-full h-full object-contain",controls:!1,autoPlay:!0,muted:!0,loop:!0,onEnded:()=>o(!1),children:[(0,l.jsx)("source",{src:d.url,type:"video/mp4"}),"Your browser does not support the video tag."]},d.url)]})},n)}),t.length>1&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:()=>{r(e=>0===e?t.length-1:e-1)},className:"z-200 absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-400 text-white hover:bg-black/50 transition-colors cursor-pointer","aria-label":"이전",children:(0,l.jsx)(v,{className:"w-6 h-6"})}),(0,l.jsx)("button",{onClick:()=>{r(e=>e===t.length-1?0:e+1)},className:"z-200 absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-400 text-white hover:bg-black/50 transition-colors cursor-pointer","aria-label":"다음",children:(0,l.jsx)(w,{className:"w-6 h-6"})}),(0,l.jsx)("div",{className:"z-200 absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-2",children:t.map((e,t)=>(0,l.jsx)("button",{onClick:()=>{r(t),o(!1)},className:"w-2 h-2 rounded-full transition-colors border border-gray-300 cursor-pointer ".concat(t===n?"bg-gray-300":"bg-white/50"),"aria-label":"".concat(t+1,"번으로 이동")},t))})]})]})};var C=s(6874),D=s.n(C);let E=e=>{var t;let{project:s}=e;return(0,l.jsx)(a.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,l.jsxs)("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg",children:[(0,l.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-2",children:s.name}),(0,l.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:s.period}),s.link&&(0,l.jsxs)(D(),{href:s.link,target:"_blank",className:"inline-flex items-center text-accent/90 hover:text-accent/100 mb-6",children:[(0,l.jsx)(r,{className:"w-4 h-4 mr-2"}),"프로젝트 방문하기"]}),s.media&&s.media.length>0&&(0,l.jsx)(k,{media:s.media,projectName:s.name}),(0,l.jsxs)("div",{className:"space-y-10",children:[s.members&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"\uD83D\uDC6A Members"}),(0,l.jsx)("ul",{children:null===(t=s.members)||void 0===t?void 0:t.map(e=>(0,l.jsxs)("li",{className:"flex flex-start",children:[(0,l.jsx)("span",{className:"text-accent mr-2",children:"•"}),e.team," ",e.size,"명"]},e.team))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"\uD83D\uDCCC Summary"}),(0,l.jsx)("p",{className:"text-gray-700 dark:text-gray-400 font-semibold mb-4",children:s.description}),(0,l.jsx)("ul",{children:s.summary.map(e=>(0,l.jsxs)("li",{className:"flex align-start mb-1",children:[(0,l.jsx)("span",{className:"text-accent mr-2",children:"•"}),e]},e))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"\uD83E\uDD14 Background"}),(0,l.jsx)("ul",{children:s.background.map(e=>(0,l.jsx)("li",{className:"whitespace-pre-wrap mb-2",children:e},e))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"\uD83D\uDD0D Meaning"}),(0,l.jsx)("ul",{children:s.meaning.map(e=>{let{title:t,description:s}=e;return(0,l.jsxs)("li",{className:"mb-6",children:[t&&(0,l.jsxs)("h6",{className:"flex flex-start mb-2 font-semibold",children:[(0,l.jsx)("span",{className:"text-accent mr-2",children:"•"}),t]}),(0,l.jsx)("ul",{children:s.map(e=>(0,l.jsx)("li",{className:"whitespace-pre-wrap mb-2",children:e},e))})]},t)})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"\uD83D\uDC69‍\uD83C\uDF3E Responsibilities"}),(0,l.jsxs)("p",{className:"text-gray-700 dark:text-gray-400 font-semibold mb-3",children:["기여도 : ",s.contributionPercentage]}),(0,l.jsx)("ul",{children:s.technicalContributions.map(e=>(0,l.jsxs)("li",{className:"flex flex-start",children:[(0,l.jsx)("span",{className:"text-accent mr-2",children:"•"}),e]},e))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"\uD83D\uDD28 Technology Stack(s)"}),(0,l.jsx)("ul",{className:"flex flex-wrap gap-2",children:s.techStack.map(e=>(0,l.jsx)("li",{className:"px-3 py-1 bg-purple-100 dark:bg-rose-400/30 text-accent dark:text-rose-100 rounded-full",children:e},e))})]})]})]})})}},4390:(e,t,s)=>{Promise.resolve().then(s.bind(s,1274))}},e=>{var t=t=>e(e.s=t);e.O(0,[610,441,684,358],()=>t(4390)),_N_E=e.O()}]);