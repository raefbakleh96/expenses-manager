(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),l=(a(18),a(5)),s=a(2),r=a(1),i=(a(19),a(20),a(0));var u=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"expense-date ",children:[Object(i.jsxs)("div",{className:"expense-date__month",children:[["January","February","March","April","May","June","July","August","September","October","November","December"][e.date.getMonth()-1]," "]}),Object(i.jsx)("div",{className:"expense-date__year",children:e.date.getFullYear()}),Object(i.jsx)("div",{className:"expense-date__day",children:e.date.getDate()})]})})};a(22);var j=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})};var o=function(e){var t=e.title,a=e.amount;return Object(i.jsx)("li",{className:"expenses-list",children:Object(i.jsxs)(j,{className:"expense-item",children:[Object(i.jsx)(u,{date:e.date}),Object(i.jsx)("div",{className:"expense-item__description",children:Object(i.jsx)("h2",{children:t})}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",a]})]})})},b=(a(23),function(e){var t=Object(r.useState)(""),a=Object(s.a)(t,2),n=(a[0],a[1]);return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){n(t.target.value);console.log(t.target.value),e.onSelectedValue(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"}),Object(i.jsx)("option",{value:"",children:"All"})]})]})})}),d=a(8);a(24),a(25);var x=function(e){var t="0";return e.max>0&&(t=Math.round(e.maxValue/e.maxValue*100)+" %"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"char-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label"})]})};var v=function(e){var t=e.dataPoints.map((function(e){return e.value}));return Math.max.apply(Math,Object(l.a)(t)),Object(i.jsx)("div",{children:e.dataPoints.map((function(e){return Object(i.jsx)(x,{value:e.value,maxValue:null,label:e.label},e.id)}))})};var O=function(e){var t,a=[{label:"Jan",value:"0"},{label:"February",value:"0"},{label:"March",value:"0"},{label:"April",value:"0"},{label:"May",value:"0"},{label:"June",value:"0"},{label:"July",value:"0"},{label:"August",value:"0"},{label:"September",value:"0"},{label:"October",value:"0"},{label:"November",value:"0"},{label:"December",value:"0"}],n=Object(d.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(l){n.e(l)}finally{n.f()}return Object(i.jsx)("div",{children:Object(i.jsx)(v,{dataPoints:a})})},h=function(e){var t=Object(r.useState)("2021"),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(i.jsx)("p",{className:"expenses-list__fallback",children:"None Found"}),u=e.items.filter((function(e){return e.date.getFullYear().toString()===n}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{expenses:u}),Object(i.jsx)(b,{selected:n,onSelectedValue:function(e){c(e)}}),0===u.length&&l,u.map((function(e){return Object(i.jsx)(o,{title:e.title,amount:e.amount,date:e.date},e.id)})),Object(i.jsx)(j,{className:"expenses"})]})};a(26);var m=function(e){var t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(""),u=Object(s.a)(l,2),j=u[0],o=u[1],b=Object(r.useState)(""),d=Object(s.a)(b,2),x=d[0],v=d[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={title:n,amount:j,date:new Date(x)};c(""),o(""),v(""),e.onSaveExpenseData(a)},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{value:n,type:"text",onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{value:j,onChange:function(e){o(e.target.value)},type:"number",step:"0.01",min:"0.01"})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{value:x,onChange:function(e){v(e.target.value)},type:"date",min:"2018-01-01",max:"2024-12-31"})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onHide,children:"Abbrechen"}),Object(i.jsx)("button",{type:"submit",children:" Add New Expense "})]})]})},p=a(9),f=(a(27),function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(!1),u=Object(s.a)(l,2),j=u[0],o=u[1],b=Object(r.useState)(!0),d=Object(s.a)(b,2),x=(d[0],d[1]);return Object(i.jsxs)("div",{className:"new-expense",children:[!j&&Object(i.jsx)("button",{onClick:function(){return c(!0),o(!0),Object(i.jsx)("button",{children:"fasdf"})},children:" Add New Expense "}),j||!1!==n?Object(i.jsx)(m,{onSaveExpenseData:function(t){var a=Object(p.a)({id:1e4*Math.random()},t);e.onAddExpense(a),x(!1)},onHide:function(){c(!1),o(!1),console.log("here am i")}}):null]})});var N=function(){var e=Object(r.useState)([{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}]),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Let's get started Wohoo!"}),Object(i.jsx)(f,{onAddExpense:function(e){n((function(t){return[e].concat(Object(l.a)(t))})),console.log(a)}}),Object(i.jsx)(h,{items:a})]})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(N,{}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ae318bfb.chunk.js.map