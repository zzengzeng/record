(window.webpackJsonp=window.webpackJsonp||[]).push([["test"],{2386:function(t,i,e){"use strict";e.r(i);var s={components:{Modal:e("ef2e").a},data:function(){return{visible:!1}},methods:{changeVisible:function(){this.visible?this.visible=!1:this.visible=!0}}},a=(e("b5cb"),e("2877")),n=Object(a.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"physics-back"},[e("button",{on:{click:t.changeVisible}},[t._v("展示 modal")]),t._v(" "),e("Modal",{attrs:{visible:t.visible}}),t._v(" "),e("transition",{attrs:{name:"mask-fade"}},[t.visible?e("div",{staticClass:"mask",on:{click:t.changeVisible}}):t._e()])],1)},[],!1,null,"c6dbd056",null);i.default=n.exports},"36bd":function(t,i,e){"use strict";var s=e("4bf8"),a=e("77f1"),n=e("9def");t.exports=function(t){for(var i=s(this),e=n(i.length),c=arguments.length,l=a(c>1?arguments[1]:void 0,e),r=c>2?arguments[2]:void 0,o=void 0===r?e:a(r,e);o>l;)i[l++]=t;return i}},"6c7b":function(t,i,e){var s=e("5ca1");s(s.P,"Array",{fill:e("36bd")}),e("9c6c")("fill")},b5cb:function(t,i,e){"use strict";var s=e("d2ca");e.n(s).a},cff3:function(t,i,e){},d2ca:function(t,i,e){},e3e5:function(t,i,e){"use strict";var s=e("cff3");e.n(s).a},ef2e:function(t,i,e){"use strict";e("6c7b");var s={props:{visible:{type:Boolean,required:!1,default:!1}},data:function(){return{dataList:Array(10).fill(1)}}},a=(e("e3e5"),e("2877")),n=Object(a.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"fade"}},[t.visible?e("div",{staticClass:"list"},t._l(t.dataList,function(i,s){return e("div",{key:s,staticClass:"list-item"},[e("img",{staticClass:"item-img",attrs:{src:"https://dummyimage.com/100x100/faaffa",alt:""}}),t._v(" "),e("p",{staticClass:"title"},[t._v("商品"+t._s(s))])])}),0):t._e()])},[],!1,null,"2fe8e3c5",null);i.a=n.exports}}]);