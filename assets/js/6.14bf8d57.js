(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{695:function(e,t,a){"use strict";a.r(t);var r={data:function(){return{date:"2020-06-06",month:"",week:"",year:"",range:[]}},methods:{change:function(e,t){console.log(t)},changeWeek:function(e,t){console.log(e,t)},changeYear:function(e,t){console.log(e,t)},changeRange:function(e,t){console.log(e,t)},disabledDate:function(e){return e}}},n=a(38),o=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"DatePicker-日期选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#DatePicker-日期选择器"}},[e._v("#")]),e._v(" DatePicker 日期选择器")]),e._v(" "),a("p",[a("strong",[e._v("变更点")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("value(v-model)")]),e._v("值类型由 "),a("code",[e._v("mement")]),e._v(" 变更为 "),a("code",[e._v("string")])]),e._v(" "),a("li",[a("code",[e._v("ant-design-vue@1.5.4")]),e._v(" 目前暂无 "),a("code",[e._v("YearPicker")]),e._v(" 组件，官方计划 2.x 版本才会提供。故利用 "),a("code",[e._v("mode")]),e._v(" 和 "),a("code",[e._v("panelChange")]),e._v(" 等方法封装 "),a("code",[e._v("YearPicker")]),e._v(" 等组件，解决"),a("a",{attrs:{href:"https://www.antdv.com/docs/vue/faq-cn#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[e._v("mode 设置后无法选择年份/月份？"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"组件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件注册"}},[e._v("#")]),e._v(" 组件注册")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" DatePicker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@yemu419/fms-components'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("DatePicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[e._v("#")]),e._v(" 代码演示")]),e._v(" "),a("h4",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[e._v("#")]),e._v(" 基本使用")]),e._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Ctemplate%3E%0A%20%20%20%20%3Cf-date-picker%20v-model%3D%22date%22%20%40change%3D%22change%22%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Cf-month-picker%20v-model%3D%22month%22%20placeholder%3D%22%E9%80%89%E6%8B%A9%E6%9C%88%E4%BB%BD%22%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Cf-week-picker%20v-model%3D%22week%22%20placeholder%3D%22%E9%80%89%E6%8B%A9%E5%91%A8%22%20%40change%3D%22changeWeek%22%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Cf-year-picker%20v-model%3D%22year%22%20placeholder%3D%22%E9%80%89%E6%8B%A9%E5%B9%B4%22%20%40change%3D%22changeYear%22%20%40disabledDate%3D%22disabledDate%22%20%2F%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3Cf-range-picker%0A%20%20%20%20%20%20%20%20v-model%3D%22range%22%0A%20%20%20%20%20%20%20%20%40change%3D%22changeRange%22%0A%20%20%20%20%20%20%20%20%3Ashow-time%3D%22%7B%20format%3A%20'HH%3Amm'%20%7D%22%0A%20%20%20%20%20%20%20%20format%3D%22YYYY-MM-DD%20HH%3Amm%22%0A%20%20%20%20%20%20%20%20%3Aplaceholder%3D%22%5B'Start%20Time'%2C%20'End%20Time'%5D%22%0A%20%20%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20%20%20export%20default%20%7B%0A%20%20%20%20%20%20%20%20data()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20date%3A%20'2020-06-06'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20month%3A%20''%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20week%3A%20''%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20year%3A%20''%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20range%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20methods%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20change(date%2C%20dateString)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(dateString)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20changeWeek(date%2C%20dateString)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(date%2C%20dateString)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20changeYear(date%2C%20dateString)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(date%2C%20dateString)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20changeRange(dates%2C%20dateStrings)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(dates%2C%20dateStrings)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20disabledDate(current)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20current%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%3B%0A%3C%2Fscript%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[[a("f-date-picker",{on:{change:e.change},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("br"),e._v(" "),a("f-month-picker",{attrs:{placeholder:"选择月份"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),a("br"),e._v(" "),a("f-week-picker",{attrs:{placeholder:"选择周"},on:{change:e.changeWeek},model:{value:e.week,callback:function(t){e.week=t},expression:"week"}}),e._v(" "),a("br"),e._v(" "),a("f-year-picker",{attrs:{placeholder:"选择年"},on:{change:e.changeYear,disabledDate:e.disabledDate},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}}),e._v(" "),a("br"),e._v(" "),a("f-range-picker",{attrs:{"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",placeholder:["Start Time","End Time"]},on:{change:e.changeRange},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})]],2)],2),e._v(" "),a("h2",{attrs:{id:"API"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#API"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("h3",{attrs:{id:"YearPicker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#YearPicker"}},[e._v("#")]),e._v(" YearPicker")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")]),e._v(" "),a("th",[e._v("版本")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("placeholder")]),e._v(" "),a("td",[e._v("输入框提示文字")]),e._v(" "),a("td",[e._v("string")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("value(v-model)")]),e._v(" "),a("td",[e._v("日期")]),e._v(" "),a("td",[e._v("string|"),a("a",{attrs:{href:"http://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("moment"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td")])])]),e._v(" "),a("h3",{attrs:{id:"YearPicker-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#YearPicker-事件"}},[e._v("#")]),e._v(" YearPicker 事件")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("事件名称")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("回调参数")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("change")]),e._v(" "),a("td",[e._v("时间发生变化的回调，发生在用户选择时间时")]),e._v(" "),a("td",[e._v("function(date: moment | string, dateString: string)")])])])]),e._v(" "),a("p",[e._v("更多属性请参考 "),a("a",{attrs:{href:"https://antdv.com/components/date-picker-cn/#API",target:"_blank",rel:"noopener noreferrer"}},[e._v("ant-design-vue/DatePicker"),a("OutboundLink")],1),e._v("。")]),e._v(" "),[a("a-anchor",{staticClass:"toc-affix",attrs:{targetOffset:100}},[a("a-anchor-link",{attrs:{href:"#基本使用",title:"基本使用"}}),e._v(" "),a("a-anchor-link",{attrs:{href:"#API",title:"API"}})],1)]],2)}),[],!1,null,null,null);t.default=o.exports}}]);