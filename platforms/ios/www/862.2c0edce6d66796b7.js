"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[862],{862:(M,c,i)=>{i.r(c),i.d(c,{WelcomePageModule:()=>v});var r=i(9808),m=i(3075),g=i(3697),o=i(3349),d=i(655),e=i(5e3),p=i(6419);const f=["slides"];function u(n,s){if(1&n&&(e.TgZ(0,"ion-slide"),e._UZ(1,"img",4),e._UZ(2,"div",5),e.TgZ(3,"span",6),e.TgZ(4,"i"),e._uU(5,"Desliza"),e.qZA(),e.TgZ(6,"b"),e._uU(7,"> >"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.s9C("src",t.img,e.LSH),e.xp6(1),e.Q6J("innerHTML",t.title,e.oJD)}}function P(n,s){if(1&n&&(e.TgZ(0,"ion-slides",2),e.YNc(1,u,8,2,"ion-slide",3),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.data)}}function h(n,s){1&n&&(e.TgZ(0,"ion-footer"),e.TgZ(1,"div",7),e.TgZ(2,"ion-label",8),e._uU(3,"Iniciar Sesi\xf3n"),e.qZA(),e.TgZ(4,"ion-label",9),e._uU(5,"Registrarse"),e.qZA(),e.qZA(),e.qZA())}const x=[{path:"",component:(()=>{class n{constructor(t,a,l,C){this.server=t,this.loadingController=a,this.nav=l,this.menu=C,this.slideOptsTwo={slidesPerView:1,loop:!0,autoplay:!1,pagination:{el:".swiper-pagination"}},this.getStart=!1,this.menu.enable(!1)}ngOnInit(){this.loaingData()}loaingData(){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({message:"Bienvenido(a)...",mode:"md"});yield t.present(),localStorage.getItem("user_id")&&"null"!=localStorage.getItem("user_id")&&this.nav.navigateRoot("/home"),this.server.welcome().subscribe(a=>{console.log(a),this.data=a.data,this.chargePage="sliderIni",this.loadpage="EmailIn",this.IniSes=!1,t.dismiss()})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.N),e.Y36(o.HT),e.Y36(o.SH),e.Y36(o._q))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-welcome"]],viewQuery:function(t,a){if(1&t&&e.Gf(f,5),2&t){let l;e.iGM(l=e.CRH())&&(a.slides=l.first)}},decls:3,vars:2,consts:[["class","welcome",4,"ngIf"],[4,"ngIf"],[1,"welcome"],[4,"ngFor","ngForOf"],[3,"src"],[3,"innerHTML"],["slot","end",1,"slideNext"],[1,"logcast",2,"padding","25px","text-align","center"],["color","medium","routerLink","/login"],["color","medium","routerLink","/signup"]],template:function(t,a){1&t&&(e.TgZ(0,"ion-content"),e.YNc(1,P,2,1,"ion-slides",0),e.qZA(),e.YNc(2,h,6,0,"ion-footer",1)),2&t&&(e.xp6(1),e.Q6J("ngIf","sliderIni"==a.chargePage),e.xp6(1),e.Q6J("ngIf","sliderIni"==a.chargePage))},directives:[o.W2,r.O5,o.Hr,r.sg,o.A$,o.fr,o.Q$,o.YI,g.rH],styles:['*[_ngcontent-%COMP%]{font-family:SF Pro Display}.login[_ngcontent-%COMP%]{text-align:center}.welcome[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{display:block;padding:0 13px}ion-slide[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-top:2.8rem}ion-slide[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-height:50%;max-width:100%;margin:40px 0}ion-slide[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-top:25px;color:#444;font-size:12.5px}.slideNext[_ngcontent-%COMP%]{position:relative;font-size:14px;color:#444;padding:6px 0;border-radius:25px;font-family:Open Sans,sans-serif;cursor:pointer}.slideNext[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{position:absolute;width:50%;top:6px;animation:swing .9s ease-in-out;animation-iteration-count:infinite}.logcast[_ngcontent-%COMP%] > ion-label[_ngcontent-%COMP%]{font-size:14px;margin:10px;position:relative}.logcast[_ngcontent-%COMP%] > ion-label[_ngcontent-%COMP%]:nth-child(1):after{position:absolute;content:"";top:0;width:1px;height:100%;margin-left:8px;background-color:#7c7c7c}@keyframes swing{10%{transform:translate(3px)}25%{transform:translate(-1.5px)}50%{transform:translate(1px)}to{transform:translate(0)}}']}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,m.u5,o.Pc,g.Bz.forChild(x)]]}),n})()}}]);