"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_done_done_module_ts"],{

/***/ 4410:
/*!*************************************!*\
  !*** ./src/app/done/done.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonePageModule": () => (/* binding */ DonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _done_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done.page */ 115);







const routes = [
    {
        path: '',
        component: _done_page__WEBPACK_IMPORTED_MODULE_0__.DonePage
    }
];
let DonePageModule = class DonePageModule {
};
DonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_done_page__WEBPACK_IMPORTED_MODULE_0__.DonePage]
    })
], DonePageModule);



/***/ }),

/***/ 115:
/*!***********************************!*\
  !*** ./src/app/done/done.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonePage": () => (/* binding */ DonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _done_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done.page.html?ngResource */ 9324);
/* harmony import */ var _done_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./done.page.scss?ngResource */ 3452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 318);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 4273);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/mapStyle.js */ 917);










let DonePage = class DonePage {
    constructor(toastController, nav, server, geolocation, nativeGeocoder, renderer, _document) {
        this.toastController = toastController;
        this.nav = nav;
        this.server = server;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.renderer = renderer;
        this._document = _document;
        this.status = 0;
        this.progress = 0.016;
        this.chargeMap = false;
        this.km_h = 50;
    }
    ngOnInit() {
        this.data = JSON.parse(localStorage.getItem('order_data'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.currency = this.data.currency;
        this.data = this.data.data;
        this.getStatus();
        this.Interval_1 = setInterval(() => {
            this.progress = 0.016;
            this.getStatus();
        }, 4000);
        this.Intervarl_2 = setInterval(() => {
            this.progress = (this.progress * 1) + 0.016;
        }, 6000);
    }
    getStatus() {
        this.server.getStatus(this.data.id).subscribe((response) => {
            this.status = response.data.status;
            this.type = response.data.type;
            if (this.status == 4) {
                localStorage.setItem("lat_dboy", response.dboy.lat);
                localStorage.setItem('lng_dboy', response.dboy.lng);
                if (this.chargeMap == false) {
                    this.chargeMap = true;
                    this.loadMap();
                }
                else {
                    this.ViewdBoy();
                }
            }
            if (this.status == 2) {
                this.presentToast("¡Lo siento! Su pedido ha sido cancelado.");
                this.nav.navigateRoot('order');
                clearInterval(this.Interval_1);
                clearInterval(this.Intervarl_2);
            }
            if (this.status == 5) {
                this.presentToast("Pedido entregado con éxito");
                localStorage.removeItem('menu_item');
                localStorage.removeItem('order_data');
                clearInterval(this.Interval_1);
                clearInterval(this.Intervarl_2);
                if (this.type == 1) {
                    this.nav.navigateRoot('rate/' + this.data.id + '/staff');
                }
                else {
                    this.nav.navigateRoot('rate/' + this.data.id + '/store');
                }
            }
        });
    }
    getColor(id) {
        if (id == 1) {
            if (this.status < 1) {
                return "medium";
            }
        }
        if (id == 1.5) {
            if (this.status < 1.5) {
                return "medium";
            }
        }
        else if (id == 3) {
            if (this.status < 3) {
                return "medium";
            }
        }
        else if (id == 4) {
            if (this.status < 4) {
                return "medium";
            }
        }
        else if (id == 7) {
            if (this.type < 7) {
                return "medium";
            }
        }
        return "primary";
    }
    loadMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.status);
            let lat = localStorage.getItem('lat_dboy');
            let lng = localStorage.getItem('lng_dboy');
            this.getAddressFromCoords(lat, lng);
            const icon = {
                url: 'assets/d.png',
                scaledSize: new google.maps.Size(50, 50), // scaled size
            };
            let latLng = new google.maps.LatLng(lat, lng);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: _service_mapStyle_js__WEBPACK_IMPORTED_MODULE_5__.mapStyle
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            google.maps.event.addListenerOnce(this.map, 'idle', () => {
                this.marker = new google.maps.Marker({
                    position: latLng,
                    map: this.map,
                    icon: icon,
                    title: this.address
                });
            });
        });
    }
    ViewdBoy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let lat = localStorage.getItem('lat_dboy');
            let lng = localStorage.getItem('lng_dboy');
            this.getAddressFromCoords(lat, lng);
            let latLng = new google.maps.LatLng(lat, lng);
            this.map.setCenter(latLng);
            this.marker.setPosition(latLng);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let $this = this;
            var geocoder = new google.maps.Geocoder;
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
                .then((result) => {
                this.address = "";
                let responseAddress = [];
                for (let [key, value] of Object.entries(result[0])) {
                    if (value.length > 0)
                        responseAddress.push(value);
                }
                responseAddress.reverse();
                for (let value of responseAddress) {
                    this.address += value + ", ";
                }
                this.address = this.address.slice(0, -2);
            })
                .catch((error) => {
                var latlng = { lat: parseFloat(lattitude), lng: parseFloat(longitude) };
                let responseAddress = [];
                geocoder.geocode({ 'location': latlng }, function (result, status) {
                    if (status === 'OK') {
                        for (let [key, value] of Object.entries(result[0])) {
                            responseAddress.push(value);
                        }
                        responseAddress.reverse();
                        $this.address = responseAddress[4];
                    }
                    else {
                        console.log(status);
                    }
                });
            });
        });
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: 'dark'
            });
            toast.present();
        });
    }
};
DonePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT,] }] }
];
DonePage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['map', { static: false },] }],
    directionsPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['directionsPanel', { static: false },] }]
};
DonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-done',
        template: _done_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_done_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DonePage);



