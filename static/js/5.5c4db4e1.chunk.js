(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[5],{214:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return l}));var n=function(e){return Number(e)>=0?"green":Number(e)<0?"red":"grey"},r=function(e){return Number(e)>=0?"+".concat(e):e},c=function(e){return Number(e)>=0},i=function(e,t){var a=e.toString(),n=a.indexOf(".");for(n<0&&(n=a.length,a+=".");a.length<=n+t;)a+="0";return a},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Math.pow(10,t);if(Number(e)>0){var n=Math.floor(Number(e)*a)/a;return i(n,t)}var r=Math.ceil(Number(e)*a)/a;return i(r,t)}},294:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return b}));a(441);var n=a(433),r=a(236),c=a(246),i=a(0),l=a.n(i),s=a(214),o=function(e){var t,a=e.title,i=void 0===a?"title":a,o=e.value,m=void 0===o?0:o,u=e.percision,d=void 0===u?2:u,p=e.isNormal,f=void 0===p||p,b=Object(c.a)(e,["title","value","percision","isNormal"]);return l.a.createElement(n.a,Object(r.a)({title:i,value:m,precision:d,valueStyle:{color:(t=f,t?"#000":m>=0?"#3f8600":"#cf1322"),fontWeight:600},prefix:!f&&Object(s.d)(m)?"+":""},b))},m=a(442),u=a(216),d=a.n(u),p=a(436),f=function(e){var t=e.className,a=void 0===t?"":t,n=e.style,s=void 0===n?{}:n,o=e.option,u=void 0===o?{}:o,f=Object(c.a)(e,["className","style","option"]),b=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=d.a.getInstanceByDom(b.current)||d.a.init(b.current);return e.setOption(u),function(){d.a.dispose(e)}}),[u,b]),Object(p.a)(b,(function(e){(d.a.getInstanceByDom(b.current)||d.a.init(b.current)).resize()})),l.a.createElement("div",Object(r.a)({ref:b,className:"react-echarts ".concat(a),style:Object(m.a)({height:"300px",width:"600px"},s)},f))},b=function(e){var t=e.option,a=e.showLoading,n=void 0===a||a,r=e.height;return l.a.createElement(f,{option:t,style:{height:r||"350px",width:"100%"},showLoading:n,loadingOption:{text:"\u52a0\u8f7d\u4e2d...",color:"rgb(74,151,247)",zlevel:0}})}},922:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return _})),a.d(t,"default",(function(){return _}));var n=a(49),r=(a(299),a(435)),c=(a(300),a(437)),i=(a(248),a(298)),l=(a(303),a(440)),s=(a(247),a(297)),o=(a(304),a(415)),m=a(305),u=a.n(m),d=a(307),p=a(434),f=(a(439),a(431)),b=(a(72),a(29)),g=a(0),x=a.n(g),E=a.p+"static/media/banner.d52daf66.webp",y=a(310),h=a.n(y),v=a(216),j=a.n(v),w=a(52),O=a(71),S=a.n(O),N=a(214),D=a(294);function I(){var e=Object(n.a)(["\n  .divider {\n    border-color: #000;\n    opacity: 0.8;\n    margin: 0;\n  }\n\n  .banner {\n    height: 380px;\n    background: #000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(",");\n    background-position: 50%;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  .title-wrapper {\n    color: #fff;\n    margin-top: -60px;\n    .title {\n      font-size: 36px;\n      font-family: PingFang SC;\n      font-weight: 200;\n      color: rgba(255, 255, 255, 1);\n      margin-bottom: 17px;\n      text-align: center;\n    }\n    .sub-title {\n      font-size: 16px;\n      font-family: PingFang SC;\n      font-weight: 200;\n      color: rgba(255, 255, 255, 1);\n      text-align: center;\n    }\n  }\n\n  .card {\n    max-width: 1120px;\n    width: 100%;\n    border-radius: 6px;\n    margin: -64px auto 0 auto;\n    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.03);\n    border-radius: 6px;\n    .card-left {\n      padding: 0 20px 0 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .card-right {\n      padding: 0 0 0 30px;\n      border-left: 1px solid rgba(0, 0, 0, 0.1);\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-around;\n    }\n    .details-link {\n      color: rgba(0, 0, 0, 0.45);\n    }\n  }\n\n  .more {\n    font-size: 14px;\n    font-family: PingFang SC;\n    font-weight: 400;\n    color: rgba(19, 24, 31, 1);\n    opacity: 0.6;\n    margin: 80px auto;\n    text-align: center;\n  }\n\n  .footer {\n    background: rgb(14, 16, 20);\n    text-align: center;\n    .footer-title {\n      font-size: 18px;\n      font-family: PingFang SC;\n      font-weight: 400;\n      color: rgba(255, 255, 255, 1);\n      margin: 16px auto 0 auto;\n    }\n    .footer-subtitle {\n      color: rgba(255, 255, 255, 1);\n      opacity: 0.6;\n    }\n    .bottom-card {\n      margin-top: 16px;\n      border-radius: 8px;\n    }\n    .descriptions {\n      padding: 0 20px;\n      .ant-descriptions-item-label {\n        width: auto;\n      }\n      .ant-descriptions-item-content {\n        text-align: end;\n        font-weight: bold;\n        width: auto;\n        display: inline-block;\n      }\n    }\n  }\n\n  @media (max-width: 375px) {\n    .banner {\n      background-size: cover;\n    }\n  }\n"]);return I=function(){return e},e}var L=b.a.Content,C=b.a.Footer,T=f.a.Text,_=Object(w.a)((function(e){var t=e.className,a=Object(g.useState)([]),n=Object(p.a)(a,2),m=n[0],f=n[1],E=Object(g.useState)([]),y=Object(p.a)(E,2),v=y[0],w=y[1],O=Object(g.useState)([]),I=Object(p.a)(O,2),_=I[0],k=I[1],A=Object(g.useState)([]),M=Object(p.a)(A,2),U=M[0],B=M[1],Y=Object(g.useState)([]),z=Object(p.a)(Y,2),F=z[0],P=z[1],R=Object(g.useState)([]),J=Object(p.a)(R,2),W=J[0],H=J[1],q=Object(g.useState)(!0),G=Object(p.a)(q,2),K=G[0],Q=G[1],V=Object(g.useState)(!0),X=Object(p.a)(V,2),Z=X[0],$=X[1],ee=Object(g.useState)(!0),te=Object(p.a)(ee,2),ae=te[0],ne=te[1],re=Object(g.useState)({}),ce=Object(p.a)(re,2),ie=ce[0],le=ce[1],se=Object(g.useState)({}),oe=Object(p.a)(se,2),me=oe[0],ue=oe[1],de=Object(g.useState)({}),pe=Object(p.a)(de,2),fe=pe[0],be=pe[1],ge=Object(g.useState)({}),xe=Object(p.a)(ge,2),Ee=xe[0],ye=xe[1],he=Object(g.useState)({}),ve=Object(p.a)(he,2),je=ve[0],we=ve[1],Oe=Object(g.useState)({}),Se=Object(p.a)(Oe,2),Ne=Se[0],De=Se[1];Object(g.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,c,i,l,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t1/raw/btc_price.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t1/all.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t1/statistic.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t1/metrics.json")]);case 2:t=e.sent,a=Object(p.a)(t,4),n=a[0].data,r=a[1].data,c=a[2].data,i=a[3].data,le(c),ue(i),l=n[0][1],s=r.map((function(e){return[1e3*e[0],100*e[2]]})),o=n.map((function(e){return[1e3*e[0],100*(e[1]/l-1)]})),f(s),w(o),Q(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,c,i,l,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t2/raw/btc_price.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t2/all.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t2/statistic.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t2/metrics.json")]);case 2:t=e.sent,a=Object(p.a)(t,4),n=a[0].data,r=a[1].data,c=a[2].data,i=a[3].data,be(c),ye(i),l=n[0][1],s=r.map((function(e){return[1e3*e[0],100*e[2]]})),o=n.map((function(e){return[1e3*e[0],100*(e[1]/l-1)]})),k(s),B(o),$(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,c,i,l,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t3/raw/btc_price.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t3/all.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t3/statistic.json"),h.a.get("https://raw.githubusercontent.com/trendfund/funds/main/t3/metrics.json")]);case 2:t=e.sent,a=Object(p.a)(t,4),n=a[0].data,r=a[1].data,c=a[2].data,i=a[3].data,we(c),De(i),l=n[0][1],s=r.map((function(e){return[1e3*e[0],100*e[2]]})),o=n.map((function(e){return[1e3*e[0],100*(e[1]/l-1)]})),P(s),H(o),ne(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Ie={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=j.a.format.formatTime("yyyy-MM-dd hh:mm:ss",t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(Object(N.c)(n.data[1],2),"%"):"--",i=r?"".concat(Object(N.c)(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(i,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?m:v;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(Object(N.b)(Object(N.c)(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:m,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#1890ff"}},{name:"BTCUSD",type:"line",data:v,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]},Le={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=j.a.format.formatTime("yyyy-MM-dd hh:mm:ss",t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(Object(N.c)(n.data[1],2),"%"):"--",i=r?"".concat(Object(N.c)(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(i,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?_:U;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(Object(N.b)(Object(N.c)(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:_,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#52c41a"}},{name:"BTCUSD",type:"line",data:U,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]},Ce={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=j.a.format.formatTime("yyyy-MM-dd hh:mm:ss",t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(Object(N.c)(n.data[1],2),"%"):"--",i=r?"".concat(Object(N.c)(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(i,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?F:W;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(Object(N.b)(Object(N.c)(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:F,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#fa541c"}},{name:"BTCUSD",type:"line",data:W,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]};return x.a.createElement(b.a,{className:t},x.a.createElement(o.a,{className:"divider"}),x.a.createElement(L,null,x.a.createElement(s.a,{className:"banner"},x.a.createElement("div",{className:"title-wrapper"},x.a.createElement("p",{className:"title"},"\u8d8b\u52bf\u4e2d\u7684\u6570\u5b57\u9ec4\u91d1"),x.a.createElement("p",{className:"sub-title"},"\u52a0\u5bc6\u8d27\u5e01CTA\u7b56\u7565"))),x.a.createElement(s.a,{className:"content"},x.a.createElement(c.a,{className:"card",title:x.a.createElement("div",{style:{display:"flex",alignItems:"center"}},x.a.createElement("span",{style:{marginRight:"20px"}},"BTC \u8d8b\u52bf\u4e09\u53f7"),x.a.createElement(l.a,{color:"volcano"},"\u79ef\u6781\u578b"),x.a.createElement(l.a,{color:"default"},"\u8fd0\u884c\u4e2d")),extra:x.a.createElement("a",{href:"#/t3",className:"details-link"},"\u7b56\u7565\u8be6\u60c5 >")},x.a.createElement(s.a,{style:{padding:"0 0 20px 0"}},x.a.createElement(i.a,{sm:15,xs:24,className:"card-left"},x.a.createElement(D.a,{option:Ce,showLoading:ae,height:240})),x.a.createElement(i.a,{sm:9,xs:24,className:"card-right"},x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:Ne.strategy&&(100*Ne.strategy.annual_return).toFixed(2)||0,precision:2,suffix:"%",isNormal:!1})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(je.timestamp?S()(1e3*je.timestamp).format("YYYY/MM/DD"):"--","\uff09"),value:je.pps||0,precision:4,suffix:"USD"}))),x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:100*je.pnl_rate||0,precision:2,suffix:"%",isNormal:!1})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6628\u65e5\u6da8\u8dcc",value:100*je.last_day_pnl_rate||0,precision:2,suffix:"%",isNormal:!1}))),x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u7b56\u7565\u7c7b\u578b",value:"CTA",precision:0}))))))),x.a.createElement(s.a,{className:"content"},x.a.createElement(c.a,{style:{margin:"16px auto 0 auto"},className:"card",title:x.a.createElement("div",{style:{display:"flex",alignItems:"center"}},x.a.createElement("span",{style:{marginRight:"20px"}},"BTC \u8d8b\u52bf\u4e8c\u53f7"),x.a.createElement(l.a,{color:"green"},"\u8fdb\u53d6\u578b"),x.a.createElement(l.a,{color:"default"},"\u8fd0\u884c\u4e2d")),extra:x.a.createElement("a",{href:"#/t2",className:"details-link"},"\u7b56\u7565\u8be6\u60c5 >")},x.a.createElement(s.a,{style:{padding:"0 0 20px 0"}},x.a.createElement(i.a,{sm:15,xs:24,className:"card-left"},x.a.createElement(D.a,{option:Le,showLoading:Z,height:240})),x.a.createElement(i.a,{sm:9,xs:24,className:"card-right"},x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:Ee.strategy&&(100*Ee.strategy.annual_return).toFixed(2)||0,precision:2,suffix:"%",isNormal:!1})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(fe.timestamp?S()(1e3*fe.timestamp).format("YYYY/MM/DD"):"--","\uff09"),value:fe.pps||0,precision:4,suffix:"USD"}))),x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:100*fe.pnl_rate||0,precision:2,suffix:"%",isNormal:!1})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6628\u65e5\u6da8\u8dcc",value:100*fe.last_day_pnl_rate||0,precision:2,suffix:"%",isNormal:!1}))),x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u7b56\u7565\u7c7b\u578b",value:"CTA",precision:0}))))))),x.a.createElement(s.a,{className:"content"},x.a.createElement(c.a,{style:{margin:"16px auto 0 auto"},className:"card",title:x.a.createElement("div",{style:{display:"flex",alignItems:"center"}},x.a.createElement("span",{style:{marginRight:"20px"}},"BTC \u8d8b\u52bf\u4e00\u53f7"),x.a.createElement(l.a,{color:"blue"},"\u7a33\u5065\u578b"),x.a.createElement(l.a,{color:"default"},"\u8fd0\u884c\u4e2d")),extra:x.a.createElement("a",{href:"#/t1",className:"details-link"},"\u7b56\u7565\u8be6\u60c5 >")},x.a.createElement(s.a,{style:{padding:"0 0 20px 0"}},x.a.createElement(i.a,{sm:15,xs:24,className:"card-left"},x.a.createElement(D.a,{option:Ie,showLoading:K,height:240})),x.a.createElement(i.a,{sm:9,xs:24,className:"card-right"},x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:me.strategy&&(100*me.strategy.annual_return).toFixed(2)||0,precision:2,suffix:"%",isNormal:!1})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(ie.timestamp?S()(1e3*ie.timestamp).format("YYYY/MM/DD"):"--","\uff09"),value:ie.pps||0,precision:4,suffix:"USD"}))),x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:100*ie.pnl_rate||0,precision:2,suffix:"%",isNormal:!1})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u6628\u65e5\u6da8\u8dcc",value:100*ie.last_day_pnl_rate||0,precision:2,suffix:"%",isNormal:!1}))),x.a.createElement(s.a,{style:{width:"100%"}},x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})),x.a.createElement(i.a,{xs:12},x.a.createElement(D.b,{title:"\u7b56\u7565\u7c7b\u578b",value:"CTA",precision:0}))))))),x.a.createElement("p",{className:"more"},"\u66f4\u591a\u4ea7\u54c1 \u656c\u8bf7\u671f\u5f85")),x.a.createElement(C,{className:"footer"},x.a.createElement("p",{className:"footer-title"},"\u7b56\u7565\u98ce\u683c"),x.a.createElement(s.a,{justify:"space-around",style:{maxWidth:"1200px",margin:"24px auto 40px auto"}},x.a.createElement(i.a,{sm:6,xs:24},x.a.createElement(c.a,{className:"bottom-card"},x.a.createElement("h2",{className:"blue"},"\u7a33\u5065\u578b"),x.a.createElement(T,{type:"secondary"},"\u5b89\u5fc3\u914d\u7f6e\u9996\u9009"),x.a.createElement(o.a,null),x.a.createElement(r.a,{column:1,className:"descriptions"},x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u6536\u76ca\u65b9\u5f0f")},"\u4e1a\u7ee9\u5206\u6210"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u98ce\u9669\u7b49\u7ea7")},"\u4e2d"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u53c2\u8003\u5e74\u5316\u6536\u76ca")},"40%"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u53c2\u8003\u5e74\u5316\u6ce2\u52a8")},"20%")))),x.a.createElement(i.a,{sm:6,xs:24},x.a.createElement(c.a,{className:"bottom-card"},x.a.createElement("h2",null,x.a.createElement(T,{type:"success"},"\u8fdb\u53d6\u578b")),x.a.createElement(T,{type:"secondary"},"\u5206\u4eab\u5e02\u573a\u6210\u957f"),x.a.createElement(o.a,null),x.a.createElement(r.a,{column:1,className:"descriptions"},x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u6536\u76ca\u65b9\u5f0f")},"\u4e1a\u7ee9\u5206\u6210"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u98ce\u9669\u7b49\u7ea7")},"\u4e2d\u9ad8"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u53c2\u8003\u5e74\u5316\u6536\u76ca")},"80%"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u53c2\u8003\u5e74\u5316\u6ce2\u52a8")},"40%")))),x.a.createElement(i.a,{sm:6,xs:24},x.a.createElement(c.a,{className:"bottom-card"},x.a.createElement("h2",null,x.a.createElement(T,{type:"danger"},"\u79ef\u6781\u578b")),x.a.createElement(T,{type:"secondary"},"\u79ef\u6781\u521b\u9020\u672a\u6765"),x.a.createElement(o.a,null),x.a.createElement(r.a,{column:1,className:"descriptions"},x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u6536\u76ca\u65b9\u5f0f")},"\u4e1a\u7ee9\u5206\u6210"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u98ce\u9669\u7b49\u7ea7")},"\u9ad8"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u53c2\u8003\u5e74\u5316\u6536\u76ca")},"160%"),x.a.createElement(r.a.Item,{label:x.a.createElement(T,{type:"secondary"},"\u53c2\u8003\u5e74\u5316\u6ce2\u52a8")},"80%"))))),x.a.createElement(T,{className:"footer-subtitle"},"*\u53c2\u8003\u5e74\u5316\u56de\u62a5\u7387\u3001\u6ce2\u52a8\u7387\u4e0d\u6784\u6210\u6700\u4f4e\u56de\u62a5\u7387\u3001\u6ce2\u52a8\u7387\u4fdd\u8bc1\u3002")))}))(I(),E)}}]);
//# sourceMappingURL=5.5c4db4e1.chunk.js.map