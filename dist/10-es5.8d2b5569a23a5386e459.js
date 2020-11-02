!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UYtH:function(n,r,o){"use strict";o.r(r),o.d(r,"PlanningBoardModule",(function(){return _}));var i,a=o("mrSG"),c=o("AytR"),s=o("tk/3"),p=o("wd/R"),b=o.n(p),l=o("9e2Z"),u=o("fXoL"),m=o("ofXK"),f=o("TY1r"),d=o("sYmb"),g=((i=function t(){e(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u.Ib({type:i,selectors:[["app-browser-compatibility-error"]],decls:9,vars:6,consts:[[1,"browser-compatibility-error"],[1,"montserrat-text"]],template:function(t,e){1&t&&(u.Ub(0,"div",0),u.Ub(1,"mat-icon"),u.Pc(2,"error"),u.Tb(),u.Ub(3,"h3",1),u.Pc(4),u.lc(5,"translate"),u.Tb(),u.Ub(6,"p"),u.Pc(7),u.lc(8,"translate"),u.Tb(),u.Tb()),2&t&&(u.Bb(4),u.Rc(" ",u.mc(5,2,"browser-compatibility.message")," "),u.Bb(3),u.Rc(" ",u.mc(8,4,"browser-compatibility.error")," "))},directives:[f.a],pipes:[d.d],styles:[".browser-compatibility-error[_ngcontent-%COMP%]{padding:100px 0 0 90px}.browser-compatibility-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#e8e7e6;font-size:48px;height:48px;margin-bottom:32px}.browser-compatibility-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;font-size:60px;margin-bottom:24px}.browser-compatibility-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:40px;font-size:16px;color:#85756f}"]}),i);function h(t,e){1&t&&(u.Ub(0,"div",2),u.Pb(1,"planning-board"),u.Tb())}function w(t,e){1&t&&u.Pb(0,"app-browser-compatibility-error")}var v,y,C=((v=function(){function n(t,r){e(this,n),this.browserDetectionService=r,this.httpClient=new s.c(t),this.isCompatibleWithCustomComponents&&this.addPlanningBoardWebComponent()}var r,o,i;return r=n,(o=[{key:"getVersion",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=b()().valueOf(),t.next=3,this.httpClient.get("".concat(c.a.planning_board_url,"/static/version.json?t=").concat(e)).toPromise();case 3:return t.abrupt("return",t.sent.version);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"addPlanningBoardWebComponent",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!customElements.get("planning-board")){t.next=2;break}return t.abrupt("return");case 2:return e=document.createElement("script"),t.next=5,this.getVersion();case 5:n=t.sent,e.src="".concat(c.a.planning_board_url,"/static/js/main.js?v=").concat(n),document.body.appendChild(e);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"isCompatibleWithCustomComponents",get:function(){return this.browserDetectionService.isCompatibleWithCustomElements()}}])&&t(r.prototype,o),i&&t(r,i),n}()).\u0275fac=function(t){return new(t||v)(u.Ob(s.b),u.Ob(l.a))},v.\u0275cmp=u.Ib({type:v,selectors:[["app-planning-board"]],features:[u.Ab([l.a])],decls:3,vars:2,consts:[["class","row",4,"ngIf","ngIfElse"],["compatibilityError",""],[1,"row"]],template:function(t,e){if(1&t&&(u.Nc(0,h,2,0,"div",0),u.Nc(1,w,1,0,"ng-template",null,1,u.Oc)),2&t){var n=u.Ac(2);u.rc("ngIf",e.isCompatibleWithCustomComponents)("ngIfElse",n)}},directives:[m.p,g],styles:["*[_ngcontent-%COMP%]{height:100%;display:flex;flex:1}"]}),v),P=o("tyNb"),x=o("PCNd"),O=[{path:"",component:C}],_=((y=function t(){e(this,t)}).\u0275mod=u.Mb({type:y}),y.\u0275inj=u.Lb({factory:function(t){return new(t||y)},imports:[[P.l.forChild(O),x.a,m.c],P.l]}),y)}}])}();