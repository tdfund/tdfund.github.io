(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[5],{762:function(e,t,n){"use strict";n(50),n(769)},763:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(7),c=n.n(i),o=n(0),l=n(4),s=n.n(l),u=n(99),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){return o.createElement(u.a,null,(function(t){var n,a=t.getPrefixCls,i=t.direction,l=e.prefixCls,u=e.type,f=void 0===u?"horizontal":u,m=e.orientation,p=void 0===m?"center":m,b=e.className,g=e.children,x=e.dashed,h=e.plain,v=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),y=a("divider",l),E=p.length>0?"-".concat(p):p,w=!!g,j=s()(y,"".concat(y,"-").concat(f),(n={},c()(n,"".concat(y,"-with-text"),w),c()(n,"".concat(y,"-with-text").concat(E),w),c()(n,"".concat(y,"-dashed"),!!x),c()(n,"".concat(y,"-plain"),!!h),c()(n,"".concat(y,"-rtl"),"rtl"===i),n),b);return o.createElement("div",r()({className:j},v,{role:"separator"}),g&&o.createElement("span",{className:"".concat(y,"-inner-text")},g))}))}},764:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(773))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},769:function(e,t,n){},770:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(771))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},771:function(e,t,n){"use strict";var a=n(60),r=n(75);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),c=a(n(772)),o=a(n(89)),l=function(e,t){return i.createElement(o.default,Object.assign({},e,{ref:t,icon:c.default}))};l.displayName="CheckOutlined";var s=i.forwardRef(l);t.default=s},772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},773:function(e,t,n){"use strict";var a=n(60),r=n(75);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),c=a(n(774)),o=a(n(89)),l=function(e,t){return i.createElement(o.default,Object.assign({},e,{ref:t,icon:c.default}))};l.displayName="CloseCircleFilled";var s=i.forwardRef(l);t.default=s},774:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"}},925:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return P})),n.d(t,"default",(function(){return P}));var a=n(223),r=(n(222),n(72)),i=(n(165),n(36)),c=(n(779),n(794)),o=(n(164),n(63)),l=(n(762),n(763)),s=n(55),u=n.n(s),d=n(81),f=n(3),m=(n(793),n(792)),p=(n(358),n(168)),b=(n(64),n(0)),g=n.n(b),x=n.p+"static/media/banner.679295d8.png",h=n(57),v=n.n(h),y=n(114),E=n.n(y),w=n(224),j=n(361),O=n.n(j),N=n(35),_=n(113);function S(){var e=Object(a.a)(["\n  .divider {\n    border-color: #000;\n    opacity: 0.8;\n    margin: 0;\n  }\n\n  .banner {\n    height: 380px;\n    background: rgb(14, 16, 20);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(",");\n    background-position: 50%;\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n  .title-wrapper {\n    color: #fff;\n    margin-top: -60px;\n    .title {\n      font-size: 36px;\n      font-family: PingFang SC;\n      font-weight: 200;\n      color: rgba(255, 255, 255, 1);\n      margin-bottom: 17px;\n      text-align: center;\n    }\n    .sub-title {\n      font-size: 16px;\n      font-family: PingFang SC;\n      font-weight: 200;\n      color: rgba(255, 255, 255, 1);\n      text-align: center;\n    }\n  }\n\n  .card {\n    max-width: 1120px;\n    width: 100%;\n    border-radius: 6px;\n    margin: -64px auto 0 auto;\n    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.03);\n    border-radius: 6px;\n    .card-left {\n      padding: 0 20px 0 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .card-right {\n      padding: 0 0 0 30px;\n      border-left: 1px solid rgba(0, 0, 0, 0.1);\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-around;\n    }\n    .details-link {\n      color: rgba(0, 0, 0, 0.45);\n    }\n  }\n\n  .more {\n    font-size: 14px;\n    font-family: PingFang SC;\n    font-weight: 400;\n    color: rgba(19, 24, 31, 1);\n    opacity: 0.6;\n    margin: 80px auto;\n    text-align: center;\n  }\n\n  .footer {\n    background: rgb(14, 16, 20);\n    text-align: center;\n    .footer-title {\n      font-size: 18px;\n      font-family: PingFang SC;\n      font-weight: 400;\n      color: rgba(255, 255, 255, 1);\n      margin: 16px auto 0 auto;\n    }\n    .footer-subtitle {\n      color: rgba(255, 255, 255, 1);\n      opacity: 0.6;\n    }\n    .bottom-card {\n      margin-top: 16px;\n      border-radius: 8px;\n    }\n    .descriptions {\n      padding: 0 20px;\n      .ant-descriptions-item-label {\n        width: auto;\n      }\n      .ant-descriptions-item-content {\n        text-align: end;\n        font-weight: bold;\n        width: auto;\n        display: inline-block;\n      }\n    }\n  }\n\n  @media (max-width: 375px) {\n    .banner {\n      background-size: cover;\n    }\n  }\n"]);return S=function(){return e},e}var C=p.a.Content,k=p.a.Footer,P=(m.a.Text,Object(w.a)((function(e){var t=e.className,n=Object(b.useState)([]),a=Object(f.a)(n,2),s=a[0],m=a[1],x=Object(b.useState)([]),h=Object(f.a)(x,2),y=h[0],w=h[1],j=Object(b.useState)(!0),S=Object(f.a)(j,2),P=S[0],M=S[1],L=Object(b.useState)({}),z=Object(f.a)(L,2),F=z[0],D=z[1],T=Object(b.useState)({}),A=Object(f.a)(T,2),B=A[0],I=A[1];Object(b.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,r,i,c,o,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([v.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/raw/btc_price.json"),v.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/all.json"),v.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/statistic.json"),v.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/metrics.json")]);case 2:t=e.sent,n=Object(f.a)(t,4),a=n[0].data,r=n[1].data,i=n[2].data,c=n[3].data,D(i),I(c),o=a[0][1],l=r.map((function(e){return[1e3*e[0],100*e[2]]})),s=a.map((function(e){return[1e3*e[0],100*(e[1]/o-1)]})),m(l),w(s),M(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var R={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),n=E.a.format.formatTime("yyyy-MM-dd hh:mm:ss",t),a=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),i=a?"".concat(Object(N.e)(a.data[1],2),"%"):"--",c=r?"".concat(Object(N.e)(r.data[1],2),"%"):"--";return"<span>".concat(n,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(i,"</span> <br/> <span>BTCUSD: ").concat(c,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?s:y;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(Object(N.d)(Object(N.e)(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:s,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"rgb(73,151,247)"}}]};return g.a.createElement(p.a,{className:t},g.a.createElement(l.a,{className:"divider"}),g.a.createElement(C,null,g.a.createElement(o.a,{className:"banner"},g.a.createElement("div",{className:"title-wrapper"},g.a.createElement("p",{className:"title"},"\u8d8b\u52bf\u4e2d\u7684\u6570\u5b57\u9ec4\u91d1"),g.a.createElement("p",{className:"sub-title"},"\u52a0\u5bc6\u8d27\u5e01CTA\u7b56\u7565"))),g.a.createElement(o.a,{className:"content"},g.a.createElement(r.a,{className:"card",title:g.a.createElement("div",{style:{display:"flex",alignItems:"center"}},g.a.createElement("span",{style:{marginRight:"20px"}},"BTC \u8d8b\u52bf\u4e00\u53f7"),g.a.createElement(c.a,{color:"default"},"\u8fd0\u884c\u4e2d")),extra:g.a.createElement("a",{href:"#/t1",className:"details-link"},"\u7b56\u7565\u8be6\u60c5 >")},g.a.createElement(o.a,{style:{padding:"0 0 20px 0"}},g.a.createElement(i.a,{sm:15,xs:24,className:"card-left"},g.a.createElement(_.a,{option:R,showLoading:P,height:240})),g.a.createElement(i.a,{sm:9,xs:24,className:"card-right"},g.a.createElement(o.a,{style:{width:"100%"}},g.a.createElement(i.a,{xs:12},g.a.createElement(_.b,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:B.strategy&&(100*B.strategy.annual_return).toFixed(2)||0,precision:2,suffix:"%",isNormal:!1})),g.a.createElement(i.a,{xs:12},g.a.createElement(_.b,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(F.timestamp?O()(1e3*F.timestamp).format("MM-DD"):"--","\uff09"),value:F.pps||0,precision:4,suffix:"USD"}))),g.a.createElement(o.a,{style:{width:"100%"}},g.a.createElement(i.a,{xs:12},g.a.createElement(_.b,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:100*F.pnl_rate||0,precision:2,suffix:"%",isNormal:!1})),g.a.createElement(i.a,{xs:12},g.a.createElement(_.b,{title:"\u6628\u65e5\u6da8\u8dcc",value:100*F.last_day_pnl_rate||0,precision:2,suffix:"%",isNormal:!1}))),g.a.createElement(o.a,{style:{width:"100%"}},g.a.createElement(i.a,{xs:12},g.a.createElement(_.b,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})),g.a.createElement(i.a,{xs:12},g.a.createElement(_.b,{title:"\u7b56\u7565\u7c7b\u578b",value:"CTA",precision:0}))))))),g.a.createElement("p",{className:"more"},"\u66f4\u591a\u4ea7\u54c1 \u656c\u8bf7\u671f\u5f85")),g.a.createElement(k,{className:"footer"}))}))(S(),x))}}]);
//# sourceMappingURL=5.a984d5ff.chunk.js.map