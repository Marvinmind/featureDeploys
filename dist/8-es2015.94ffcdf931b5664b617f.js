(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{PN7o:function(n,t,e){"use strict";e.r(t),e.d(t,"AuthenticationModule",(function(){return J}));var o=e("ofXK"),r=e("tyNb"),i=e("mrSG"),c=e("lJxs"),a=e("pLZG"),s=e("IzEk"),l=e("5+tZ"),g=e("JIr8"),d=e("vkgz"),m=e("itXk"),b=e("Cfvw"),f=e("LRne"),p=e("AytR"),u=e("jFgN"),P=e("fXoL"),h=e("IUeq"),O=e("TY1r"),C=e("IRfi"),w=e("A2Vd"),M=e("3Pt+"),_=e("8h8E"),v=e("BLDC"),x=e("sYmb");function T(n,t){1&n&&P.Pb(0,"div")}const y=function(n){return{"d-none":n}};function I(n,t){if(1&n&&P.Pb(0,"div",9),2&n){const n=P.kc();P.rc("ngClass",P.wc(1,y,n.loading))}}function k(n,t){if(1&n&&P.Pb(0,"div",9),2&n){const n=P.kc();P.rc("ngClass",P.wc(1,y,n.loading))}}function R(n,t){if(1&n&&(P.Ub(0,"div",9),P.Ub(1,"div",11),P.Pb(2,"mat-icon",12),P.Ub(3,"h3",13),P.Pc(4),P.lc(5,"translate"),P.Tb(),P.Ub(6,"p"),P.Pc(7),P.lc(8,"translate"),P.Tb(),P.Ub(9,"a",14),P.Pc(10),P.lc(11,"translate"),P.Tb(),P.Tb(),P.Tb()),2&n){const n=P.kc(2);P.rc("ngClass",P.wc(11,y,n.loading)),P.Bb(4),P.Rc(" ",P.mc(5,5,"userActions.emailVerification.success.message")," "),P.Bb(3),P.Rc(" ",P.mc(8,7,"userActions.emailVerification.success.info")," "),P.Bb(2),P.Cb("href",n.homepage,P.Gc),P.Bb(1),P.Rc(" ",P.mc(11,9,"userActions.emailVerification.success.buttonTxt")," ")}}function U(n,t){if(1&n&&(P.Nc(0,R,12,13,"div",10),P.lc(1,"async")),2&n){const n=P.kc(),t=P.Ac(11);P.rc("ngIf",P.mc(1,2,n.verifyEmail$))("ngIfElse",t)}}function A(n,t){1&n&&(P.Ub(0,"mat-error"),P.Pc(1),P.lc(2,"translate"),P.Tb()),2&n&&(P.Bb(1),P.Rc(" ",P.mc(2,1,"error.required")," "))}const E=function(n){return{requiredLength:n}};function S(n,t){if(1&n&&(P.Ub(0,"mat-error"),P.Pc(1),P.lc(2,"translate"),P.Tb()),2&n){P.kc();const n=P.Ac(10);P.Bb(1),P.Rc(" ",P.nc(2,1,"error.minlength",P.wc(4,E,null==n||null==n.errors||null==n.errors.minlength?null:n.errors.minlength.requiredLength))," ")}}function B(n,t){if(1&n&&(P.Ub(0,"div",26),P.Ub(1,"div",27),P.Pb(2,"div",28),P.Pb(3,"div",28),P.Pb(4,"div",28),P.Ub(5,"div",29),P.Pc(6),P.lc(7,"translate"),P.Tb(),P.Tb(),P.Tb()),2&n){const n=P.kc(3);P.Bb(2),P.Gb("active",n.getPasswordStrength()===n.passwordStrength.STRONG),P.Bb(1),P.Gb("active",n.getPasswordStrength()===n.passwordStrength.MEDIUM),P.Bb(1),P.Gb("active",n.getPasswordStrength()===n.passwordStrength.LOW),P.Bb(2),P.Qc(P.mc(7,7,"register.password-meter."+n.getPasswordStrength()))}}function N(n,t){if(1&n){const n=P.Vb();P.Ub(0,"div",9),P.Ub(1,"div",15),P.Ub(2,"h3",13),P.Pc(3),P.lc(4,"translate"),P.Tb(),P.Ub(5,"p"),P.Pc(6),P.Tb(),P.Ub(7,"div",16),P.Ub(8,"mat-form-field",17),P.Ub(9,"input",18,19),P.gc("ngModelChange",(function(t){return P.Ec(n),P.kc(2).password=t})),P.lc(12,"translate"),P.Tb(),P.Pb(13,"mat-icon",20),P.Ub(14,"mat-icon",21),P.gc("click",(function(){P.Ec(n);const t=P.kc(2);return t.isPasswordVisible=!t.isPasswordVisible})),P.Pc(15),P.Tb(),P.Nc(16,A,3,3,"mat-error",22),P.Nc(17,S,3,6,"mat-error",22),P.Tb(),P.Nc(18,B,8,9,"div",23),P.Ub(19,"div",24),P.Ub(20,"span"),P.Pc(21),P.lc(22,"translate"),P.Tb(),P.Tb(),P.Tb(),P.Ub(23,"button",25),P.gc("click",(function(){P.Ec(n);const t=P.kc(2);return t.verifyPassword(t.password)})),P.Pc(24),P.lc(25,"translate"),P.Tb(),P.Tb(),P.Tb()}if(2&n){const n=t.ngIf,e=P.Ac(10),o=P.kc(2);P.rc("ngClass",P.wc(23,y,o.passwordChanged||o.loading)),P.Bb(3),P.Rc(" ",P.mc(4,15,"userActions.resetPassword.form.title")," "),P.Bb(3),P.Rc(" ",n," "),P.Bb(3),P.Gb("ngInvalid",e.errors),P.sc("placeholder",P.mc(12,17,"register.password")),P.rc("ngModel",o.password)("type",o.isPasswordVisible?"password":"text"),P.Bb(6),P.Rc("",o.isPasswordVisible?"visibility":"visibility_off"," "),P.Bb(1),P.rc("ngIf",null==e||null==e.errors?null:e.errors.required),P.Bb(1),P.rc("ngIf",null==e||null==e.errors?null:e.errors.minlength),P.Bb(1),P.rc("ngIf",o.getPasswordStrength()!==o.passwordStrength.INSUFFICIENT),P.Bb(3),P.Qc(P.mc(22,19,"register.passwordHint")),P.Bb(2),P.rc("disabled",e.invalid),P.Bb(1),P.Rc(" ",P.mc(25,21,"userActions.resetPassword.form.buttonTxt")," ")}}function j(n,t){1&n&&P.Pb(0,"div")}function V(n,t){if(1&n&&(P.Nc(0,N,26,25,"div",10),P.lc(1,"async"),P.Nc(2,j,1,0,"div",1)),2&n){const n=P.kc(),t=P.Ac(13),e=P.Ac(15);P.rc("ngIf",P.mc(1,4,n.verifyResetPasswordActionCode$))("ngIfElse",t),P.Bb(2),P.rc("ngIf",n.passwordChanged)("ngIfThen",e)}}function z(n,t){if(1&n&&(P.Ub(0,"div",30),P.Ub(1,"mat-icon"),P.Pc(2,"error"),P.Tb(),P.Ub(3,"h3",13),P.Pc(4),P.lc(5,"translate"),P.Tb(),P.Ub(6,"p"),P.Pc(7),P.lc(8,"translate"),P.Tb(),P.Ub(9,"a",14),P.Pc(10),P.lc(11,"translate"),P.Tb(),P.Tb()),2&n){const n=P.kc();P.rc("ngClass",P.wc(11,y,n.loading)),P.Bb(4),P.Rc(" ",P.mc(5,5,"userActions.emailVerification.error.message")," "),P.Bb(3),P.Rc(" ",P.mc(8,7,"userActions.emailVerification.error.info")," "),P.Bb(2),P.Cb("href",n.homepage,P.Gc),P.Bb(1),P.Rc(" ",P.mc(11,9,"userActions.emailVerification.error.buttonTxt")," ")}}function L(n,t){if(1&n&&(P.Ub(0,"div",31),P.Ub(1,"mat-icon"),P.Pc(2,"error"),P.Tb(),P.Ub(3,"h3",13),P.Pc(4),P.lc(5,"translate"),P.Tb(),P.Ub(6,"p"),P.Pc(7),P.lc(8,"translate"),P.Tb(),P.Ub(9,"a",32),P.Pc(10),P.lc(11,"translate"),P.Tb(),P.Tb()),2&n){const n=P.kc();P.rc("ngClass",P.wc(10,y,n.loading)),P.Bb(4),P.Rc(" ",P.mc(5,4,"userActions.resetPassword.error.message")," "),P.Bb(3),P.Rc(" ",P.mc(8,6,"userActions.resetPassword.error.info")," "),P.Bb(3),P.Rc(" ",P.mc(11,8,"userActions.resetPassword.error.buttonTxt")," ")}}function $(n,t){if(1&n&&(P.Ub(0,"div",11),P.Pb(1,"mat-icon",12),P.Ub(2,"h3",13),P.Pc(3),P.lc(4,"translate"),P.Tb(),P.Ub(5,"p"),P.Pc(6),P.lc(7,"translate"),P.Tb(),P.Ub(8,"a",14),P.Pc(9),P.lc(10,"translate"),P.Tb(),P.Tb()),2&n){const n=P.kc();P.Bb(3),P.Rc(" ",P.mc(4,4,"userActions.resetPassword.success.message")," "),P.Bb(3),P.Rc(" ",P.mc(7,6,"userActions.resetPassword.success.info")," "),P.Bb(2),P.Cb("href",n.homepage,P.Gc),P.Bb(1),P.Rc(" ",P.mc(10,8,"userActions.resetPassword.success.buttonTxt")," ")}}function q(n,t){1&n&&P.Pb(0,"app-pulsing-craftnote-icon")}let G=(()=>{class n{constructor(n,t){this.activeRoute=n,this.authService=t,this.USER_ACTIONS={VERIFY_EMAIL:"verifyEmail",RESET_PASSWORD:"resetPassword",RECOVER_EMAIL:"recoverEmail"},this.passwordStrength=u.a,this.isPasswordVisible=!0,this.loading=!0,this.passwordChanged=!1,this.homepage=p.a.app_dynamic_link,this.mode$=this.activeRoute.queryParams.pipe(Object(c.a)(n=>n.mode||null)),this.oobCode$=this.activeRoute.queryParams.pipe(Object(c.a)(n=>n.oobCode||null)),this.verifyEmail$=this.mode$.pipe(Object(a.a)(n=>n===this.USER_ACTIONS.VERIFY_EMAIL),Object(s.a)(1),Object(l.a)(()=>Object(m.b)([this.oobCode$,this.activeRoute.queryParams.pipe(Object(c.a)(n=>n.token||null))])),Object(l.a)(([n,t])=>Object(b.a)(this.authService.verifyEmailVerificationCode(n,t))),Object(g.a)(()=>Object(f.a)(!1)),Object(d.a)(()=>{this.loading=!1})),this.verifyResetPasswordActionCode$=this.mode$.pipe(Object(a.a)(n=>n===this.USER_ACTIONS.RESET_PASSWORD),Object(s.a)(1),Object(l.a)(()=>this.oobCode$),Object(l.a)(n=>Object(b.a)(this.authService.verifyPasswordResetCode(n))),Object(g.a)(()=>Object(f.a)(!1)),Object(d.a)(()=>{this.loading=!1}))}verifyPassword(n){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.oobCode$.pipe(Object(s.a)(1)).toPromise();yield this.authService.confirmResetPassword(t,n),this.passwordChanged=!0}))}getPasswordStrength(){return Object(u.b)(this.password)}}return n.\u0275fac=function(t){return new(t||n)(P.Ob(r.a),P.Ob(h.a))},n.\u0275cmp=P.Ib({type:n,selectors:[["app-user-actions"]],decls:18,vars:10,consts:[[1,"row","h-100","align-items-center","justify-content-center","user-actions-container"],[4,"ngIf","ngIfThen"],[3,"ngClass",4,"ngIf","ngIfThen"],["verifyEmail",""],["resetPasswordForm",""],["verifyEmailError",""],["resetPasswordError",""],["passwordChangedSuccessfully",""],["loadingAnimation",""],[3,"ngClass"],[3,"ngClass",4,"ngIf","ngIfElse"],[1,"email-verification-container","text-center"],["svgIcon","email-verified"],[1,"montserrat-text"],[1,"craftnote-btn","medium","primary","text-white"],[1,"reset-password-container","text-center","montserrat-text-light"],[1,"form-group"],[1,"w-100"],["matInput","","minlength","8","name","password","required","",3,"ngModel","type","placeholder","ngModelChange"],["passwordField","ngModel","pw","ngModel"],["matPrefix","","svgIcon","custom-lock"],["appEventStopPropagation","","matSuffix","",1,"pointer",3,"click"],[4,"ngIf"],["class","mt-2 text-right",4,"ngIf"],[1,"form-group","mt-3"],[1,"craftnote-btn","large","primary","text-white",3,"disabled","click"],[1,"mt-2","text-right"],[1,"password-meter","text-right","align-items-center"],[1,"chip"],[1,"text"],[1,"verification-error-container",3,"ngClass"],[1,"resetPassword-error-container",3,"ngClass"],["routerLink","/password-forgotten",1,"craftnote-btn","medium","primary","text-white"]],template:function(n,t){if(1&n&&(P.Ub(0,"div",0),P.Nc(1,T,1,0,"div",1),P.Nc(2,I,1,3,"div",2),P.lc(3,"async"),P.Nc(4,k,1,3,"div",2),P.lc(5,"async"),P.Tb(),P.Nc(6,U,2,4,"ng-template",null,3,P.Oc),P.Nc(8,V,3,6,"ng-template",null,4,P.Oc),P.Nc(10,z,12,13,"ng-template",null,5,P.Oc),P.Nc(12,L,12,12,"ng-template",null,6,P.Oc),P.Nc(14,$,11,10,"ng-template",null,7,P.Oc),P.Nc(16,q,1,0,"ng-template",null,8,P.Oc)),2&n){const n=P.Ac(7),e=P.Ac(9),o=P.Ac(17);P.Bb(1),P.rc("ngIf",t.loading)("ngIfThen",o),P.Bb(1),P.rc("ngIf",P.mc(3,6,t.mode$)===t.USER_ACTIONS.VERIFY_EMAIL)("ngIfThen",n),P.Bb(2),P.rc("ngIf",P.mc(5,8,t.mode$)===t.USER_ACTIONS.RESET_PASSWORD)("ngIfThen",e)}},directives:[o.p,o.n,O.a,C.b,w.b,M.b,M.m,M.x,M.q,M.t,C.f,_.a,C.g,C.a,r.k,v.a],pipes:[o.b,x.d],styles:[".craftnote-btn[_ngcontent-%COMP%]{text-decoration:none;padding:10px 25px;border:2px solid #4f4f4f;border-radius:30px;font-weight:700;max-width:260px}.craftnote-btn.medium[_ngcontent-%COMP%]{padding:10px 45px}.craftnote-btn.large[_ngcontent-%COMP%]{padding:10px 65px}.craftnote-btn.primary[_ngcontent-%COMP%]{background-color:#ff5c20;border-color:#ff5c20}.craftnote-btn[disabled][_ngcontent-%COMP%]{opacity:.5}.password-meter[_ngcontent-%COMP%]{flex-direction:row-reverse;display:flex;text-transform:capitalize}.password-meter[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-right:5px;color:#ff5c20}.password-meter[_ngcontent-%COMP%] > div.chip[_ngcontent-%COMP%]{display:inline-block;width:30px;height:6px;border-radius:5px;margin-right:5px;background:#e3e3e3}.password-meter[_ngcontent-%COMP%] > div.chip.active[_ngcontent-%COMP%], .password-meter[_ngcontent-%COMP%] > div.chip.active[_ngcontent-%COMP%] ~ div.chip[_ngcontent-%COMP%]{background:#ff5c20}.user-actions-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{text-decoration:underline;color:var(--app-primary);cursor:pointer}.user-actions-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline!important}.user-actions-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{color:#85756f;margin-bottom:2rem!important}.user-actions-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{border:2px solid #807a77;color:#807a77;border-radius:8px;padding:0 10px;height:56px}.user-actions-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;vertical-align:middle;line-height:.7em}.user-actions-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-icon[svgicon][_ngcontent-%COMP%]{margin-top:-10px}.user-actions-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{vertical-align:middle;padding:1px 10px 0;margin-top:5px;font-size:16px}.user-actions-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-10px}.user-actions-container[_ngcontent-%COMP%]   mat-form-field.ng-invalid.ng-dirty[_ngcontent-%COMP%]{border-color:#e53935;color:#e53935}.user-actions-container[_ngcontent-%COMP%]     .mat-form-field-label, .user-actions-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif}.user-actions-container[_ngcontent-%COMP%]     .mat-form-field-appearance-legacy.mat-form-field-should-float .mat-form-field-label, .user-actions-container[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label{margin-top:10px}.user-actions-container[_ngcontent-%COMP%]     .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:12px}.user-actions-container[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}.user-actions-container[_ngcontent-%COMP%]     .mat-form-field-subscript-wrapper{margin-top:15px}.user-actions-container[_ngcontent-%COMP%]     #remember-me .mat-checkbox-inner-container{width:15px!important;height:15px!important}.user-actions-container[_ngcontent-%COMP%]     mat-form-field.mat-focused .mat-placeholder-required{color:var(--app-primary)}.user-actions-container[_ngcontent-%COMP%]     mat-form-field label{margin-left:10px}.user-actions-container[_ngcontent-%COMP%]     a{color:#807a77}.user-actions-container[_ngcontent-%COMP%]     .fa-apple{margin:2px 0 0 10px;font-size:20px}.resetPassword-error-container[_ngcontent-%COMP%], .verification-error-container[_ngcontent-%COMP%]{padding:40px}.resetPassword-error-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .verification-error-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#e8e7e6;font-size:48px;height:48px;margin-bottom:32px}.resetPassword-error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .verification-error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;font-size:32px;margin-bottom:24px}.resetPassword-error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .verification-error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:40px;font-size:16px;color:#85756f}.email-verification-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .reset-password-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#e8e7e6;font-size:84px;height:84px;width:84px;margin-bottom:65px}.email-verification-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .reset-password-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:bolder;font-size:32px;margin-bottom:24px}.email-verification-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .reset-password-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:40px;font-size:16px;color:#85756f}.email-verification-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .reset-password-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:484px}.reset-password-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:inherit;font-size:inherit;height:24px;width:24px;margin-bottom:inherit}.reset-password-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:10px}.reset-password-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:25px}.reset-password-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:3rem!important}.logo[_ngcontent-%COMP%]{height:80px;width:80px}.animate[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}.pulse[_ngcontent-%COMP%]{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.2)}}@keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.2)}}@media (max-width:767.98px){.reset-password-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:unset;width:80%}}"]}),n})();var F=e("PCNd"),D=e("vMH6");const Y=[{path:"",component:G}];let J=(()=>{class n{}return n.\u0275mod=P.Mb({type:n}),n.\u0275inj=P.Lb({factory:function(t){return new(t||n)},imports:[[o.c,F.a,r.l.forChild(Y),D.a]]}),n})()}}]);