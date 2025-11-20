"use strict";(self.webpackChunkkawhi_ui=self.webpackChunkkawhi_ui||[]).push([[461],{14361:function(S,g,n){var B;n.r(g),n.d(g,{demos:function(){return T}});var z=n(15009),d=n.n(z),R=n(99289),P=n.n(R),l=n(67294),C=n(42340),T={"button-demo-0":{component:l.memo(l.lazy(P()(d()().mark(function e(){var u,o,s,t,m;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(n.bind(n,42340));case 2:return u=i.sent,o=u.Button,i.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return s=i.sent,t=s.default,m=function(){return t.createElement("div",null,t.createElement(o,{type:"primary"},"Primary Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,null,"Default Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"dashed"},"Dashed Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"text"},"Text Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"link"},"Link Button"))},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},e)})))),asset:{type:"BLOCK",id:"button-demo-0",refAtomIds:["Button"],dependencies:{"index.jsx":{type:"FILE",value:`import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      \xA0\xA0\xA0\xA0
      <Button>Default Button</Button>\xA0\xA0\xA0\xA0
      <Button type="dashed">Dashed Button</Button>
      \xA0\xA0\xA0\xA0
      <Button type="text">Text Button</Button>
      \xA0\xA0\xA0\xA0
      <Button type="link">Link Button</Button>
    </div>
  );
};

export default Index;`},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"kawhi-ui":C,react:B||(B=n.t(l,2))},renderOpts:{compile:function(){var e=P()(d()().mark(function o(){var s,t=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return e.apply(this,arguments)}return u}()}},"button-demo-1":{component:l.memo(l.lazy(P()(d()().mark(function e(){var u,o,s,t,m;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(n.bind(n,42340));case 2:return u=i.sent,o=u.Button,i.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return s=i.sent,t=s.default,m=function(){return t.createElement("div",null,t.createElement(o,{type:"primary",size:"small"},"small Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"primary",size:"default"},"default Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"primary",size:"large"},"large Button"))},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},e)})))),asset:{type:"BLOCK",id:"button-demo-1",refAtomIds:["Button"],dependencies:{"index.jsx":{type:"FILE",value:`import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary" size="small">
        small Button
      </Button>
      \xA0\xA0\xA0\xA0
      <Button type="primary" size="default">
        default Button
      </Button>
      \xA0\xA0\xA0\xA0
      <Button type="primary" size="large">
        large Button
      </Button>
    </div>
  );
};

export default Index;`},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"kawhi-ui":C,react:B||(B=n.t(l,2))},renderOpts:{compile:function(){var e=P()(d()().mark(function o(){var s,t=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return e.apply(this,arguments)}return u}()}},"button-demo-2":{component:l.memo(l.lazy(P()(d()().mark(function e(){var u,o,s,t,m;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(n.bind(n,42340));case 2:return u=i.sent,o=u.Button,i.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return s=i.sent,t=s.default,m=function(){return t.createElement("div",null,t.createElement(o,{type:"primary",icon:t.createElement("i",{className:"iconfont icon-kawhi-icon-sousuo"}),iconPosition:"start"},"start Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"primary",icon:t.createElement("i",{className:"iconfont icon-kawhi-icon-sousuo"}),iconPosition:"end"},"end Button"),"\xA0\xA0\xA0\xA0",t.createElement(o,{type:"primary",icon:t.createElement("i",{className:"iconfont icon-kawhi-icon-sousuo"}),iconPosition:"end"}))},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},e)})))),asset:{type:"BLOCK",id:"button-demo-2",refAtomIds:["Button"],dependencies:{"index.jsx":{type:"FILE",value:`import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="start"
      >
        start Button
      </Button>
      \xA0\xA0\xA0\xA0
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="end"
      >
        end Button
      </Button>
      \xA0\xA0\xA0\xA0
      <Button
        type="primary"
        icon={<i className="iconfont icon-kawhi-icon-sousuo" />}
        iconPosition="end"
      ></Button>
    </div>
  );
};

export default Index;`},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"kawhi-ui":C,react:B||(B=n.t(l,2))},renderOpts:{compile:function(){var e=P()(d()().mark(function o(){var s,t=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return e.apply(this,arguments)}return u}()}},"button-demo-3":{component:l.memo(l.lazy(P()(d()().mark(function e(){var u,o,s,t,m;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(n.bind(n,42340));case 2:return u=i.sent,o=u.Button,i.next=6,Promise.resolve().then(n.t.bind(n,67294,19));case 6:return s=i.sent,t=s.default,m=function(){return t.createElement("div",null,t.createElement(o,{type:"primary",disabled:!0},"disabled Button"))},i.abrupt("return",{default:m});case 10:case"end":return i.stop()}},e)})))),asset:{type:"BLOCK",id:"button-demo-3",refAtomIds:["Button"],dependencies:{"index.jsx":{type:"FILE",value:`import { Button } from 'kawhi-ui';
import React from 'react';
const Index = () => {
  return (
    <div>
      <Button type="primary" disabled>
        disabled Button
      </Button>
    </div>
  );
};

export default Index;`},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"kawhi-ui":C,react:B||(B=n.t(l,2))},renderOpts:{compile:function(){var e=P()(d()().mark(function o(){var s,t=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,t));case 3:case"end":return a.stop()}},o)}));function u(){return e.apply(this,arguments)}return u}()}}}},42340:function(S,g,n){n.r(g),n.d(g,{Button:function(){return t},Divider:function(){return w},Empty:function(){return G},Foo:function(){return H},Icon:function(){return K},Spin:function(){return V},Tour:function(){return nn}});var B=n(97857),z=n.n(B),d=n(13769),R=n.n(d),P=n(93967),l=n.n(P),C=n(67294),T={start:"start",end:"end"},e=n(85893),u=["type","children","size","icon","disabled","iconPosition","className"],o="".concat("kawhi","-button"),s=(0,C.forwardRef)(function(f,r){var E=f.type,v=E===void 0?"default":E,c=f.children,y=f.size,p=y===void 0?"default":y,N=f.icon,I=f.disabled,h=I===void 0?!1:I,$=f.iconPosition,M=f.className,F=R()(f,u),D=(0,C.useMemo)(function(){var O=l()(o,"".concat(o,"-type-").concat(v),"".concat(o,"-size-").concat(p));return h&&(O=l()(O,"".concat(o,"-disabled"))),M&&(O=l()(O,M)),O},[v,p,h,M]);return(0,e.jsxs)("button",z()(z()({type:"button",className:D,disabled:h,ref:r},F),{},{children:[N&&$===T.start&&N,c,N&&$===T.end&&N]}))}),t=s,m=n(9783),a=n.n(m),i=["dashed","children","orientation","size","className","type"],j="".concat("kawhi","-divider"),U=function(r){var E=r.dashed,v=r.children,c=r.orientation,y=c===void 0?"center":c,p=r.size,N=r.className,I=r.type,h=R()(r,i);return(0,e.jsx)("div",z()(z()({className:l()(j,a()(a()(a()(a()({},"".concat(j,"-dashed"),E),"".concat(j,"-with-text"),!!v),"".concat(j,"-size-").concat(p),!!p),"".concat(j,"-type-").concat(I),!!I),"".concat(j,"-with-text-").concat(y),N)},h),{},{children:v&&(0,e.jsx)("span",{className:"".concat(j,"-inner-text"),children:v})}))},w=U,W=["className","description","imageStyle","image"],L="".concat("kawhi","-empty"),k=function(r){var E=r.className,v=r.description,c=r.imageStyle,y=r.image,p=y===void 0?"https://zcy-gov-open-doc.oss-cn-north-2-gov-1.aliyuncs.com/1024FPA/null/20257/55c6bb72-398c-4dd7-8527-35d87fcaf8e7.jpg":y,N=R()(r,W);return(0,e.jsxs)("div",z()(z()({className:l()(L,E)},N),{},{children:[(0,e.jsx)("div",{className:"".concat(L,"-image"),children:typeof p=="string"?(0,e.jsx)("img",{src:p,style:c}):p}),(0,e.jsx)("div",{className:"".concat(L,"-description"),children:v||"\u6682\u65E0\u6570\u636E"})]}))},G=k,Z=function(r){return(0,e.jsx)("h4",{children:r.title})},H=Z,b="".concat("kawhi","-icon"),J=function(r){var E=r.type,v=r.style,c=r.className,y=r.spin;return(0,e.jsx)("i",{className:l()(b,c,"iconfont ".concat(E),a()({},"".concat(b,"-spin"),y)),style:v})},K=J,A="".concat("kawhi","-spin"),Q=function(r){var E=r.spinning,v=r.children,c=r.size,y=c===void 0?"default":c,p=r.indicator,N=r.style,I=r.tip;return(0,e.jsxs)("div",{className:A,children:[v,E&&(0,e.jsx)("div",{className:l()("".concat(A,"-overlay")),children:p||(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(K,{type:"icon-kawhi-loading",className:"".concat(A,"-size-").concat(y),style:N,spin:!0}),(0,e.jsx)("span",{className:"".concat(A,"-tip"),children:I})]})})]})},V=Q,X=n(5574),Y=n.n(X),q=n(6439),x="".concat("kawhi","-tour"),_=function(r){var E=r.open,v=r.onClose,c=r.steps,y=r.className,p=r.zIndex,N=(0,C.useState)(0),I=Y()(N,2),h=I[0],$=I[1],M=function(){$(0),v()};return(0,e.jsx)(q.Z,{open:E,defaultCurrent:0,current:h,steps:c,className:"kawhi-tour",renderPanel:function(D,O){var en=D.placement;return(0,e.jsxs)("div",{className:l()("".concat(x,"-content"),y),children:[(0,e.jsx)("div",{className:"".concat(x,"-content-arrow-placement-").concat(en)}),(0,e.jsx)("div",{className:"".concat(x,"-content-title"),children:D.title}),(0,e.jsx)("div",{className:"".concat(x,"-content-description"),children:D.description}),(0,e.jsxs)("div",{className:"".concat(x,"-content-footer"),children:[(0,e.jsxs)("div",{className:"".concat(x,"-content-footer-ratio"),children:[(0,e.jsx)("span",{className:"".concat(x,"-content-footer-current"),children:(D.current||0)+1}),(0,e.jsxs)("span",{className:"".concat(x,"-content-footer-total"),children:["\xA0/\xA0",D.total]})]}),h<(c==null?void 0:c.length)-1&&(0,e.jsx)("span",{className:"".concat(x,"-content-footer-skip"),onClick:M,children:"\u8DF3\u8FC7"}),h>0&&(0,e.jsx)(t,{size:"small",className:"".concat(x,"-content-footer-prev"),onClick:function(){return $(h-1)},children:"\u4E0A\u4E00\u6B65"}),h<(c==null?void 0:c.length)-1&&(0,e.jsx)(t,{type:"primary",size:"small",className:"".concat(x,"-content-footer-next"),onClick:function(){return $(h+1)},children:"\u4E0B\u4E00\u6B65"}),h===(c==null?void 0:c.length)-1&&(0,e.jsx)(t,{type:"primary",size:"small",className:"".concat(x,"-content-footer-next"),onClick:M,children:"\u7ED3\u675F\u5F15\u5BFC"})]})]})},zIndex:p})},nn=_},73120:function(S,g,n){n.r(g),n.d(g,{texts:function(){return B}});const B=[{value:"\u6309\u94AE",paraId:0,tocIndex:0}]}}]);
