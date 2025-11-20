"use strict";(self.webpackChunkkawhi_ui=self.webpackChunkkawhi_ui||[]).push([[812],{84607:function(E,o,n){var r;n.r(o),n.d(o,{demos:function(){return A}});var j=n(15009),h=n.n(j),B=n(99289),z=n.n(B),i=n(67294),S=n(42340),A={"spin-demo-index-spinning":{component:i.memo(i.lazy(function(){return n.e(362).then(n.bind(n,87692))})),asset:{type:"BLOCK",id:"spin-demo-index-spinning",refAtomIds:["Spin"],dependencies:{"index.tsx":{type:"FILE",value:n(95227).Z},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"kawhi-ui":S,react:r||(r=n.t(i,2))},renderOpts:{compile:function(){var t=z()(h()().mark(function l(){var c,u=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,u));case 3:case"end":return e.stop()}},l)}));function g(){return t.apply(this,arguments)}return g}()}},"spin-demo-index-size":{component:i.memo(i.lazy(function(){return n.e(362).then(n.bind(n,12924))})),asset:{type:"BLOCK",id:"spin-demo-index-size",refAtomIds:["Spin"],dependencies:{"index.tsx":{type:"FILE",value:n(60238).Z},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"kawhi-ui":S,react:r||(r=n.t(i,2))},renderOpts:{compile:function(){var t=z()(h()().mark(function l(){var c,u=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,u));case 3:case"end":return e.stop()}},l)}));function g(){return t.apply(this,arguments)}return g}()}},"spin-demo-index-indicator":{component:i.memo(i.lazy(function(){return n.e(362).then(n.bind(n,69738))})),asset:{type:"BLOCK",id:"spin-demo-index-indicator",refAtomIds:["Spin"],dependencies:{"index.tsx":{type:"FILE",value:n(19454).Z},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"kawhi-ui":S,react:r||(r=n.t(i,2))},renderOpts:{compile:function(){var t=z()(h()().mark(function l(){var c,u=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,u));case 3:case"end":return e.stop()}},l)}));function g(){return t.apply(this,arguments)}return g}()}},"spin-demo-index-children":{component:i.memo(i.lazy(function(){return n.e(362).then(n.bind(n,65313))})),asset:{type:"BLOCK",id:"spin-demo-index-children",refAtomIds:["Spin"],dependencies:{"index.tsx":{type:"FILE",value:n(74693).Z},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"kawhi-ui":S,react:r||(r=n.t(i,2))},renderOpts:{compile:function(){var t=z()(h()().mark(function l(){var c,u=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,u));case 3:case"end":return e.stop()}},l)}));function g(){return t.apply(this,arguments)}return g}()}},"spin-demo-index-tip":{component:i.memo(i.lazy(function(){return n.e(362).then(n.bind(n,30028))})),asset:{type:"BLOCK",id:"spin-demo-index-tip",refAtomIds:["Spin"],dependencies:{"index.tsx":{type:"FILE",value:n(4267).Z},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"kawhi-ui":S,react:r||(r=n.t(i,2))},renderOpts:{compile:function(){var t=z()(h()().mark(function l(){var c,u=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,u));case 3:case"end":return e.stop()}},l)}));function g(){return t.apply(this,arguments)}return g}()}}}},42340:function(E,o,n){n.r(o),n.d(o,{Button:function(){return u},Divider:function(){return Z},Empty:function(){return w},Foo:function(){return J},Icon:function(){return $},Spin:function(){return X},Tour:function(){return nn}});var r=n(97857),j=n.n(r),h=n(13769),B=n.n(h),z=n(93967),i=n.n(z),S=n(67294),A={start:"start",end:"end"},t=n(85893),g=["type","children","size","icon","disabled","iconPosition","className"],l="".concat("kawhi","-button"),c=(0,S.forwardRef)(function(p,a){var I=p.type,d=I===void 0?"default":I,s=p.children,v=p.size,m=v===void 0?"default":v,y=p.icon,N=p.disabled,f=N===void 0?!1:N,b=p.iconPosition,O=p.className,F=B()(p,g),P=(0,S.useMemo)(function(){var D=i()(l,"".concat(l,"-type-").concat(d),"".concat(l,"-size-").concat(m));return f&&(D=i()(D,"".concat(l,"-disabled"))),O&&(D=i()(D,O)),D},[d,m,f,O]);return(0,t.jsxs)("button",j()(j()({type:"button",className:P,disabled:f,ref:a},F),{},{children:[y&&b===A.start&&y,s,y&&b===A.end&&y]}))}),u=c,M=n(9783),e=n.n(M),K=["dashed","children","orientation","size","className","type"],C="".concat("kawhi","-divider"),U=function(a){var I=a.dashed,d=a.children,s=a.orientation,v=s===void 0?"center":s,m=a.size,y=a.className,N=a.type,f=B()(a,K);return(0,t.jsx)("div",j()(j()({className:i()(C,e()(e()(e()(e()({},"".concat(C,"-dashed"),I),"".concat(C,"-with-text"),!!d),"".concat(C,"-size-").concat(m),!!m),"".concat(C,"-type-").concat(N),!!N),"".concat(C,"-with-text-").concat(v),y)},f),{},{children:d&&(0,t.jsx)("span",{className:"".concat(C,"-inner-text"),children:d})}))},Z=U,W=["className","description","imageStyle","image"],R="".concat("kawhi","-empty"),G=function(a){var I=a.className,d=a.description,s=a.imageStyle,v=a.image,m=v===void 0?"https://zcy-gov-open-doc.oss-cn-north-2-gov-1.aliyuncs.com/1024FPA/null/20257/55c6bb72-398c-4dd7-8527-35d87fcaf8e7.jpg":v,y=B()(a,W);return(0,t.jsxs)("div",j()(j()({className:i()(R,I)},y),{},{children:[(0,t.jsx)("div",{className:"".concat(R,"-image"),children:typeof m=="string"?(0,t.jsx)("img",{src:m,style:s}):m}),(0,t.jsx)("div",{className:"".concat(R,"-description"),children:d||"\u6682\u65E0\u6570\u636E"})]}))},w=G,H=function(a){return(0,t.jsx)("h4",{children:a.title})},J=H,T="".concat("kawhi","-icon"),Q=function(a){var I=a.type,d=a.style,s=a.className,v=a.spin;return(0,t.jsx)("i",{className:i()(T,s,"iconfont ".concat(I),e()({},"".concat(T,"-spin"),v)),style:d})},$=Q,L="".concat("kawhi","-spin"),V=function(a){var I=a.spinning,d=a.children,s=a.size,v=s===void 0?"default":s,m=a.indicator,y=a.style,N=a.tip;return(0,t.jsxs)("div",{className:L,children:[d,I&&(0,t.jsx)("div",{className:i()("".concat(L,"-overlay")),children:m||(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($,{type:"icon-kawhi-loading",className:"".concat(L,"-size-").concat(v),style:y,spin:!0}),(0,t.jsx)("span",{className:"".concat(L,"-tip"),children:N})]})})]})},X=V,Y=n(5574),k=n.n(Y),q=n(6439),x="".concat("kawhi","-tour"),_=function(a){var I=a.open,d=a.onClose,s=a.steps,v=a.className,m=a.zIndex,y=(0,S.useState)(0),N=k()(y,2),f=N[0],b=N[1],O=function(){b(0),d()};return(0,t.jsx)(q.Z,{open:I,defaultCurrent:0,current:f,steps:s,className:"kawhi-tour",renderPanel:function(P,D){var en=P.placement;return(0,t.jsxs)("div",{className:i()("".concat(x,"-content"),v),children:[(0,t.jsx)("div",{className:"".concat(x,"-content-arrow-placement-").concat(en)}),(0,t.jsx)("div",{className:"".concat(x,"-content-title"),children:P.title}),(0,t.jsx)("div",{className:"".concat(x,"-content-description"),children:P.description}),(0,t.jsxs)("div",{className:"".concat(x,"-content-footer"),children:[(0,t.jsxs)("div",{className:"".concat(x,"-content-footer-ratio"),children:[(0,t.jsx)("span",{className:"".concat(x,"-content-footer-current"),children:(P.current||0)+1}),(0,t.jsxs)("span",{className:"".concat(x,"-content-footer-total"),children:["\xA0/\xA0",P.total]})]}),f<(s==null?void 0:s.length)-1&&(0,t.jsx)("span",{className:"".concat(x,"-content-footer-skip"),onClick:O,children:"\u8DF3\u8FC7"}),f>0&&(0,t.jsx)(u,{size:"small",className:"".concat(x,"-content-footer-prev"),onClick:function(){return b(f-1)},children:"\u4E0A\u4E00\u6B65"}),f<(s==null?void 0:s.length)-1&&(0,t.jsx)(u,{type:"primary",size:"small",className:"".concat(x,"-content-footer-next"),onClick:function(){return b(f+1)},children:"\u4E0B\u4E00\u6B65"}),f===(s==null?void 0:s.length)-1&&(0,t.jsx)(u,{type:"primary",size:"small",className:"".concat(x,"-content-footer-next"),onClick:O,children:"\u7ED3\u675F\u5F15\u5BFC"})]})]})},zIndex:m})},nn=_},27306:function(E,o,n){n.r(o),n.d(o,{texts:function(){return r}});const r=[{value:"\u52A0\u8F7D\u72B6\u6001",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"spinning",paraId:1,tocIndex:6},{value:"\u663E\u9690",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"loading\u533A\u57DF",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u5927\u5C0F",paraId:1,tocIndex:6},{value:"default | small | large",paraId:1,tocIndex:6},{value:"default",paraId:1,tocIndex:6},{value:"type",paraId:1,tocIndex:6},{value:"icon\u6837\u5F0F",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"indicator",paraId:1,tocIndex:6},{value:"\u6307\u793A\u5668",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"style",paraId:1,tocIndex:6},{value:"\u6837\u5F0F",paraId:1,tocIndex:6},{value:"CSSProperties",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"class\u540D\u79F0",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6}]},74693:function(E,o){o.Z=`import { Icon, Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return (
    <div>
      <Spin spinning indicator={<Icon type="icon-kawhi-loading" spin />}>
        <div style={{ width: '300px' }}>
          \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9
        </div>
        <div style={{ width: '300px' }}>
          \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9
        </div>
      </Spin>
      <div>\u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9</div>
      <div>\u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9 \u6211\u662F\u5185\u5BB9</div>
    </div>
  );
};

export default Index;
`},19454:function(E,o){o.Z=`import { Icon, Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return (
    <div>
      <Spin spinning indicator={<Icon type="icon-kawhi-biyan" spin />}></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin
        spinning
        indicator={<Icon type="icon-kawhi-chuangjianduihua" spin />}
      ></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin spinning indicator={<Icon type="icon-kawhi-daochu" spin />}></Spin>
    </div>
  );
};

export default Index;
`},60238:function(E,o){o.Z=`import { Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return (
    <div>
      <Spin spinning size="small"></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin spinning size="default"></Spin>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Spin spinning size="large"></Spin>
    </div>
  );
};

export default Index;
`},95227:function(E,o){o.Z=`import { Spin } from 'kawhi-ui';
import React from 'react';

const Index = () => {
  return <Spin spinning></Spin>;
};

export default Index;
`},4267:function(E,o){o.Z=`import { Spin } from 'kawhi-ui';

import React from 'react';
const Index = () => {
  return <Spin spinning size="large" tip="loading..."></Spin>;
};

export default Index;
`}}]);
