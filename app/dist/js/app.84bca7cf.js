(function(t){function e(e){for(var a,s,i=e[0],o=e[1],u=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"045c":function(t,e,n){},"0b78":function(t,e,n){},"15be":function(t,e,n){"use strict";n("d8cd")},"1cec":function(t,e,n){},"3ca6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(t,e,n,r,c,s){var i=Object(a["l"])("TodoList");return Object(a["g"])(),Object(a["c"])(i)}function c(t,e,n,r,c,s){var i=Object(a["l"])("TodoList",!0);return Object(a["g"])(),Object(a["c"])(i,{tasks:s.computedTasks,onCreateTask:s.createTask,onUpdateTask:s.updateTask,onChangeEditState:s.changeEditState},null,8,["tasks","onCreateTask","onUpdateTask","onChangeEditState"])}var s=n("5530"),i=n("1da1"),o=(n("96cf"),n("d3b7"),n("e9c4"),n("d81d"),n("7db0"),n("4de4"),{class:"todo-header"});function u(t,e,n,r,c,s){var i=Object(a["l"])("AppName"),u=Object(a["l"])("TaskList");return Object(a["g"])(),Object(a["d"])("div",null,[Object(a["e"])("div",o,[Object(a["f"])(i)]),Object(a["e"])("div",null,[Object(a["f"])(u,{tasks:n.tasks,onCreateTask:s.createTask,onUpdateTask:s.updateTask,onChangeEditState:s.changeEditState},null,8,["tasks","onCreateTask","onUpdateTask","onChangeEditState"])])])}var d={class:"app-name"};function p(t,e,n,r,c,s){return Object(a["g"])(),Object(a["d"])("h2",d,"TODO リスト")}var f={name:"AppName"},l=(n("8b2e"),n("6b0d")),b=n.n(l);const h=b()(f,[["render",p],["__scopeId","data-v-d69c797e"]]);var k=h,m=(n("b0c0"),{class:"task-add-area"});function v(t,e,n,r,c,s){var i=Object(a["l"])("TaskAddButton"),o=Object(a["l"])("TaskItem");return Object(a["g"])(),Object(a["d"])("div",null,[Object(a["e"])("div",m,[Object(a["f"])(i,{onClick:s.createTask},null,8,["onClick"])]),(Object(a["g"])(!0),Object(a["d"])(a["a"],null,Object(a["j"])(n.tasks,(function(t){return Object(a["g"])(),Object(a["d"])("div",{class:"task-list",key:t.id},[Object(a["f"])(o,{id:t.id,name:t.name,isEdit:t.isEdit,onUpdateTask:s.updateTask,onChangeEditState:s.changeEditState},null,8,["id","name","isEdit","onUpdateTask","onChangeEditState"])])})),128))])}var O=function(t){return Object(a["i"])("data-v-8c356550"),t=t(),Object(a["h"])(),t},j={class:"task-add-icon"},g=O((function(){return Object(a["e"])("div",{class:"task-add-message"},"タスクを追加",-1)}));function T(t,e,n,r,c,s){var i=Object(a["l"])("TaskAddIcon"),o=Object(a["l"])("Button");return Object(a["g"])(),Object(a["c"])(o,{class:"task-add-button",onClick:s.handleClick},{default:Object(a["m"])((function(){return[Object(a["e"])("div",j,[Object(a["f"])(i)]),g]})),_:1},8,["onClick"])}var y={class:"add-task-icon"};function E(t,e,n,r,c,s){return Object(a["g"])(),Object(a["d"])("div",y)}var w={name:"TaskAddIcon"};n("a222");const S=b()(w,[["render",E],["__scopeId","data-v-142c07a5"]]);var x=S;function C(t,e,n,r,c,s){var i=this;return Object(a["g"])(),Object(a["d"])("button",{onClick:e[0]||(e[0]=function(e){return t.$emit("click",i.id)})},[Object(a["k"])(t.$slots,"default",{},void 0,!0)])}var _={name:"Button",props:{onClick:Function},emits:["click"]};n("74b4");const I=b()(_,[["render",C],["__scopeId","data-v-f5db2698"]]);var $=I,A={name:"TaskAddButton",components:{TaskAddIcon:x,Button:$},props:{onClick:{type:Function,required:!0}},methods:{handleClick:function(){this.onClick()}}};n("ecff");const N=b()(A,[["render",T],["__scopeId","data-v-8c356550"]]);var R=N,B={class:"task-item"},L={class:"task-left"},P={class:"task-checkbox"},U={class:"task-right"},q={class:"task-input"};function F(t,e,n,r,c,s){var i=Object(a["l"])("CheckBox"),o=Object(a["l"])("TextField");return Object(a["g"])(),Object(a["d"])("div",B,[Object(a["e"])("div",L,[Object(a["e"])("div",P,[Object(a["f"])(i,{onCheck:e[0]||(e[0]=function(t){return s.updateTask(!0)})})])]),Object(a["e"])("div",U,[Object(a["e"])("div",q,[Object(a["f"])(o,{ref:"taskNameInput",value:c.taskName,onUpdate:e[1]||(e[1]=function(t){return c.taskName=t})},null,8,["value"])])])])}n("a9e3");function M(t,e,n,r,c,s){return Object(a["g"])(),Object(a["d"])("div",{class:"checkbox",onClick:e[0]||(e[0]=function(e){return t.$emit("check",e.target.value)})})}var J={name:"CheckBox",emits:["check"]};n("8723");const H=b()(J,[["render",M],["__scopeId","data-v-3cb4fd4d"]]);var D=H,z=["value"];function G(t,e,n,r,c,s){return Object(a["g"])(),Object(a["d"])("textarea",{rows:"1",value:n.value,ref:"input",onInput:e[0]||(e[0]=function(){return s.update&&s.update.apply(s,arguments)})},null,40,z)}var K={name:"TextField",props:{value:{type:String,required:!0}},emits:["update"],methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},update:function(t){t.target.scrollHeight>20&&(t.target.style.height="".concat(t.target.scrollHeight,"px")),this.$emit("update",t.target.value)}}};n("970c");const Q=b()(K,[["render",G],["__scopeId","data-v-0086e6d8"]]);var V=Q,W={name:"TaskItem",components:{CheckBox:D,TextField:V},props:{id:{type:Number,required:!0},name:{type:String,required:!0},isEdit:{type:Boolean,required:!0,default:!1}},data:function(){return{taskName:this.name}},methods:{updateTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("updateTask",this.id,this.taskName,e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),changeEditState:function(t){var e=!!this.$el.contains(t.target);e?(this.$refs.taskNameInput.focus(),this.$refs.taskNameInput.select(),this.$emit("changeEditState",this.id,e)):this.isEdit&&this.updateTask(!1)}},emits:["updateTask","changeEditState"],mounted:function(){this.isEdit&&this.$refs.taskNameInput.focus(),window.addEventListener("click",this.changeEditState)},beforeUnmount:function(){window.removeEventListener("click",this.changeEditState)}};n("b9a0");const X=b()(W,[["render",F],["__scopeId","data-v-e3f5bbfa"]]);var Y=X,Z={name:"TaskList",components:{TaskItem:Y,TaskAddButton:R},props:{tasks:{type:Array,required:!0}},methods:{createTask:function(){this.$emit("createTask")},updateTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("updateTask",e,n,a);case 1:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}(),changeEditState:function(t,e){this.$emit("changeEditState",t,e)}},emits:["createTask","updateTask","changeEditState"]};n("db48");const tt=b()(Z,[["render",v],["__scopeId","data-v-bd179220"]]);var et=tt,nt={name:"App",components:{AppName:k,TaskList:et},props:{tasks:{type:Array,required:!0}},methods:{createTask:function(){this.$emit("createTask")},updateTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("updateTask",e,n,a);case 1:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}(),changeEditState:function(t,e){this.$emit("changeEditState",t,e)}},emits:["createTask","updateTask","changeEditState"]};n("15be");const at=b()(nt,[["render",u]]);var rt=at,ct={name:"App",components:{TodoList:rt},data:function(){return{tasks:[]}},methods:{createTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/items",{method:"POST",body:JSON.stringify({name:""}),headers:{"Content-Type":"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.tasks.push(Object(s["a"])(Object(s["a"])({},n),{},{isEdit:!0}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n,a){var r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/items/".concat(e),{method:"PUT",body:JSON.stringify({name:n,completed:a}),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,this.tasks=this.tasks.map((function(t){return t.id!==e?Object(s["a"])(Object(s["a"])({},t),{},{isEdit:!1}):Object(s["a"])(Object(s["a"])({},c),{},{isEdit:!1})}));case 7:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}(),changeEditState:function(t,e){var n=this.tasks.find((function(e){return e.id===t}));n.isEdit=e}},beforeMount:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/items");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.tasks=a.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{isEdit:!1})}));case 7:case"end":return e.stop()}}),e)})))()},computed:{computedTasks:function(){return this.tasks.filter((function(t){return!t.completed})).reverse()}}};const st=b()(ct,[["render",c]]);var it=st,ot={name:"App",components:{TodoList:it}};n("b6f1");const ut=b()(ot,[["render",r]]);var dt=ut;Object(a["b"])(dt).mount("#app")},"5b66":function(t,e,n){},6004:function(t,e,n){},"63d0":function(t,e,n){},"74b4":function(t,e,n){"use strict";n("1cec")},8723:function(t,e,n){"use strict";n("3ca6")},"8b2e":function(t,e,n){"use strict";n("5b66")},"8ba2":function(t,e,n){},"970c":function(t,e,n){"use strict";n("d956")},a222:function(t,e,n){"use strict";n("6004")},b6f1:function(t,e,n){"use strict";n("63d0")},b9a0:function(t,e,n){"use strict";n("0b78")},d8cd:function(t,e,n){},d956:function(t,e,n){},db48:function(t,e,n){"use strict";n("045c")},ecff:function(t,e,n){"use strict";n("8ba2")}});
//# sourceMappingURL=app.84bca7cf.js.map