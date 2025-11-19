"use strict";(self.webpackChunkkawhi_ui=self.webpackChunkkawhi_ui||[]).push([[31],{41654:function(E,t,n){var m;n.r(t),n.d(t,{demos:function(){return I}});var v=n(15009),_=n.n(v),N=n(99289),M=n.n(N),h=n(67294),w=n(20640),b=n.n(w),e=n(42340),P=n(44111),I={"icon-demo-index-type":{component:h.memo(h.lazy(function(){return n.e(12).then(n.bind(n,46332))})),asset:{type:"BLOCK",id:"icon-demo-index-type",refAtomIds:["Icon"],dependencies:{"index.tsx":{type:"FILE",value:n(44432).Z},"copy-to-clipboard":{type:"NPM",value:"3.3.3"},"kawhi-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},"./index-type.less":{type:"FILE",value:n(15285).Z}},entry:"index.tsx"},context:{"./index-type.less":P,"copy-to-clipboard":w,"kawhi-ui":e,react:m||(m=n.t(h,2)),"/Users/zcy1/code_self/kawhi-ui/test/Icon/index-type.less":P},renderOpts:{compile:function(){var O=M()(_()().mark(function B(){var f,T=arguments;return _()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,n.e(335).then(n.bind(n,37335));case 2:return x.abrupt("return",(f=x.sent).default.apply(f,T));case 3:case"end":return x.stop()}},B)}));function g(){return O.apply(this,arguments)}return g}()}}}},42340:function(E,t,n){n.r(t),n.d(t,{Button:function(){return g},Divider:function(){return L},Empty:function(){return $},Foo:function(){return G},Icon:function(){return F},Spin:function(){return Q},Tour:function(){return nn}});var m=n(97857),v=n.n(m),_=n(13769),N=n.n(_),M=n(93967),h=n.n(M),w=n(67294),b={start:"start",end:"end"},e=n(85893),P=["type","children","size","icon","disabled","iconPosition","className"],I="".concat("kawhi","-button"),O=(0,w.forwardRef)(function(c,i){var r=c.type,a=r===void 0?"default":r,o=c.children,d=c.size,l=d===void 0?"default":d,y=c.icon,p=c.disabled,s=p===void 0?!1:p,z=c.iconPosition,j=c.className,U=N()(c,P),C=(0,w.useMemo)(function(){var S=h()(I,"".concat(I,"-type-").concat(a),"".concat(I,"-size-").concat(l));return s&&(S=h()(S,"".concat(I,"-disabled"))),j&&(S=h()(S,j)),S},[a,l,s,j]);return(0,e.jsxs)("button",v()(v()({type:"button",className:C,disabled:s,ref:i},U),{},{children:[y&&z===b.start&&y,o,y&&z===b.end&&y]}))}),g=O,B=n(9783),f=n.n(B),T=["dashed","children","orientation","size","className","type"],k="".concat("kawhi","-divider"),x=function(i){var r=i.dashed,a=i.children,o=i.orientation,d=o===void 0?"center":o,l=i.size,y=i.className,p=i.type,s=N()(i,T);return(0,e.jsx)("div",v()(v()({className:h()(k,f()(f()(f()(f()({},"".concat(k,"-dashed"),r),"".concat(k,"-with-text"),!!a),"".concat(k,"-size-").concat(l),!!l),"".concat(k,"-type-").concat(p),!!p),"".concat(k,"-with-text-").concat(d),y)},s),{},{children:a&&(0,e.jsx)("span",{className:"".concat(k,"-inner-text"),children:a})}))},L=x,W=["className","description","imageStyle","image"],A="".concat("kawhi","-empty"),K=function(i){var r=i.className,a=i.description,o=i.imageStyle,d=i.image,l=d===void 0?"https://zcy-gov-open-doc.oss-cn-north-2-gov-1.aliyuncs.com/1024FPA/null/20257/55c6bb72-398c-4dd7-8527-35d87fcaf8e7.jpg":d,y=N()(i,W);return(0,e.jsxs)("div",v()(v()({className:h()(A,r)},y),{},{children:[(0,e.jsx)("div",{className:"".concat(A,"-image"),children:typeof l=="string"?(0,e.jsx)("img",{src:l,style:o}):l}),(0,e.jsx)("div",{className:"".concat(A,"-description"),children:a||"\u6682\u65E0\u6570\u636E"})]}))},$=K,Z=function(i){return(0,e.jsx)("h4",{children:i.title})},G=Z,R="".concat("kawhi","-icon"),H=function(i){var r=i.type,a=i.style,o=i.className,d=i.spin;return(0,e.jsx)("i",{className:h()(R,o,"iconfont ".concat(r),f()({},"".concat(R,"-spin"),d)),style:a})},F=H,D="".concat("kawhi","-spin"),J=function(i){var r=i.spinning,a=i.children,o=i.size,d=o===void 0?"default":o,l=i.indicator,y=i.style,p=i.tip;return(0,e.jsxs)("div",{className:D,children:[a,r&&(0,e.jsx)("div",{className:h()("".concat(D,"-overlay")),children:l||(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(F,{type:"icon-kawhi-loading",className:"".concat(D,"-size-").concat(d),style:y,spin:!0}),(0,e.jsx)("span",{className:"".concat(D,"-tip"),children:p})]})})]})},Q=J,V=n(5574),X=n.n(V),Y=n(6439),u="".concat("kawhi","-tour"),q=function(i){var r=i.open,a=i.onClose,o=i.steps,d=i.className,l=i.zIndex,y=(0,w.useState)(0),p=X()(y,2),s=p[0],z=p[1],j=function(){z(0),a()};return(0,e.jsx)(Y.Z,{open:r,defaultCurrent:0,current:s,steps:o,className:"kawhi-tour",renderPanel:function(C,S){var en=C.placement;return(0,e.jsxs)("div",{className:h()("".concat(u,"-content"),d),children:[(0,e.jsx)("div",{className:"".concat(u,"-content-arrow-placement-").concat(en)}),(0,e.jsx)("div",{className:"".concat(u,"-content-title"),children:C.title}),(0,e.jsx)("div",{className:"".concat(u,"-content-description"),children:C.description}),(0,e.jsxs)("div",{className:"".concat(u,"-content-footer"),children:[(0,e.jsxs)("div",{className:"".concat(u,"-content-footer-ratio"),children:[(0,e.jsx)("span",{className:"".concat(u,"-content-footer-current"),children:(C.current||0)+1}),(0,e.jsxs)("span",{className:"".concat(u,"-content-footer-total"),children:["\xA0/\xA0",C.total]})]}),s<(o==null?void 0:o.length)-1&&(0,e.jsx)("span",{className:"".concat(u,"-content-footer-skip"),onClick:j,children:"\u8DF3\u8FC7"}),s>0&&(0,e.jsx)(g,{size:"small",className:"".concat(u,"-content-footer-prev"),onClick:function(){return z(s-1)},children:"\u4E0A\u4E00\u6B65"}),s<(o==null?void 0:o.length)-1&&(0,e.jsx)(g,{type:"primary",size:"small",className:"".concat(u,"-content-footer-next"),onClick:function(){return z(s+1)},children:"\u4E0B\u4E00\u6B65"}),s===(o==null?void 0:o.length)-1&&(0,e.jsx)(g,{type:"primary",size:"small",className:"".concat(u,"-content-footer-next"),onClick:j,children:"\u7ED3\u675F\u5F15\u5BFC"})]})]})},zIndex:l})},nn=q},44111:function(E,t,n){n.r(t)},34965:function(E,t,n){n.r(t),n.d(t,{texts:function(){return m}});const m=[{value:"\u56FE\u6807",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"type",paraId:1,tocIndex:2},{value:"icon\u6837\u5F0F",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"className",paraId:1,tocIndex:2},{value:"class\u540D\u79F0",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"style",paraId:1,tocIndex:2},{value:"\u6837\u5F0F",paraId:1,tocIndex:2},{value:"CSSProperties",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"spin",paraId:1,tocIndex:2},{value:"\u65CB\u8F6C",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2}]},15285:function(E,t){t.Z=`.icon-type-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;

    &:hover {
      background: #f5f5f5;
      border-radius: 50%;
    }
  }

  .cuowu {
    color: red;
  }
}
`},44432:function(E,t){t.Z=`import copy from 'copy-to-clipboard';
import { Icon } from 'kawhi-ui';
import React from 'react';
import './index-type.less';
const Index = () => {
  const handleCopy = (text: string) => {
    copy(text, {
      onCopy: () => {
        alert(\`\u590D\u5236\u6210\u529F: \${text}\`);
      },
    });
  };

  return (
    <div className="icon-type-content">
      <div onClick={() => handleCopy('icon-kawhi-cuowu')}>
        <Icon
          type="icon-kawhi-cuowu"
          style={{ fontSize: '40px' }}
          className="cuowu"
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wenhao-yuanquan')}>
        <Icon type="icon-kawhi-wenhao-yuanquan" style={{ fontSize: '40px' }} />
      </div>

      <div onClick={() => handleCopy('icon-kawhi-cuowu-yuanquan')}>
        <Icon type="icon-kawhi-cuowu-yuanquan" style={{ fontSize: '40px' }} />
      </div>

      <div onClick={() => handleCopy('icon-kawhi-daoru')}>
        <Icon type="icon-kawhi-daoru" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-baocun')}>
        <Icon type="icon-kawhi-baocun" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chengyuan')}>
        <Icon type="icon-kawhi-chengyuan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jianqu')}>
        <Icon type="icon-kawhi-jianqu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wenjianjia-dakai')}>
        <Icon type="icon-kawhi-wenjianjia-dakai" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-biyan')}>
        <Icon type="icon-kawhi-biyan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chuangjianduihua')}>
        <Icon type="icon-kawhi-chuangjianduihua" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-daochu')}>
        <Icon type="icon-kawhi-daochu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chaojijisuan')}>
        <Icon type="icon-kawhi-chaojijisuan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wenhao')}>
        <Icon type="icon-kawhi-wenhao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-gaojigongneng')}>
        <Icon type="icon-kawhi-gaojigongneng" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-chaosuanshili')}>
        <Icon type="icon-kawhi-chaosuanshili" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-gouwuche')}>
        <Icon type="icon-kawhi-gouwuche" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fenbushi')}>
        <Icon type="icon-kawhi-fenbushi" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jianshao-yuanquan')}>
        <Icon
          type="icon-kawhi-jianshao-yuanquan"
          style={{ fontSize: '40px' }}
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fanghuxiaoguoyanzheng')}>
        <Icon
          type="icon-kawhi-fanghuxiaoguoyanzheng"
          style={{ fontSize: '40px' }}
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-dingzhiluojinshu')}>
        <Icon type="icon-kawhi-dingzhiluojinshu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wangluo')}>
        <Icon type="icon-kawhi-wangluo" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fenxiang')}>
        <Icon type="icon-kawhi-fenxiang" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fujian')}>
        <Icon type="icon-kawhi-fujian" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jiandao')}>
        <Icon type="icon-kawhi-jiandao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-guzhang')}>
        <Icon type="icon-kawhi-guzhang" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-qiehuan2')}>
        <Icon type="icon-kawhi-a-qiehuan2" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fuwu')}>
        <Icon type="icon-kawhi-fuwu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fanghujilu')}>
        <Icon type="icon-kawhi-fanghujilu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fasong2')}>
        <Icon type="icon-kawhi-a-fasong2" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-quanping')}>
        <Icon type="icon-kawhi-quanping" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-wendang')}>
        <Icon type="icon-kawhi-wendang" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-a-renyuanzhanghaoguanli')}>
        <Icon
          type="icon-kawhi-a-renyuanzhanghaoguanli"
          style={{ fontSize: '40px' }}
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-moxingcangku')}>
        <Icon type="icon-kawhi-moxingcangku" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-fuzhi')}>
        <Icon type="icon-kawhi-fuzhi" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-kefu')}>
        <Icon type="icon-kawhi-kefu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-rili')}>
        <Icon type="icon-kawhi-rili" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-qiehuanbiaoge')}>
        <Icon type="icon-kawhi-qiehuanbiaoge" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shouye')}>
        <Icon type="icon-kawhi-shouye" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-jifeishuoming')}>
        <Icon type="icon-kawhi-jifeishuoming" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-renyuanguanli')}>
        <Icon type="icon-kawhi-renyuanguanli" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-moxingweitiao')}>
        <Icon type="icon-kawhi-moxingweitiao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-saomiao')}>
        <Icon type="icon-kawhi-saomiao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shenglvehao')}>
        <Icon type="icon-kawhi-shenglvehao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-feiyong')}>
        <Icon type="icon-kawhi-feiyong" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-tianjia-yuanquan')}>
        <Icon type="icon-kawhi-tianjia-yuanquan" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-paixu')}>
        <Icon type="icon-kawhi-paixu" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-paizhao')}>
        <Icon type="icon-kawhi-paizhao" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shujuji')}>
        <Icon type="icon-kawhi-shujuji" style={{ fontSize: '40px' }} />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-loudou')}>
        <Icon type="icon-kawhi-loudou" style={{ fontSize: '40px' }} spin />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-loading')}>
        <Icon
          type="icon-kawhi-loading"
          style={{ fontSize: '40px', color: 'blue' }}
          spin
        />
      </div>
      <div onClick={() => handleCopy('icon-kawhi-shili')}>
        <Icon type="icon-kawhi-shili" style={{ fontSize: '40px' }} spin />
      </div>
    </div>
  );
};

export default Index;
`}}]);
