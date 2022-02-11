"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_address_setaddress_setaddress_module_ts"],{

/***/ 2075:
/*!*************************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetaddressPageRoutingModule": () => (/* binding */ SetaddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _setaddress_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setaddress.page */ 3158);




const routes = [
    {
        path: '',
        component: _setaddress_page__WEBPACK_IMPORTED_MODULE_0__.SetaddressPage
    }
];
let SetaddressPageRoutingModule = class SetaddressPageRoutingModule {
};
SetaddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetaddressPageRoutingModule);



/***/ }),

/***/ 6029:
/*!*****************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetaddressPageModule": () => (/* binding */ SetaddressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _setaddress_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setaddress-routing.module */ 2075);
/* harmony import */ var _setaddress_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setaddress.page */ 3158);







let SetaddressPageModule = class SetaddressPageModule {
};
SetaddressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setaddress_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetaddressPageRoutingModule
        ],
        declarations: [_setaddress_page__WEBPACK_IMPORTED_MODULE_1__.SetaddressPage]
    })
], SetaddressPageModule);



/***/ }),

/***/ 3158:
/*!***************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetaddressPage": () => (/* binding */ SetaddressPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _setaddress_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setaddress.page.html?ngResource */ 5086);
/* harmony import */ var _setaddress_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setaddress.page.scss?ngResource */ 5220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/server.service */ 6419);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 318);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 4273);








let SetaddressPage = class SetaddressPage {
    constructor(server, toastController, geolocation, nativeGeocoder, zone, nav, loadingController, platform) {
        this.server = server;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.nav = nav;
        this.loadingController = loadingController;
        this.platform = platform;
        this.lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
        this.lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.platform.ready().then(() => {
            if (google) {
                this.loadData();
            }
        });
    }
    loadData() {
        this.server.getAllAdress(localStorage.getItem('user_id')).subscribe((response) => {
            this.address = response.data;
        });
        this.getAddressFromCoords(this.lat, this.lng);
        // // Obtenemos la ubicación actual
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   this.lat = resp.coords.latitude;
        //   this.lng = resp.coords.longitude;
        // }).catch((error) => {
        //   console.log('Error al obtener la ubicación', error);
        // });
    }
    getAddressFromCoords(lattitude, longitude) {
        var geocoder = new google.maps.Geocoder;
        let $this = this;
        let options = {
            useLocale: true,
            maxResults: 2
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.LocationNow = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.LocationNow += value + ", ";
            }
            this.LocationNow = this.LocationNow.slice(0, -2);
        })
            .catch((error) => {
            console.log("error =>", error);
            var latlng = { lat: parseFloat(lattitude), lng: parseFloat(longitude) };
            let responseAddress = [];
            geocoder.geocode({ 'location': latlng }, function (result, status) {
                if (status === 'OK') {
                    $this.LocationNow = "";
                    for (let [key, value] of Object.entries(result[0])) {
                        responseAddress.push(value);
                    }
                    responseAddress.reverse();
                    for (let value of responseAddress) {
                        $this.LocationNow += value + ", ";
                    }
                    $this.LocationNow = responseAddress[4];
                }
                else {
                    console.log('Geocoder failed due to: ' + status);
                }
            });
        });
    }
    search(ev) {
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        var val = ev.target.value;
        if (val && val.length > 0) {
            this.data = null;
            this.hasSearch = val;
            if (this.autocomplete.input == '') {
                this.autocompleteItems = [];
                return;
            }
            this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
                this.autocompleteItems = [];
                this.zone.run(() => {
                    predictions.forEach((prediction) => {
                        this.autocompleteItems.push(prediction);
                    });
                });
            });
        }
        else {
            this.ngOnInit();
            this.hasSearch = false;
        }
    }
    clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.autocompleteItems = [];
    }
    SelectSearchResult(item) {
        var geocoder = new google.maps.Geocoder;
        let $this = this;
        let options = {
            useLocale: true,
            maxResults: 2
        };
        geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status !== 'OK') {
                window.alert('Geocoder failed due to: ' + status);
                return;
            }
            let navigationExtras = {
                queryParams: {
                    location: JSON.stringify(results[0].geometry.location),
                    address: item.description
                }
            };
            $this.nav.navigateForward(['/address'], navigationExtras);
        });
    }
    removeAddress(id) {
        this.server.trashAddress(id).subscribe(data => {
            if (data) {
                this.presentToast("La dirección se ha eliminado...", 'success');
                this.ionViewWillEnter();
            }
            else {
                this.presentToast(data, 'danger');
            }
        });
    }
    saveAddress(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Guardando Dirección...',
            });
            yield loading.present();
            if (item == 'LocationNow') {
                var allData = {
                    address: this.LocationNow,
                    lat: this.lat,
                    lng: this.lng,
                    user_id: localStorage.getItem('user_id')
                };
                this.server.saveAddress(allData).subscribe((response) => {
                    if (response.msg == 'done') {
                        localStorage.setItem("address", this.LocationNow);
                        localStorage.setItem('address_id', response.id);
                        localStorage.setItem("current_lat", this.lat);
                        localStorage.setItem('current_lng', this.lng);
                        this.nav.navigateForward('home');
                        this.presentToast("Dirección guardada con éxito.", 'success');
                    }
                    else {
                        this.presentToast(JSON.stringify(response.data), 'danger');
                    }
                    loading.dismiss();
                });
            }
            else {
                localStorage.setItem("address", item.address);
                localStorage.setItem('address_id', item.id);
                localStorage.setItem("current_lat", item.lat);
                localStorage.setItem('current_lng', item.lng);
                this.nav.navigateForward('home');
                this.presentToast("Dirección guardada con éxito.", 'success');
                loading.dismiss();
            }
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top',
                color: color
            });
            toast.present();
        });
    }
};
SetaddressPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
SetaddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-setaddress',
        template: _setaddress_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_setaddress_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetaddressPage);



