(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{677:function(t,e,a){"use strict";a.r(e);a(59);var A=a(58),n=[{title:"Date",dataIndex:"date",width:200},{title:"Amount",dataIndex:"amount",width:100},{title:"Type",dataIndex:"type",width:100},{title:"Note",dataIndex:"note",width:100},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],o=Object(A.a)(Array(13)).map((function(t,e){return{key:e,date:"2018-02-11",amount:120,type:"income",note:"transfer"}})),s={name:"App",data:function(){return{data:o,columns:n}}},d=a(35),r=Object(d.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-表格"}},[t._v("#")]),t._v(" Table 表格")]),t._v(" "),a("h2",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Ctemplate%3E%0A%20%20%20%20%3Cf-table%20%3Acolumns%3D%22columns%22%20%3AdataSource%3D%22data%22%20draggable%20serialable%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20v-slot%3Aaction%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%3EDelete%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Ff-table%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aconst%20columns%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'Date'%2C%0A%20%20%20%20%20%20%20%20dataIndex%3A%20'date'%2C%0A%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'Amount'%2C%0A%20%20%20%20%20%20%20%20dataIndex%3A%20'amount'%2C%0A%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'Type'%2C%0A%20%20%20%20%20%20%20%20dataIndex%3A%20'type'%2C%0A%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'Note'%2C%0A%20%20%20%20%20%20%20%20dataIndex%3A%20'note'%2C%0A%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'Action'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'action'%2C%0A%20%20%20%20%20%20%20%20scopedSlots%3A%20%7B%20customRender%3A%20'action'%20%7D%2C%0A%20%20%20%20%7D%2C%0A%5D%3B%0Aconst%20data%20%3D%20%5B...Array(13)%5D.map((item%2C%20idx)%20%3D%3E%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20key%3A%20idx%2C%0A%20%20%20%20%20%20%20%20date%3A%20'2018-02-11'%2C%0A%20%20%20%20%20%20%20%20amount%3A%20120%2C%0A%20%20%20%20%20%20%20%20type%3A%20'income'%2C%0A%20%20%20%20%20%20%20%20note%3A%20'transfer'%2C%0A%20%20%20%20%7D%0A%7D)%0A%0Aexport%20default%20%7B%0A%20%20%20%20name%3A%20'App'%2C%0A%20%20%20%20data()%20%7B%0A%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20columns%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[[a("f-table",{attrs:{columns:t.columns,dataSource:t.data,draggable:"",serialable:""},scopedSlots:t._u([{key:"action",fn:function(){return[a("a",{attrs:{href:"javascript:;"}},[t._v("Delete")])]},proxy:!0}])})]],2)],2),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);