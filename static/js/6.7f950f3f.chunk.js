(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{925:function(e,t,a){"use strict";a.r(t),a.d(t,"DetailsComponent",(function(){return D})),a.d(t,"Details",(function(){return V})),a.d(t,"default",(function(){return V}));var n=a(219),r=(a(765),a(764)),c=(a(218),a(69)),l=(a(162),a(57)),o=(a(163),a(35)),i=(a(754),a(755)),m=a(53),s=a.n(m),u=a(2),b=a(72),d=a(78),p=a(3),f=(a(353),a(166)),j=(a(60),a(0)),O=a.n(j),g=a(58),h=a.n(g),x=(a(112),a(21)),E=a(220),v=a(356),y=a.n(v),N=a(34),S=a(111);function k(){var e=Object(n.a)(["\n  .p-24 {\n    padding: 24px;\n  }\n  .m-t-24 {\n    margin-top: 24px;\n  }\n  .m-b-24 {\n    margin-bottom: 24px;\n  }\n  .divider {\n    border-color: #000;\n    opacity: 0.8;\n    margin: 0;\n  }\n  .content {\n    padding-top: 40px;\n    max-width: 1120px;\n    margin: 0 auto !important;\n  }\n\n  .green {\n    color: #3f8600;\n  }\n  .red {\n    color: #cf1322;\n  }\n  .grey {\n    color: rgba(19, 24, 31, 0.6);\n  }\n"]);return k=function(){return e},e}var w=f.a.Content,D=function(e){var t=e.className,a=Object(j.useState)([]),n=Object(p.a)(a,2),m=n[0],g=n[1],E=Object(j.useState)([]),v=Object(p.a)(E,2),k=(v[0],v[1]),D=Object(j.useState)([]),V=Object(p.a)(D,2),Y=V[0],I=V[1],L=Object(j.useState)(!0),A=Object(p.a)(L,2),M=A[0],U=A[1],C=Object(j.useState)([]),J=Object(p.a)(C,2),B=J[0],P=J[1],T=Object(j.useState)([]),q=Object(p.a)(T,2),z=q[0],F=q[1],G=Object(x.h)().user;Object(j.useEffect)((function(){(function(){var e=Object(d.a)(s.a.mark((function e(){var t,a,n,r,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([h.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/accounts/".concat(G,"/main.json")),h.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/accounts/".concat(G,"/dw.json"))]);case 2:t=e.sent,a=Object(p.a)(t,2),n=a[0].data,r=a[1].data,g(n),I(Object(b.a)(r).reverse().map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{key:t})}))),c=n.map((function(e,t){return[1e3*n[t][0],Object(N.e)(n[t][4],1)]})),l=n.map((function(e,t){return[1e3*n[t][0],Object(N.e)(n[t][10],1)]})),o=n.map((function(e,t){return[1e3*n[t][0],Object(N.e)(n[t][6],1)]})),P(c),F(l),U(!1),k(o);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[G]);var H,K={title:{text:"\u6301\u4ed3\u6536\u76ca"},tooltip:{trigger:"axis"},legend:{data:[{name:"\u7528\u6237\u672a\u5b9e\u73b0\u6536\u76ca"},{name:"\u7b56\u7565\u5206\u6210\u6536\u76ca"}],formatter:function(e){return"\u7528\u6237\u672a\u5b9e\u73b0\u6536\u76ca"===e?0===B.length?"".concat(e," +0.0"):"".concat(e," ").concat(Object(N.d)(B[B.length-1][1])):"\u7b56\u7565\u5206\u6210\u6536\u76ca"===e?0===z.length?"".concat(e," +0.0"):"".concat(e," ").concat(Object(N.d)(z[z.length-1][1])):void 0},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}"},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u7528\u6237\u672a\u5b9e\u73b0\u6536\u76ca",type:"line",areaStyle:{},data:B,itemStyle:{color:"rgb(73,151,247)"},stack:"\u603b\u91cf",showSymbol:!1,hoverAnimation:!0},{name:"\u7b56\u7565\u5206\u6210\u6536\u76ca",type:"line",areaStyle:{},data:z,itemStyle:{color:"rgb(105,193,111)"},stack:"\u603b\u91cf",showSymbol:!1,hoverAnimation:!0}]},Q=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u5e02\u503c",dataIndex:"marketValue",key:"marketValue",render:function(e,t,a){return isNaN(e)?"--":Object(N.e)(e,1).toLocaleString()}},{title:"\u6536\u76ca\u989d",dataIndex:"incomeValue",key:"incomeValue",render:function(e){return O.a.createElement("span",{className:Object(N.c)(e)},Object(N.d)(e))}}],R=[{title:"\u65e5\u671f",dataIndex:"datetime",key:"datetime",render:function(e){return y()(1e3*e).format("YYYY-MM-DD hh:mm:ss")}},{title:"\u91d1\u989d",dataIndex:"Value",key:"Value",render:function(e,t,a){var n=t.price,r=t.amount,c=Number(n)*Number(r);return O.a.createElement("span",{className:Object(N.c)(c)},isNaN(c)?"--":Object(N.d)(Object(N.e)(c,1)))}},{title:"\u51c0\u503c",dataIndex:"price",key:"price",render:function(e){return O.a.createElement("span",null,Object(N.e)(e,4))}},{title:"\u4efd\u989d",dataIndex:"amount",key:"amount",render:function(e){var t=Number(e);return O.a.createElement("span",{className:Object(N.c)(t)},isNaN(t)?"--":Object(N.d)(Object(N.e)(t,1)))}}];return O.a.createElement(f.a,{className:t},O.a.createElement(i.a,{className:"divider"}),O.a.createElement(w,null,O.a.createElement(l.a,{gutter:24,className:"content"},O.a.createElement(o.a,{sm:24,xs:24},O.a.createElement(c.a,{title:"".concat(G," T1 \u7b56\u7565\u6301\u4ed3")},O.a.createElement(l.a,{style:{marginBottom:"24px"}},O.a.createElement(o.a,{sm:5,xs:12},O.a.createElement(S.b,{title:"\u6301\u4ed3\u5e02\u503c\uff08USD\uff09",value:function(e){var t=e.length;return t>0?Object(N.e)(e[t-1][7],4):"--"}(m),precision:0})),O.a.createElement(o.a,{sm:5,xs:12},O.a.createElement(S.b,{title:"\u6301\u4ed3\u6536\u76ca\uff08USD\uff09",value:m.length>0?m[m.length-1][4]+m[m.length-1][10]:0,precision:1,isNormal:!1})),O.a.createElement(o.a,{sm:4,xs:12},O.a.createElement(S.b,{title:"\u6301\u4ed3\u6536\u76ca\u7387",value:m.length>0?100*m[m.length-1][8]:0,precision:2,suffix:"%",isNormal:!1})),O.a.createElement(o.a,{sm:5,xs:12},O.a.createElement(S.b,{title:"\u6301\u4ed3\u4efd\u989d",value:function(e){var t=e.length;return t>0?e[t-1][3]:0}(m),precision:0})),O.a.createElement(o.a,{sm:5,xs:12},O.a.createElement(S.b,{title:"\u6301\u4ed3\u6210\u672c(USD)",value:function(e){var t=e.length;return t>0?e[t-1][2]:0}(m),precision:4}))),O.a.createElement(l.a,null,O.a.createElement(o.a,{xs:24,className:"card-left"},O.a.createElement(S.a,{option:K,showLoading:M})))))),O.a.createElement(l.a,{gutter:24,className:"content"},O.a.createElement(o.a,{sm:12,xs:24},O.a.createElement(c.a,{title:"\u6536\u76ca\u660e\u7ec6"},O.a.createElement(r.a,{columns:Q,dataSource:(H=Object(b.a)(m).reverse(),H.length>0?H.reduce((function(e,t,a,n){var r={date:y()(1e3*t[0]).format("YYYY-MM-DD hh:mm:ss"),value:0===a?"--":Object(N.e)(n[a-1][1],4),cost:t[2],share:Object(N.e)(t[3],0),key:t[0],incomeValue:Object(N.e)(t[9],2),marketValue:Object(N.e)(t[7],1)};return[].concat(Object(b.a)(e),[r])}),[]):[])}))),O.a.createElement(o.a,{sm:12,xs:24},O.a.createElement(c.a,{title:"\u4ea4\u6613\u660e\u7ec6"},O.a.createElement(r.a,{columns:R,dataSource:Y}))))))},V=Object(E.a)(D)(k())}}]);
//# sourceMappingURL=6.7f950f3f.chunk.js.map