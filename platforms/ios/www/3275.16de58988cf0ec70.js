"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3275],{3275:(Q,m,l)=>{l.r(m),l.d(m,{SetaddressPageModule:()=>M});var d=l(9808),_=l(3075),s=l(3349),p=l(3697),h=l(655),t=l(5e3),f=l(6419),Z=l(7618),x=l(1084);function S(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"ion-searchbar",7),t.NdJ("ionInput",function(n){return t.CHM(e),t.oxw().search(n)})("ionClear",function(){return t.CHM(e),t.oxw().clearSearch()})("ngModelChange",function(n){return t.CHM(e),t.oxw().autocomplete.input=n}),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.autocomplete.input)}}function T(i,a){1&i&&(t.TgZ(0,"i"),t._uU(1,"..."),t.qZA())}function A(i,a){if(1&i&&(t.TgZ(0,"p",12),t._uU(1),t.ALo(2,"slice"),t.YNc(3,T,2,0,"i",3),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.Dn7(2,2,e.structured_formatting.secondary_text,0,45)," "),t.xp6(2),t.Q6J("ngIf",e.structured_formatting.secondary_text.length>45)}}function v(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item",9),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).SelectSearchResult(r)}),t.TgZ(1,"ion-avatar",0),t._UZ(2,"ion-icon",10),t.qZA(),t.TgZ(3,"ion-label"),t.TgZ(4,"h4"),t._uU(5),t.qZA(),t.YNc(6,A,4,6,"p",11),t.qZA(),t.qZA()}if(2&i){const e=a.$implicit;t.xp6(5),t.Oqu(e.structured_formatting.main_text),t.xp6(1),t.Q6J("ngIf",e.structured_formatting.secondary_text)}}function I(i,a){if(1&i&&(t.TgZ(0,"ion-list"),t.YNc(1,v,7,2,"ion-item",8),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.autocompleteItems)}}function P(i,a){1&i&&(t.TgZ(0,"ion-item"),t.TgZ(1,"ion-avatar",0),t._UZ(2,"ion-icon",13),t.qZA(),t.TgZ(3,"ion-label"),t.TgZ(4,"h4"),t._uU(5,"Tu Ubicaci\xf3n"),t.qZA(),t.TgZ(6,"p"),t._UZ(7,"ion-skeleton-text",14),t.qZA(),t.qZA(),t.qZA())}function y(i,a){1&i&&(t.TgZ(0,"i"),t._uU(1,"..."),t.qZA())}function q(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item",15),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return n.saveAddress(n.MyLocation[0],"LocationNow")}),t.TgZ(1,"ion-avatar",0),t._UZ(2,"ion-icon",13),t.qZA(),t.TgZ(3,"ion-label"),t.TgZ(4,"h4"),t._uU(5,"Tu Ubicaci\xf3n"),t.qZA(),t.TgZ(6,"p",12),t._uU(7),t.ALo(8,"slice"),t.YNc(9,y,2,0,"i",3),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(7),t.hij(" ",t.Dn7(8,2,e.LocationNow,0,45)," "),t.xp6(2),t.Q6J("ngIf",e.LocationNow.length>45)}}function C(i,a){if(1&i&&(t.TgZ(0,"h4"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.type)}}function N(i,a){1&i&&(t.TgZ(0,"h4"),t._uU(1,"Sin Especificar"),t.qZA())}function w(i,a){1&i&&(t.TgZ(0,"i"),t._uU(1,"..."),t.qZA())}function F(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item-sliding"),t.TgZ(1,"ion-item",15),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).saveAddress(r,0)}),t.TgZ(2,"ion-avatar",0),t._UZ(3,"ion-icon",17),t.qZA(),t.TgZ(4,"ion-label"),t.YNc(5,C,2,1,"h4",3),t.YNc(6,N,2,0,"h4",3),t.TgZ(7,"p",12),t._uU(8),t.ALo(9,"slice"),t.YNc(10,w,2,0,"i",3),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item-options",18),t.TgZ(12,"ion-item-option",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).removeAddress(r.id)}),t._UZ(13,"ion-icon",20),t._uU(14," Eliminar "),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=a.$implicit;t.xp6(5),t.Q6J("ngIf",e.type),t.xp6(1),t.Q6J("ngIf",!e.type),t.xp6(2),t.hij(" ",t.Dn7(9,4,e.address,0,45)," "),t.xp6(2),t.Q6J("ngIf",e.address.length>45)}}function J(i,a){if(1&i&&(t.TgZ(0,"ion-list"),t.YNc(1,F,15,8,"ion-item-sliding",16),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.address)}}const U=[{path:"",component:(()=>{class i{constructor(e,o,n,r,c,g,u,Y){this.server=e,this.toastController=o,this.geolocation=n,this.nativeGeocoder=r,this.zone=c,this.nav=g,this.loadingController=u,this.platform=Y,this.MyLocation=[],this.lat=localStorage.getItem("current_lat")?localStorage.getItem("current_lat"):0,this.lng=localStorage.getItem("current_lng")?localStorage.getItem("current_lng"):0}ngOnInit(){}ionViewWillEnter(){this.admin=JSON.parse(localStorage.getItem("admin")),this.autocomplete={input:""},this.searchQuery=null,this.hasSearch=!1,this.autocompleteItems=[],this.platform.ready().then(()=>{google&&this.loadData()})}loadData(){this.server.getAllAdress(localStorage.getItem("user_id")).subscribe(e=>{this.address=e.data}),this.geolocation.getCurrentPosition().then(e=>{this.lat=e.coords.latitude,this.lng=e.coords.longitude,this.getAddressFromCoords(e.coords.latitude,e.coords.longitude)}).catch(e=>{console.log("Error al obtener la ubicaci\xf3n",e)})}getAddressFromCoords(e,o){this.server.GeocodeFromCoords(e,o,this.admin.ApiKey_google).subscribe(n=>{this.LocationNow=n.results[0].formatted_address,this.MyLocation.push({lat:n.results[0].geometry.location.lat,lng:n.results[0].geometry.location.lng,address:this.LocationNow})})}search(e){this.GoogleAutocomplete=new google.maps.places.AutocompleteService;var o=e.target.value;if(o&&o.length>0){if(this.data=null,this.hasSearch=o,""==this.autocomplete.input)return void(this.autocompleteItems=[]);this.GoogleAutocomplete.getPlacePredictions({input:this.autocomplete.input},(n,r)=>{this.autocompleteItems=[],this.zone.run(()=>{n.forEach(c=>{this.autocompleteItems.push(c)})})})}else this.ngOnInit(),this.hasSearch=!1}clearSearch(){this.searchQuery=null,this.hasSearch=!1,this.autocompleteItems=[]}SelectSearchResult(e){var o=new google.maps.Geocoder;let n=this;o.geocode({placeId:e.place_id},function(c,g){if("OK"!==g)return void window.alert("Geocoder failed due to: "+g);let u={queryParams:{location:JSON.stringify(c[0].geometry.location),address:e.description}};n.nav.navigateForward(["/address"],u)})}removeAddress(e){this.server.trashAddress(e).subscribe(o=>{o?(this.presentToast("La direcci\xf3n se ha eliminado...","success"),this.ionViewWillEnter()):this.presentToast(o,"danger")})}saveAddress(e,o){return(0,h.mG)(this,void 0,void 0,function*(){const n=yield this.loadingController.create({message:"Guardando Direcci\xf3n..."});if(yield n.present(),"LocationNow"==o){var r={address:e.address,lat:this.lat,lng:this.lng,user_id:localStorage.getItem("user_id")};this.server.saveAddress(r).subscribe(c=>{"done"==c.msg?(localStorage.setItem("address",e.address),localStorage.setItem("address_id",c.id),localStorage.setItem("current_lat",this.lat),localStorage.setItem("current_lng",this.lng),this.nav.navigateForward("home"),this.presentToast("Direcci\xf3n guardada con \xe9xito.","success")):this.presentToast(JSON.stringify(c.data),"danger"),n.dismiss()})}else localStorage.setItem("address",e.address),localStorage.setItem("address_id",e.id),localStorage.setItem("current_lat",e.lat),localStorage.setItem("current_lng",e.lng),this.nav.navigateForward("home"),this.presentToast("Direcci\xf3n guardada con \xe9xito.","success"),n.dismiss()})}presentToast(e,o){return(0,h.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3,position:"top",color:o})).present()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.N),t.Y36(s.yF),t.Y36(Z.b),t.Y36(x.d),t.Y36(t.R0b),t.Y36(s.SH),t.Y36(s.HT),t.Y36(s.t4))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-setaddress"]],decls:15,vars:5,consts:[["slot","start"],[2,"font-size","17px","font-family","SF Pro Display","margin-left","-8px !important"],["class","searchBar",4,"ngIf"],[4,"ngIf"],[3,"click",4,"ngIf"],["expand","full","color","success","mode","ios"],[1,"searchBar"],["placeholder","Ingrese una nueva direcci\xf3n","mode","ios","color","light",2,"font-size","12px","font-family","SF Pro Display","--margin-bottom","0","--margin-top","0",3,"ngModel","ionInput","ionClear","ngModelChange"],["tappable","",3,"click",4,"ngFor","ngForOf"],["tappable","",3,"click"],["name","pin",2,"font-size","22px"],["style","font-size: 12px;font-family: 'SF Pro Display';",4,"ngIf"],[2,"font-size","12px","font-family","SF Pro Display"],["name","navigate",2,"font-size","22px"],["animated","",2,"width","100%","height","15px"],[3,"click"],[4,"ngFor","ngForOf"],["name","time",2,"font-size","22px"],["side","end"],["color","danger",3,"click"],["name","trash"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",0),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title",1),t._uU(5,"Detalles de la entrega"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-content"),t.YNc(7,S,2,1,"div",2),t.YNc(8,I,2,1,"ion-list",3),t.YNc(9,P,8,0,"ion-item",3),t.YNc(10,q,10,6,"ion-item",4),t.YNc(11,J,2,1,"ion-list",3),t.qZA(),t.TgZ(12,"ion-footer"),t.TgZ(13,"ion-button",5),t._uU(14,"Guardar"),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngIf",o.autocomplete),t.xp6(1),t.Q6J("ngIf",o.autocompleteItems&&o.hasSearch),t.xp6(1),t.Q6J("ngIf",!o.LocationNow),t.xp6(1),t.Q6J("ngIf",o.LocationNow&&!o.hasSearch),t.xp6(1),t.Q6J("ngIf",!o.hasSearch))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,d.O5,s.fr,s.YG,s.VI,s.j9,_.JJ,_.On,s.q_,d.sg,s.Ie,s.BJ,s.gu,s.Q$,s.CK,s.td,s.IK,s.u8],pipes:[d.OU],styles:[""]}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.Bz.forChild(U)],p.Bz]}),i})(),M=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,_.u5,s.Pc,b]]}),i})()}}]);