/***/ }),

/***/ 3452:
/*!************************************************!*\
  !*** ./src/app/done/done.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  font-size: 12px;\n}\n\nion-item small {\n  font-size: 12px;\n  color: gray;\n  margin-right: 10%;\n}\n\nion-content {\n  --background:#f9f8f8;\n}\n\n.light {\n  color: gray;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 60vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 60px;\n  width: 60px;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsZUFBQTtBQUFEOztBQUlBO0VBRUMsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZEOztBQU1BO0VBRUMsb0JBQUE7QUFKRDs7QUFRQTtFQUVDLFdBQUE7QUFORDs7QUFVQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFQRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSRjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVZKIiwiZmlsZSI6ImRvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gaW9uLWxhYmVsXG57XG5cdGZvbnQtc2l6ZToxMnB4O1xufVxuXG5cbmlvbi1pdGVtIHNtYWxsXG57XG5cdGZvbnQtc2l6ZToxMnB4O1xuXHRjb2xvcjpncmF5O1xuXHRtYXJnaW4tcmlnaHQ6MTAlXG59XG5cblxuaW9uLWNvbnRlbnRcbntcblx0LS1iYWNrZ3JvdW5kOiNmOWY4Zjg7XG59XG5cblxuLmxpZ2h0XG57XG5cdGNvbG9yOmdyYXk7XG59XG5cblxuI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIFxuIFxuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIFxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbn1cbiBcblxuLm1hcC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIFxuICAjbWFwX2NlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 9324:
/*!************************************************!*\
  !*** ./src/app/done/done.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border>\n<ion-toolbar color=\"primary\">\n<ion-buttons slot=\"start\" routerLink=\"/home\" routerDirection=\"root\">\n    <ion-icon name=\"home\" style=\"font-size: 29px\"></ion-icon>\n    </ion-buttons>\n\n<ion-buttons slot=\"end\"><ion-button fill=\"outline\" mode=\"ios\" size=\"small\" routerLink=\"/order\" routerDirection=\"forward\">View Order Detail</ion-button></ion-buttons>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n<div style=\"width:100%;background-color: #FF0017;height: 80px;color:white\">&nbsp;</div>\n\n<ion-card mode=\"ios\" style=\"margin-top: -15%;background-color: white;width: 98%;margin-left: 1%\" class=\"welcome-card\">\n\n<ion-card-header>\n\n<ion-card-title>{{ text.confirm_title }}</ion-card-title>\n<ion-card-subtitle><ion-icon name=\"restaurant\"></ion-icon> {{ data.store }}</ion-card-subtitle>\n\n</ion-card-header>\n\n</ion-card>\n\n<div class=\"ion-padding\">\n\n<p style=\"font-size: 12px\" *ngIf=\"status == 0\">Pedido realizado con éxito. Esperando confirmación del restaurante</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 1\">Orden confirmada. Tu comida está siendo preparada.</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1.5 && type == 1\">Buscando Socio Repartidor</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 2\">Orden confirmada. Tu comida está siendo preparada, Se te notificará cuando esté lista</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 7\">Tu orden está lista para recoger</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 3\">Se ha asignado un repartidor a tu pedido.</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 4\">Tu Orden esta en ruta!!</p>\n\n<div class=\"map-wrapper\" *ngIf=\"status == 4\">\n    <div #map id=\"map\"></div>\n    <p>{{address}}</p>\n</div>\n  \n<ion-progress-bar value=\"{{ progress }}\" buffer=\"0.5\"></ion-progress-bar>\n</div>\n\n<ion-card mode=\"ios\" class=\"welcome-card\" style=\"width: 98%;margin-left: 1%\">\n\n<ion-card-header>\n\n<ion-card-title>Order Status</ion-card-title>\n\n</ion-card-header>\n\n<ion-list lines=\"none\">\n\n<ion-item routerLink=\"/order\" routerDirection=\"forward\">\n    <ion-icon slot=\"start\" color=\"primary\" name=\"cart\"></ion-icon>\n    <ion-label>Pedido realizado</ion-label>\n</ion-item>\n\n<ion-item>\n    <ion-icon slot=\"start\" [color]=\"getColor(1)\" name=\"checkmark-circle\"></ion-icon>\n    <ion-label [class.light]=\"status < 1\">Orden confirmada</ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"type == 1\">\n    <ion-icon slot=\"start\" [color]=\"getColor(1.5)\" name=\"search\"></ion-icon>\n    <ion-label [class.light]=\"status < 1.5\">Buscando Socio Repartidor</ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"type == 1\">\n    <ion-icon slot=\"start\" [color]=\"getColor(3)\" name=\"link\"></ion-icon>\n    <ion-label [class.light]=\"status < 3\">Repartidor asignado</ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"type == 1\">\n    <ion-icon slot=\"start\" [color]=\"getColor(4)\" name=\"bus\"></ion-icon>\n    <ion-label [class.light]=\"status < 4\">Orden recogida</ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"type != 1\">\n    <ion-icon slot=\"start\" [color]=\"getColor(7)\" name=\"walk\"></ion-icon>\n    <ion-label [class.light]=\"type < 7\">Listo para  recoger</ion-label>\n</ion-item>\n\n\n</ion-list>\n\n</ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_done_done_module_ts.js.map