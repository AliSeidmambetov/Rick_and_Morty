(()=>{"use strict";var e={4556:(e,t,r)=>{r(3792),r(3362),r(9085),r(9391);var n=r(3751),a=r(641),o={id:"app"},i={class:"character-list"},l={class:"pagination"},c=["disabled"];function u(e,t,r,n,u,s){var p=(0,a.g2)("AppHeader"),d=(0,a.g2)("CharacterCard");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(p,{filters:n.filters,"onUpdate:filters":n.updateFilters},null,8,["filters","onUpdate:filters"]),(0,a.Lk)("div",i,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.characters,(function(e){return(0,a.uX)(),(0,a.Wv)(d,{key:e.id,character:e},null,8,["character"])})),128))]),(0,a.Lk)("div",l,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=function(){return n.prevPage&&n.prevPage.apply(n,arguments)}),disabled:1===n.page},"Previous",8,c),(0,a.Lk)("button",{onClick:t[1]||(t[1]=function(){return n.nextPage&&n.nextPage.apply(n,arguments)})},"Next")])])}var s=r(4048),p=r(388),d=r(953),v=(r(2010),r(4335)),f="https://rickandmortyapi.com/api/character/",h=function(){var e=(0,p.A)((0,s.A)().mark((function e(){var t,r,n,a,o=arguments;return(0,s.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,r=o.length>1&&void 0!==o[1]?o[1]:{},n={page:t,name:r.name||"",status:r.status||""},e.next=5,v.A.get(f,{params:n});case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=r(33),m=function(e){return(0,a.Qi)("data-v-7c263bd1"),e=e(),(0,a.jt)(),e},g={class:"character-card"},b=["src"],y={class:"character-info"},L=m((function(){return(0,a.Lk)("strong",null,"Last known location:",-1)})),A=m((function(){return(0,a.Lk)("strong",null,"First seen in:",-1)}));function _(e,t,r,n,o,i){return(0,a.uX)(),(0,a.CE)("div",g,[(0,a.Lk)("img",{src:r.character.image,alt:"Character image"},null,8,b),(0,a.Lk)("div",y,[(0,a.Lk)("h2",null,(0,k.v_)(r.character.name),1),(0,a.Lk)("p",null,[(0,a.Lk)("strong",null,(0,k.v_)(r.character.status),1),(0,a.eW)(" - "+(0,k.v_)(r.character.species),1)]),(0,a.Lk)("p",null,[L,(0,a.eW)(" "+(0,k.v_)(r.character.location.name),1)]),(0,a.Lk)("p",null,[A,(0,a.eW)(" "+(0,k.v_)(r.character.origin.name),1)])])])}const w={name:"CharacterCard",props:{character:{type:Object,required:!0}}};var F=r(6262);const C=(0,F.A)(w,[["render",_],["__scopeId","data-v-7c263bd1"]]),O=C;var x=function(e){return(0,a.Qi)("data-v-2e11032c"),e=e(),(0,a.jt)(),e},j={class:"hero__Wrapper-sc-1h2eool-0 lgTwHp"},P=x((function(){return(0,a.Lk)("h1",{class:"hero__Title-sc-1h2eool-1 jiKqlM"},"The Rick and Morty API",-1)})),T={class:"filters"},E=x((function(){return(0,a.Lk)("option",{value:""},"All",-1)})),M=x((function(){return(0,a.Lk)("option",{value:"alive"},"Alive",-1)})),R=x((function(){return(0,a.Lk)("option",{value:"dead"},"Dead",-1)})),K=x((function(){return(0,a.Lk)("option",{value:"unknown"},"Unknown",-1)})),S=[E,M,R,K];function U(e,t,r,o,i,l){return(0,a.uX)(),(0,a.CE)("section",j,[P,(0,a.Lk)("div",T,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.localFilters.name=e}),placeholder:"Filter by name"},null,512),[[n.Jo,i.localFilters.name]]),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.localFilters.status=e})},S,512),[[n.u1,i.localFilters.status]]),(0,a.Lk)("span",{class:"apply",onClick:t[2]||(t[2]=function(){return l.emitApplyFilters&&l.emitApplyFilters.apply(l,arguments)})},"Apply")])])}var W=r(9201);const X={name:"AppHeader",props:{filters:Object},data:function(){return{localFilters:(0,W.A)({},this.filters)}},methods:{emitApplyFilters:function(){this.$emit("update:filters",this.localFilters)}}},H=(0,F.A)(X,[["render",U],["__scopeId","data-v-2e11032c"]]),I=H,V={name:"App",components:{CharacterCard:O,AppHeader:I},setup:function(){var e=(0,d.KR)([]),t=(0,d.KR)(1),r=(0,d.KR)({name:"",status:""}),n=function(){var n=(0,p.A)((0,s.A)().mark((function n(){var a;return(0,s.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h(t.value,r.value);case 3:a=n.sent,e.value=a.results,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error("Failed to fetch characters",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(e){r.value=e,i()},i=function(){t.value=1,n()},l=function(){t.value+=1,n()},c=function(){t.value>1&&(t.value-=1,n())};return(0,a.sV)(n),{characters:e,page:t,filters:r,updateFilters:o,applyFilters:i,nextPage:l,prevPage:c}}},q=(0,F.A)(V,[["render",u]]),Q=q;var D=(0,n.Ef)(Q);D.mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,a,o]=e[s],l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,l,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var s=c(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self["webpackChunkRick_and_Morty"]=self["webpackChunkRick_and_Morty"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[504],(()=>r(4556)));n=r.O(n)})();
//# sourceMappingURL=app.a6a2aee2.js.map