/***/ }),

/***/ 5220:
/*!****************************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXRhZGRyZXNzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5086:
/*!****************************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 17px;font-family: 'SF Pro Display';margin-left: -8px !important;\">Detalles de la entrega</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"searchBar\" *ngIf=\"autocomplete\">\n    <ion-searchbar style=\"font-size: 12px;font-family: 'SF Pro Display';--margin-bottom:0;--margin-top:0;\" \n                  (ionInput)=\"search($event)\" \n                  placeholder=\"Ingrese una nueva dirección\" \n                  mode=\"ios\" \n                  color=\"light\" \n                  (ionClear)=\"clearSearch()\" \n                  [(ngModel)]=\"autocomplete.input\">\n    </ion-searchbar>\n  </div>\n\n  <!-- Search AutoComplete -->\n  <ion-list *ngIf=\"autocompleteItems && hasSearch\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"pin\" style=\"font-size: 22px;\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h4>{{item.structured_formatting.main_text}}</h4>\n        <p style=\"font-size: 12px;font-family: 'SF Pro Display';\" *ngIf=\"item.structured_formatting.secondary_text\">\n          {{item.structured_formatting.secondary_text | slice:0:45}} \n          <i *ngIf=\"item.structured_formatting.secondary_text.length > 45\">...</i>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <!-- Search AutoComplete -->\n  \n  <!-- LocationNow -->\n  <ion-item *ngIf=\"!LocationNow\">\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n    </ion-avatar>\n    <ion-label>\n      <h4>Tu Ubicación</h4>\n      <p>\n        <ion-skeleton-text animated style=\"width: 100%;height: 15px;\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"LocationNow && !hasSearch\" (click)=\"saveAddress('LocationNow')\">\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n    </ion-avatar>\n    <ion-label>\n      <h4>Tu Ubicación</h4>\n      \n      <p style=\"font-size: 12px;font-family: 'SF Pro Display';\">\n        {{LocationNow | slice:0:45}} <i *ngIf=\"LocationNow.length > 45\">...</i>\n      </p>\n    </ion-label>\n  </ion-item>\n  <!-- LocationNow -->\n\n  <!-- Save Address -->\n  <ion-list *ngIf=\"!hasSearch\">\n    <ion-item-sliding *ngFor=\"let add of address\">\n      <ion-item (click)=\"saveAddress(add)\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"time\" style=\"font-size: 22px;\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h4 *ngIf=\"add.type\">{{add.type}}</h4>\n          <h4 *ngIf=\"!add.type\">Sin Especificar</h4>\n          \n          <p style=\"font-size: 12px;font-family: 'SF Pro Display';\">\n            {{add.address | slice:0:45}} <i *ngIf=\"add.address.length > 45\">...</i>\n          </p>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"removeAddress(add.id)\">\n          <ion-icon name=\"trash\"></ion-icon>\n          Eliminar\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <!-- Save Address -->\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"success\" mode=\"ios\">Guardar</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_account_address_setaddress_setaddress_module_ts.js.map