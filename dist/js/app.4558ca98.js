(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0da8":function(t,e,s){"use strict";s("93d7")},2297:function(t,e,s){},"4ec3":function(t,e,s){window.axios=s("bc3a"),window.axios.defaults.baseURL="https://pixabay.com/api/?key=22986521-0943181e795d99e673de09bc1"},"55d6":function(t,e,s){"use strict";s("e4f6")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("c1c3");var a=s("2b0e"),n=s("2f62"),i=(s("c740"),s("a15b"),s("4de4"),s("ac1f"),s("1276"),{posts:[],post:null}),o={POSTS:function(t){return t.posts},POST:function(t){return t.post}},r={SET_POSTS:function(t,e){t.posts=e},SET_POST:function(t,e){t.post=e},DELETE_TAG_FROM_POST:function(t,e){var s=t.posts.findIndex((function(t){return t.id===e.id}));t.posts[s].tags=t.posts[s].tags.split(", ").filter((function(t){return t!==e.tag})).join(", ")},ADD_TAG_TO_POST:function(t,e){var s=t.posts.findIndex((function(t){return t.id===e.id})),a=t.posts[s].tags.split(", ");a.push(e.text),t.posts[s].tags=a.join(", ")}},c={GET_POSTS:function(t){return axios.get("https://pixabay.com/api/?key=22986521-0943181e795d99e673de09bc1&q=cats&image_type=all&per_page=100").then((function(e){t.commit("SET_POSTS",e.data.hits)}))},GET_POST_BY_ID:function(t,e){return axios.get("https://pixabay.com/api/?key=22986521-0943181e795d99e673de09bc1&id=".concat(e.id)).then((function(e){t.commit("SET_POST",e.data.hits[0])}))},DELETE_TAG:function(t,e){t.commit("DELETE_TAG_FROM_POST",e)},ADD_TAG:function(t,e){t.commit("ADD_TAG_TO_POST",e)}},l={state:i,getters:o,mutations:r,actions:c};a["default"].use(n["a"]);var u=new n["a"].Store({modules:{posts:l}}),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},p=[],m={name:"App"},f=m,_=(s("034f"),s("2877")),g=Object(_["a"])(f,d,p,!1,null,null,null),v=g.exports,h=s("8c4f"),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t.loading?s("vue-loaders-ball-spin-fade-loader",{staticClass:"loader",attrs:{color:"black",scale:"1"}}):s("div",[s("FilterPosts",{on:{searchByTag:t.filterBy}}),s("Sort",{on:{sort:t.sortBy}}),s("ul",{staticClass:"list"},t._l(t.currentPosts,(function(t){return s("PostItem",{key:t.id,staticClass:"list-item",attrs:{item:t}})})),1)],1)],1)},b=[],y=s("1da1"),O=s("2909"),C=s("5530"),w=(s("96cf"),s("4e82"),s("caad"),s("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-item"},[s("router-link",{attrs:{to:{path:"/"+this.item.id}}},[s("img",{staticClass:"post-item_picture",attrs:{src:t.item.previewURL,alt:t.item.tags}})]),s("div",{staticClass:"post-item-container"},[s("p",{staticClass:"post-item-container_description"},[t._v(" Comments: "),s("span",[t._v(t._s(t.item.comments))])]),s("p",{staticClass:"post-item-container_description"},[t._v(" Likes: "),s("span",[t._v(t._s(t.item.likes))])]),s("ul",{staticClass:"post-item-container-tags",on:{dblclick:function(e){t.showEdit=!t.showEdit}}},[t._l(t.tags,(function(e){return s("li",{key:e,staticClass:"post-item-container-tags_item"},[t.showEdit?s("DeleteTag",{staticClass:"post-item-container-tags_item-delete",attrs:{tag:e,id:t.item.id},on:{deleteItem:t.deleteTag}}):t._e(),s("p",[t._v(t._s(e))])],1)})),t.showEdit?s("AddNewTag",{attrs:{id:t.item.id},on:{addTag:t.addTag}}):t._e()],2)])],1)}),P=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"delete",on:{click:t.deleteItem}})},x=[],k={name:"DeleteItem",props:{tag:{require:!0,default:null},id:{require:!0}},data:function(){return{}},methods:{deleteItem:function(){this.$emit("deleteItem",this.tag,this.id)}}},B=k,E=(s("0da8"),Object(_["a"])(B,S,x,!1,null,"dd1ebd94",null)),j=E.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTag,expression:"newTag"}],staticClass:"add-container-input",attrs:{type:"text",placeholder:"Add new tag"},domProps:{value:t.newTag},on:{input:function(e){e.target.composing||(t.newTag=e.target.value)}}}),s("button",{staticClass:"add-container-button",attrs:{type:"button"},on:{click:t.addTag}},[t._v(" Add tag ")])])},D=[],$={name:"AddNewTag",props:{id:{require:!0}},data:function(){return{newTag:null}},methods:{addTag:function(){this.newTag&&this.$emit("addTag",this.newTag,this.id),this.newTag=null}}},L=$,I=(s("b9a0"),Object(_["a"])(L,A,D,!1,null,"3a14edbe",null)),G=I.exports,R={name:"PostItem",components:{DeleteTag:j,AddNewTag:G},props:{item:{required:!0}},data:function(){return{showEdit:!1,newTag:""}},computed:{tags:function(){return this.item.tags.split(", ")}},methods:{addTag:function(t,e){this.$store.dispatch("ADD_TAG",{text:t,id:e})},deleteTag:function(t,e){this.$store.dispatch("DELETE_TAG",{tag:t,id:e})}}},q=R,N=(s("d38a"),Object(_["a"])(q,w,P,!1,null,"4e1fd484",null)),M=N.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sort"},[s("div",{staticClass:"sort-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sortByComments,expression:"sortByComments"}],staticClass:"sort-container-input",attrs:{type:"radio",id:"comments",name:"radio"},domProps:{checked:t._q(t.sortByComments,null)},on:{change:[function(e){t.sortByComments=null},function(e){return t.sortBy("comments")}]}}),s("label",{staticClass:"sort-container-label",attrs:{for:"comments"}},[t._v("Sort by comments")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sortByLikes,expression:"sortByLikes"}],staticClass:"sort-container-input",attrs:{type:"radio",id:"likes",name:"radio"},domProps:{checked:t._q(t.sortByLikes,null)},on:{change:[function(e){t.sortByLikes=null},function(e){return t.sortBy("likes")}]}}),s("label",{staticClass:"sort-container-label",attrs:{for:"likes"}},[t._v("Sort by likes")])])])},U=[],J={name:"Sort",data:function(){return{sortByComments:!1,sortByLikes:!1}},methods:{sortBy:function(t){this.$emit("sort",t)}}},Y=J,V=(s("55d6"),Object(_["a"])(Y,F,U,!1,null,"a4e982dc",null)),z=V.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"filter-input",attrs:{type:"text",placeholder:"Search posts by tags"},domProps:{value:t.searchText},on:{keyup:t.searchByTag,input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])},K=[],Q={name:"Search",data:function(){return{searchText:null,debounce:null}},methods:{searchByTag:function(){var t=this;clearTimeout(this.debounce),this.debounce=setTimeout((function(){t.$emit("searchByTag",t.searchText)}),300)}}},W=Q,X=(s("9458"),Object(_["a"])(W,H,K,!1,null,"5c89a445",null)),Z=X.exports,tt={name:"PostsList",components:{PostItem:M,Sort:z,FilterPosts:Z},data:function(){return{sortByParams:null,filterByTags:null,loading:!1}},computed:Object(C["a"])(Object(C["a"])({},Object(n["b"])(["POSTS"])),{},{currentPosts:function(){var t=this;return this.sortByParams||this.filterByTags?Object(O["a"])(this.POSTS).filter((function(e){return t.filterByTags?e.tags.includes(t.filterByTags):e})).sort((function(e,s){return"comments"===t.sortByParams?s.comments-e.comments:"likes"===t.sortByParams?s.likes-e.likes:void 0})):this.POSTS}}),created:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("GET_POSTS");case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{sortBy:function(t){this.sortByParams=t},filterBy:function(t){this.filterByTags=t}}},et=tt,st=(s("c0bf"),Object(_["a"])(et,T,b,!1,null,"69a4a35c",null)),at=st.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t.loading?s("vue-loaders-ball-spin-fade-loader",{staticClass:"loader",attrs:{color:"black",scale:"1"}}):s("div",{staticClass:"post"},[s("div",{staticClass:"post-image-container"},[s("img",{staticClass:"post-img",attrs:{src:t.POST.webformatURL,alt:"post-image"}}),s("ul",{staticClass:"post-tags"},t._l(t.tags,(function(e){return s("li",{key:e,staticClass:"post-tags_item"},[t._v(" "+t._s(e)+" ")])})),0)]),s("div",{staticClass:"post-data"},[s("div",{staticClass:"post-data_user"},[s("img",{staticClass:"post-data_user-img",attrs:{src:t.POST.userImageURL,alt:"user-image"}}),s("p",{staticClass:"post-data_user-name"},[t._v(t._s(t.POST.user))])]),s("div",{staticClass:"post-data_item-container"},[s("div",{staticClass:"post-data_item"},[s("p",{staticClass:"post-data_item-text"},[t._v("Likes:")]),s("div",{staticClass:"post-data_item-info"},[t._v(t._s(t.POST.likes))])]),s("div",{staticClass:"post-data_item"},[s("p",{staticClass:"post-data_item-text"},[t._v("Comments:")]),s("div",{staticClass:"post-data_item-info"},[t._v(t._s(t.POST.comments))])]),s("div",{staticClass:"post-data_item"},[s("p",{staticClass:"post-data_item-text"},[t._v("Views:")]),s("div",{staticClass:"post-data_item-info"},[t._v(t._s(t.POST.views))])]),s("div",{staticClass:"post-data_item"},[s("p",{staticClass:"post-data_item-text"},[t._v("Downloads:")]),s("div",{staticClass:"post-data_item-info"},[t._v(t._s(t.POST.downloads))])])])])])],1)},it=[],ot={name:"PostPage",components:{},data:function(){return{loading:!1}},computed:Object(C["a"])(Object(C["a"])({},Object(n["b"])(["POST"])),{},{tags:function(){return this.POST.tags.split(", ")}}),created:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("GET_POST_BY_ID",t.$route.params);case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}},rt=ot,ct=(s("689a"),Object(_["a"])(rt,nt,it,!1,null,"03988072",null)),lt=ct.exports;a["default"].use(h["a"]);var ut=[{path:"/",component:at},{path:"/:id",component:lt}],dt=new h["a"]({routes:ut}),pt=(s("cc73"),s("6cf9"));s("4ec3"),a["default"].use(pt["a"]),a["default"].component("main-template",v),new a["default"]({router:dt,store:u,render:function(t){return t(v)}}).$mount("#app")},"689a":function(t,e,s){"use strict";s("2297")},"85ec":function(t,e,s){},"93d7":function(t,e,s){},9458:function(t,e,s){"use strict";s("a36e")},a36e:function(t,e,s){},a63a:function(t,e,s){},aae0:function(t,e,s){},b480:function(t,e,s){},b9a0:function(t,e,s){"use strict";s("a63a")},c0bf:function(t,e,s){"use strict";s("b480")},c1c3:function(t,e,s){},d38a:function(t,e,s){"use strict";s("aae0")},e4f6:function(t,e,s){}});
//# sourceMappingURL=app.4558ca98.js.map