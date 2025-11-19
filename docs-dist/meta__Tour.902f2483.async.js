"use strict";(self.webpackChunkkawhi_ui=self.webpackChunkkawhi_ui||[]).push([[606],{53666:function(V,T,e){var P;e.r(T),e.d(T,{demos:function(){return Z}});var I=e(15009),x=e.n(I),G=e(5574),w=e.n(G),j=e(99289),R=e.n(j),C=e(67294),r=e(42340),Z={"tour-demo-0":{component:C.memo(C.lazy(R()(x()().mark(function h(){var m,o,f,c,a,n,S,z;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,42340));case 2:return m=i.sent,o=m.Button,f=m.Tour,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return c=i.sent,a=c.default,n=c.useRef,S=c.useState,z=function(){var D=n(null),M=n(null),b=n(null),A=S(!1),U=w()(A,2),$=U[0],N=U[1],K=[{title:"\u7B2C\u4E00\u6B65",description:"Put your files here.",cover:a.createElement("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return D.current}},{title:"\u7B2C\u4E8C\u6B65",description:"Save your changes.",target:function(){return M.current}},{title:"\u7B2C\u4E09\u6B65",description:"Click to see other actions.",target:function(){return b.current}}];return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(o,{onClick:function(){return N(!0)}},"Begin Tour")),a.createElement(o,{ref:D},"\u7B2C\u4E00\u6B65"),a.createElement(o,{ref:M},"\u7B2C\u4E8C\u6B65"),a.createElement(o,{ref:b},"\u7B2C\u4E09\u6B65"),a.createElement(f,{open:$,onClose:function(){return N(!1)},steps:K}))},i.abrupt("return",{default:z});case 13:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"tour-demo-0",refAtomIds:["Tour"],dependencies:{"index.jsx":{type:"FILE",value:`import { Button, Tour } from 'kawhi-ui';
import React, { useRef, useState } from 'react';
const Index = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: '\u7B2C\u4E00\u6B65',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: '\u7B2C\u4E8C\u6B65',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: '\u7B2C\u4E09\u6B65',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];

  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)}>Begin Tour</Button>
      </div>
      <Button ref={ref1}>\u7B2C\u4E00\u6B65</Button>
      <Button ref={ref2}>\u7B2C\u4E8C\u6B65</Button>
      <Button ref={ref3}>\u7B2C\u4E09\u6B65</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default Index;`},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"kawhi-ui":r,react:P||(P=e.t(C,2))},renderOpts:{compile:function(){var h=R()(x()().mark(function o(){var f,c=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(f=n.sent).default.apply(f,c));case 3:case"end":return n.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"tour-demo-1":{component:C.memo(C.lazy(R()(x()().mark(function h(){var m,o,f,c,a,n,S,z;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,42340));case 2:return m=i.sent,o=m.Button,f=m.Tour,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return c=i.sent,a=c.default,n=c.useRef,S=c.useState,z=function(){var D=n(null),M=n(null),b=n(null),A=n(null),U=S(!1),$=w()(U,2),N=$[0],K=$[1],O=[{title:"\u4E0A",description:"\u5361\u7247\u4F4D\u7F6E\u5728target\u4E0A\u65B9",placement:"top",target:function(){return D.current}},{title:"\u4E0B",description:"\u5361\u7247\u4F4D\u7F6E\u5728target\u4E0B\u65B9",placement:"bottom",target:function(){return M.current}},{title:"\u5DE6",description:"\u5361\u7247\u4F4D\u7F6E\u5728target\u5DE6\u65B9",placement:"left",target:function(){return b.current}},{title:"\u53F3",placement:"right",description:"\u5361\u7247\u4F4D\u7F6E\u5728target\u53F3\u65B9",target:function(){return A.current}}];return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(o,{onClick:function(){return K(!0)}},"Begin Tour")),a.createElement(o,{ref:D},"\u4E0A\u65B9"),a.createElement(o,{ref:M},"\u4E0B\u65B9"),a.createElement(o,{ref:b},"\u5DE6\u65B9"),a.createElement(o,{ref:A},"\u53F3\u65B9"),a.createElement(f,{open:N,onClose:function(){return K(!1)},steps:O}))},i.abrupt("return",{default:z});case 13:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"tour-demo-1",refAtomIds:["Tour"],dependencies:{"index.jsx":{type:"FILE",value:`import { Button, Tour } from 'kawhi-ui';
import React, { useRef, useState } from 'react';
const Index = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [open, setOpen] = useState(false);

  //   center left leftTop leftBottom right rightTop rightBottom top topLeft topRight bottom bottomLeft bottomRight

  const steps = [
    {
      title: '\u4E0A',
      description: '\u5361\u7247\u4F4D\u7F6E\u5728target\u4E0A\u65B9',
      placement: 'top',
      target: () => ref1.current,
    },
    {
      title: '\u4E0B',
      description: '\u5361\u7247\u4F4D\u7F6E\u5728target\u4E0B\u65B9',
      placement: 'bottom',
      target: () => ref2.current,
    },
    {
      title: '\u5DE6',
      description: '\u5361\u7247\u4F4D\u7F6E\u5728target\u5DE6\u65B9',
      placement: 'left',
      target: () => ref3.current,
    },
    {
      title: '\u53F3',
      placement: 'right',
      description: '\u5361\u7247\u4F4D\u7F6E\u5728target\u53F3\u65B9',
      target: () => ref4.current,
    },
  ];

  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)}>Begin Tour</Button>
      </div>
      <Button ref={ref1}>\u4E0A\u65B9</Button>
      <Button ref={ref2}>\u4E0B\u65B9</Button>
      <Button ref={ref3}>\u5DE6\u65B9</Button>
      <Button ref={ref4}>\u53F3\u65B9</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default Index;`},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"kawhi-ui":r,react:P||(P=e.t(C,2))},renderOpts:{compile:function(){var h=R()(x()().mark(function o(){var f,c=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(f=n.sent).default.apply(f,c));case 3:case"end":return n.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},42340:function(V,T,e){e.r(T),e.d(T,{Button:function(){return o},Divider:function(){return z},Empty:function(){return D},Foo:function(){return b},Icon:function(){return $},Spin:function(){return O},Tour:function(){return ee}});var P=e(97857),I=e.n(P),x=e(13769),G=e.n(x),w=e(93967),j=e.n(w),R=e(67294),C={start:"start",end:"end"},r=e(85893),Z=["type","children","size","icon","disabled","iconPosition","className"],h="".concat("kawhi","-button"),m=(0,R.forwardRef)(function(u,t){var y=u.type,l=y===void 0?"default":y,s=u.children,v=u.size,d=v===void 0?"default":v,E=u.icon,B=u.disabled,p=B===void 0?!1:B,W=u.iconPosition,k=u.className,Q=G()(u,Z),L=(0,R.useMemo)(function(){var _=j()(h,"".concat(h,"-type-").concat(l),"".concat(h,"-size-").concat(d));return p&&(_=j()(_,"".concat(h,"-disabled"))),k&&(_=j()(_,k)),_},[l,d,p,k]);return(0,r.jsxs)("button",I()(I()({type:"button",className:L,disabled:p,ref:t},Q),{},{children:[E&&W===C.start&&E,s,E&&W===C.end&&E]}))}),o=m,f=e(9783),c=e.n(f),a=["dashed","children","orientation","size","className","type"],n="".concat("kawhi","-divider"),S=function(t){var y=t.dashed,l=t.children,s=t.orientation,v=s===void 0?"center":s,d=t.size,E=t.className,B=t.type,p=G()(t,a);return(0,r.jsx)("div",I()(I()({className:j()(n,c()(c()(c()(c()({},"".concat(n,"-dashed"),y),"".concat(n,"-with-text"),!!l),"".concat(n,"-size-").concat(d),!!d),"".concat(n,"-type-").concat(B),!!B),"".concat(n,"-with-text-").concat(v),E)},p),{},{children:l&&(0,r.jsx)("span",{className:"".concat(n,"-inner-text"),children:l})}))},z=S,H=["className","description","imageStyle","image"],i="".concat("kawhi","-empty"),J=function(t){var y=t.className,l=t.description,s=t.imageStyle,v=t.image,d=v===void 0?"https://zcy-gov-open-doc.oss-cn-north-2-gov-1.aliyuncs.com/1024FPA/null/20257/55c6bb72-398c-4dd7-8527-35d87fcaf8e7.jpg":v,E=G()(t,H);return(0,r.jsxs)("div",I()(I()({className:j()(i,y)},E),{},{children:[(0,r.jsx)("div",{className:"".concat(i,"-image"),children:typeof d=="string"?(0,r.jsx)("img",{src:d,style:s}):d}),(0,r.jsx)("div",{className:"".concat(i,"-description"),children:l||"\u6682\u65E0\u6570\u636E"})]}))},D=J,M=function(t){return(0,r.jsx)("h4",{children:t.title})},b=M,A="".concat("kawhi","-icon"),U=function(t){var y=t.type,l=t.style,s=t.className,v=t.spin;return(0,r.jsx)("i",{className:j()(A,s,"iconfont ".concat(y),c()({},"".concat(A,"-spin"),v)),style:l})},$=U,N="".concat("kawhi","-spin"),K=function(t){var y=t.spinning,l=t.children,s=t.size,v=s===void 0?"default":s,d=t.indicator,E=t.style,B=t.tip;return(0,r.jsxs)("div",{className:N,children:[l,y&&(0,r.jsx)("div",{className:j()("".concat(N,"-overlay")),children:d||(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($,{type:"icon-kawhi-loading",className:"".concat(N,"-size-").concat(v),style:E,spin:!0}),(0,r.jsx)("span",{className:"".concat(N,"-tip"),children:B})]})})]})},O=K,F=e(5574),X=e.n(F),Y=e(6439),g="".concat("kawhi","-tour"),q=function(t){var y=t.open,l=t.onClose,s=t.steps,v=t.className,d=t.zIndex,E=(0,R.useState)(0),B=X()(E,2),p=B[0],W=B[1],k=function(){W(0),l()};return(0,r.jsx)(Y.Z,{open:y,defaultCurrent:0,current:p,steps:s,className:"kawhi-tour",renderPanel:function(L,_){var te=L.placement;return(0,r.jsxs)("div",{className:j()("".concat(g,"-content"),v),children:[(0,r.jsx)("div",{className:"".concat(g,"-content-arrow-placement-").concat(te)}),(0,r.jsx)("div",{className:"".concat(g,"-content-title"),children:L.title}),(0,r.jsx)("div",{className:"".concat(g,"-content-description"),children:L.description}),(0,r.jsxs)("div",{className:"".concat(g,"-content-footer"),children:[(0,r.jsxs)("div",{className:"".concat(g,"-content-footer-ratio"),children:[(0,r.jsx)("span",{className:"".concat(g,"-content-footer-current"),children:(L.current||0)+1}),(0,r.jsxs)("span",{className:"".concat(g,"-content-footer-total"),children:["\xA0/\xA0",L.total]})]}),p<(s==null?void 0:s.length)-1&&(0,r.jsx)("span",{className:"".concat(g,"-content-footer-skip"),onClick:k,children:"\u8DF3\u8FC7"}),p>0&&(0,r.jsx)(o,{size:"small",className:"".concat(g,"-content-footer-prev"),onClick:function(){return W(p-1)},children:"\u4E0A\u4E00\u6B65"}),p<(s==null?void 0:s.length)-1&&(0,r.jsx)(o,{type:"primary",size:"small",className:"".concat(g,"-content-footer-next"),onClick:function(){return W(p+1)},children:"\u4E0B\u4E00\u6B65"}),p===(s==null?void 0:s.length)-1&&(0,r.jsx)(o,{type:"primary",size:"small",className:"".concat(g,"-content-footer-next"),onClick:k,children:"\u7ED3\u675F\u5F15\u5BFC"})]})]})},zIndex:d})},ee=q},465:function(V,T,e){e.r(T),e.d(T,{texts:function(){return P}});const P=[{value:"\u6F2B\u6E38\u5F0F\u5F15\u5BFC",paraId:0,tocIndex:0}]}}]);
