"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6858],{6858:(Z,r,i)=>{i.r(r),i.d(r,{LangPageModule:()=>y});var c=i(9808),u=i(3075),h=i(3697),n=i(3349),g=i(655),t=i(5e3),p=i(6419),m=i(4665);function v(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"ion-content",3),t.TgZ(1,"ion-searchbar",4),t.NdJ("ionInput",function(s){return t.CHM(e),t.oxw().search(s)}),t.qZA(),t._UZ(2,"ion-list"),t._UZ(3,"br"),t.TgZ(4,"ion-button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw().update()}),t._uU(5,"Cambiar idioma"),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(4),t.Q6J("disabled","none"==e.lid)}}const f=[{path:"",component:(()=>{class a{constructor(e,o,s,d,x){this.server=e,this.toastController=o,this.loadingController=s,this.nav=d,this.events=x,this.lid="none",localStorage.getItem("lid")&&(this.lid=localStorage.getItem("lid")),this.text=JSON.parse(localStorage.getItem("app_text"))}ngOnInit(){this.loadData()}loadData(){return(0,g.mG)(this,void 0,void 0,function*(){const e=yield this.loadingController.create({message:"Please wait...",mode:"ios"});yield e.present(),this.server.lang().subscribe(o=>{console.log(o),this.data=o.data,e.dismiss()})})}presentToast(e){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3,position:"top"})).present()})}search(e){var o=e.target.value;if(!(o&&o.length>0))return this.loadData();o&&""!=o.trim()&&(this.data=this.data.filter(s=>s.name.toLowerCase().indexOf(o.toLowerCase())>-1))}setLang(e,o){this.lid=e,this.type=o}update(){null==this.type&&(this.type=0),this.events.publish("lang_change",this.type),localStorage.setItem("lid",this.lid),localStorage.setItem("app_type",this.type),this.presentToast("El idioma se ah actualizado con exito."),localStorage.getItem("city_id")?this.nav.navigateRoot("/home"):this.nav.navigateRoot("/city")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.N),t.Y36(n.yF),t.Y36(n.HT),t.Y36(n.SH),t.Y36(m.n))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-lang"]],decls:7,vars:2,consts:[["color","white"],["slot","start"],["padding","true",4,"ngIf"],["padding","true"],["mode","ios","color","light",3,"ionInput"],["color","primary","expand","block","size","large","type","button","mode","ios",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.YNc(6,v,6,1,"ion-content",2)),2&e&&(t.xp6(5),t.Oqu(o.text.language),t.xp6(1),t.Q6J("ngIf",o.text))},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.wd,c.O5,n.W2,n.VI,n.j9,n.q_,n.YG],styles:[""]}),a})()}];let y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[c.ez,u.u5,n.Pc,h.Bz.forChild(f)]]}),a})()}}]);