(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[8],{927:function(e,t,n){"use strict";n.r(t),n.d(t,"DetailsComponent",(function(){return E})),n.d(t,"Info",(function(){return S})),n.d(t,"default",(function(){return S}));var a=n(219),r=(n(765),n(764)),i=(n(218),n(69)),l=(n(162),n(57)),o=(n(163),n(35)),c=(n(754),n(755)),u=n(53),s=n.n(u),d=n(72),m=n(78),p=n(3),f=(n(353),n(166)),b=(n(60),n(0)),x=n.n(b),g=n(58),h=n.n(g),y=(n(112),n(220)),j=n(34),O=n(111);function v(){var e=Object(a.a)(["\n  .p-24 {\n    padding: 24px;\n  }\n  .m-t-24 {\n    margin-top: 24px;\n  }\n  .m-b-24 {\n    margin-bottom: 24px;\n  }\n  .divider {\n    border-color: #000;\n    opacity: 0.8;\n    margin: 0;\n  }\n  .content {\n    padding-top: 40px;\n    margin: 0 auto !important;\n  }\n\n  .green {\n    color: #3f8600;\n  }\n  .red {\n    color: #cf1322;\n  }\n  .grey {\n    color: rgba(19, 24, 31, 0.6);\n  }\n"]);return v=function(){return e},e}var z=f.a.Content,E=function(e){var t=e.className,n=Object(b.useState)("--"),a=Object(p.a)(n,2),u=a[0],g=a[1],y=Object(b.useState)([]),v=Object(p.a)(y,2),E=v[0],S=v[1],w=Object(b.useState)([]),A=Object(p.a)(w,2),P=A[0],L=A[1],k=Object(b.useState)([]),N=Object(p.a)(k,2),I=N[0],C=N[1],F=Object(b.useState)([]),_=Object(p.a)(F,2),D=_[0],B=_[1];Object(b.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a,r,i,l,o,c,u,m,f,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([h.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/st/unrealized_dividend.json"),h.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/st/user_unrealized_dividend.json"),h.a.get("https://raw.githubusercontent.com/odofmine/fund/main/t1/st/user_table.json")]);case 2:t=e.sent,n=Object(p.a)(t,3),a=n[0].data,r=n[1].data,i=n[2].data,a.length>0&&(l=Object(j.e)(a[a.length-1][1],1),g(l)),o=Object.keys(r),c=Object.keys(i),B(c),u=c.map((function(e){var t=i[e];return{name:e,total:t[0],unrealizedPnl:t[1],unrealizedAllocation:t[2],real:t[3]}})),m=u.map((function(e){return{value:e.total,name:e.name}})),f=u.reduce((function(e,t){return{name:"all",total:e.total+t.total,unrealizedPnl:e.unrealizedPnl+t.unrealizedPnl,unrealizedAllocation:e.unrealizedAllocation+t.unrealizedAllocation,real:e.real+t.real}}),{name:"all",total:0,unrealizedPnl:0,unrealizedAllocation:0,real:0}),b=o.map((function(e){var t=r[e],n=(t[0][0]-1609674041)/60/60/24,a=Array.from({length:n},(function(e,t){return[1609674041+24*t*60*60,0]}));return{name:e,type:"line",areaStyle:{},data:[].concat(Object(d.a)(a),Object(d.a)(t)).map((function(e){return[1e3*e[0],Object(j.e)(e[1],1)]})),stack:"userUnrealizedDividend",showSymbol:!1,hoverAnimation:!0,lineStyle:{width:0}}})),S([].concat(Object(d.a)(u),[f])),C(b),L(m);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var G={baseOption:{title:{text:"\u5f85\u5206\u914d\u5229\u6da6",textStyle:{fontSize:20}},series:I,tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}"},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}}},media:[{query:{maxWidth:760},option:{title:{text:"\u5f85\u5206\u914d\u5229\u6da6",textStyle:{fontSize:12}},series:I,tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}"},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}}}}]},J=[{title:"\u7528\u6237",dataIndex:"name",render:function(e){return x.a.createElement("a",{href:"/#/account/".concat(e)},e)}},{title:"\u603b\u5e02\u503c",dataIndex:"total",render:function(e){return e.toFixed(2)},sorter:function(e,t){return e.total-t.total}},{title:"\u672a\u5b9e\u73b0\u76c8\u4e8f",dataIndex:"unrealizedPnl",render:function(e){return e.toFixed(2)},sorter:function(e,t){return e.unrealizedPnl-t.unrealizedPnl}},{title:"\u672a\u5206\u914d\u6536\u76ca",dataIndex:"unrealizedAllocation",render:function(e){return e.toFixed(2)},sorter:function(e,t){return e.unrealizedAllocation-t.unrealizedAllocation}},{title:"\u5b9e\u9645\u5e02\u503c",dataIndex:"real",render:function(e){return e.toFixed(2)},sorter:function(e,t){return e.real-t.real}}],U={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:D},series:[{name:"\u603b\u5e02\u503c",type:"pie",radius:"55%",center:["50%","60%"],data:P,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return x.a.createElement(f.a,{className:t},x.a.createElement(c.a,{className:"divider"}),x.a.createElement(z,null,x.a.createElement(l.a,{gutter:24,className:"content"},x.a.createElement(o.a,{sm:12,xs:24},x.a.createElement(i.a,{title:"T1 \u5229\u6da6\u5206\u914d"},x.a.createElement(l.a,{style:{marginBottom:"24px"}},x.a.createElement(o.a,{sm:5,xs:12},x.a.createElement(O.b,{title:"\u5f85\u5206\u914d\u5229\u6da6\uff08USD\uff09",value:u,precision:0}))),x.a.createElement(l.a,null,x.a.createElement(o.a,{xs:24,className:"card-left"},x.a.createElement(O.a,{option:G}))))),x.a.createElement(o.a,{sm:12,xs:24},x.a.createElement(i.a,{title:"\u603b\u5e02\u503c"},x.a.createElement(O.a,{option:U})))),x.a.createElement(l.a,{gutter:24,className:"content"},x.a.createElement(o.a,{sm:24,xs:24},x.a.createElement(i.a,{title:"\u6536\u76ca\u660e\u7ec6"},x.a.createElement(r.a,{columns:J,dataSource:E}))))))},S=Object(y.a)(E)(v())}}]);
//# sourceMappingURL=8.05e648ba.chunk.js.map