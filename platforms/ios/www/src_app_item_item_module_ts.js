"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_item_item_module_ts"],{

/***/ 4672:
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPageModule": () => (/* binding */ ItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.page */ 171);







const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_0__.ItemPage
    }
];
let ItemPageModule = class ItemPageModule {
};
ItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_0__.ItemPage]
    })
], ItemPageModule);



/***/ }),

/***/ 171:
/*!***********************************!*\
  !*** ./src/app/item/item.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPage": () => (/* binding */ ItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.page.html?ngResource */ 4534);
/* harmony import */ var _item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.page.scss?ngResource */ 3242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 6120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);









let ItemPage = class ItemPage {
    constructor(modalController, toastController, server, statusBar, platform, nav, route) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.server = server;
        this.statusBar = statusBar;
        this.platform = platform;
        this.nav = nav;
        this.route = route;
        this.veg = false;
        this.cart = [];
        this.showToolbar = false;
        this.BannerOption = {
            initialSlide: 0,
            slidesPerView: 3.3,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            spaceBetween: 7,
        };
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.route.queryParams.subscribe(params => {
            if (params.id) {
                var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
                var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
                var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
                this.server.getStore(params.id + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((data) => {
                    if (data.data) {
                        console.log(data);
                        this.data = data.data[0];
                        // Order Sort_no
                        this.data.items.sort((a, b) => {
                            return parseFloat(a.sort_no) - parseFloat(b.sort_no);
                        });
                    }
                    else {
                        this.nav.navigateRoot('home');
                    }
                });
            }
            else {
                this.nav.navigateRoot('home');
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined) {
            this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
            localStorage.setItem('cart_no', this.cart_no);
        }
        else {
            this.cart_no = localStorage.getItem('cart_no');
        }
        this.server.cartCount(this.cart_no).subscribe((response) => {
            this.count = response.data;
            this.cart = response.cart;
        });
    }
    vegOnly() {
        this.veg = this.veg == true ? false : true;
    }
    showOption(item, currency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isOpen = true;
            let navigationExtras = {
                queryParams: {
                    item: JSON.stringify(item),
                    cart: this.cart,
                    currency: currency
                }
            };
            this.nav.navigateForward(['/option'], navigationExtras);
        });
    }
    viewInfoStore() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    id: this.data.id
                }
            };
            this.nav.navigateForward(['/info'], navigationExtras);
        });
    }
    addToCart(id, price, type = 0, qty, addon = []) {
        this.presentToast("Elemento Agregado.");
        var allData = {
            cart_no: this.cart_no,
            id: id,
            price: price,
            qtype: type,
            type: 0,
            qty: qty,
            addon: addon,
            price_comm: this.data.c_value
        };
        this.server.addToCart(allData).subscribe((response) => {
            this.count = response.data.count;
            this.cart = response.data.cart;
        });
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].item_id == id) {
                return this.cart[i].qty;
            }
        }
        return false;
    }
    updateCart(id, type = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentToast("Removed Successfully");
            this.server.updateCart(id, type + "?cart_no=" + this.cart_no + "&lid=" + localStorage.getItem('lid')).subscribe((response) => {
                this.cart = response.data;
            });
        });
    }
    onScroll($event) {
        // let title:  HTMLSpanElement = document.querySelector('.content_title');
        // let subTitle: HTMLSpanElement = document.querySelector('.title_header');
        let menuSub = document.querySelector('.slide-menu');
        let ToolSub = document.querySelector('.slide-tool');
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 175;
            if (scrollTop >= 175) {
                menuSub.className = 'slide-menu slide_down_View';
                ToolSub.className = "slide-tool scroll animate__animated animate__lightSpeedInRight";
            }
            else {
                menuSub.className = 'slide-menu';
                ToolSub.className = "slide-tool";
            }
        }
    }
    ScrollTo(div) {
        let menuSub = document.querySelector('.cate_' + div);
        let DownY = menuSub.offsetTop + 210;
        this.Content.scrollToPoint(0, DownY, 300);
    }
};
ItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
ItemPage.propDecorators = {
    Content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, { static: false },] }]
};
ItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-item',
        template: _item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemPage);



/***/ }),

/***/ 3242:
/*!************************************************!*\
  !*** ./src/app/item/item.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".pics_pp {\n  height: 155px;\n  position: relative;\n}\n.pics_pp .portada {\n  z-index: -1 !important;\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.pics_pp .prof_img {\n  position: absolute;\n  top: 100px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 6px;\n  border: 1px solid #fff;\n  z-index: 1000;\n}\n.welcome-card {\n  margin-bottom: 15%;\n  background-color: #fff;\n  box-shadow: none;\n  width: 96%;\n  margin-left: 2%;\n}\n.welcome-card ion-card-header {\n  margin-top: 0 !important;\n}\n.welcome-card ion-card-header ion-card-title {\n  text-align: center;\n}\n.welcome-card ion-card-header ion-card-title .info_res span {\n  font-size: 12px;\n  margin: 0 15px;\n  position: relative;\n}\n.welcome-card ion-card-header ion-card-title .info_res span:nth-child(2) {\n  position: relative;\n}\n.welcome-card ion-card-header ion-card-title .info_res span:nth-child(2)::after {\n  position: absolute;\n  content: \"\";\n  left: -15px;\n  top: 27%;\n  width: 3px;\n  height: 3px;\n  background: #000;\n  border-radius: 100%;\n}\n.welcome-card ion-card-header ion-card-title .info_res span:nth-child(2)::before {\n  position: absolute;\n  content: \"\";\n  right: -15px;\n  top: 27%;\n  width: 3px;\n  height: 3px;\n  background: #000;\n  border-radius: 100%;\n}\n/* Transparent standard */\n.slide-tool ion-toolbar {\n  --ion-color-base: transparent !important;\n  --color:#fff;\n  --background: rgb(41, 41, 41);\n  --background: linear-gradient(180deg, rgb(42, 42, 42) 0%, rgba(255,255,255,0) 100%);\n}\n.slide-tool ion-toolbar .title_header {\n  display: none;\n  position: relative;\n}\n.slide-tool ion-toolbar ion-back-button {\n  background: #F49A00;\n  color: #fff;\n  border-radius: 25px;\n  font-size: 14px;\n}\n.slide-tool ion-toolbar ion-buttons ion-icon {\n  font-size: 22px;\n  background: #F49A00;\n  color: #fff;\n  border-radius: 25px;\n}\n.slide-tool.scroll ion-toolbar {\n  --ion-color-base: #fff !important;\n  --color:#000;\n  --background: rgb(255, 255, 255);\n  --background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(240, 240, 240, 0.226) 100%);\n}\n.slide-tool.scroll ion-toolbar .title_header {\n  display: block;\n  position: relative;\n  color: #000;\n}\n.slide-tool.scroll ion-toolbar ion-back-button {\n  background: transparent !important;\n  color: #000;\n}\n.slide-tool.scroll ion-toolbar ion-buttons ion-icon {\n  background: transparent !important;\n  color: #000;\n}\n@keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n@keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 18px;\n  animation-duration: 0.6s;\n  animation-iteration-count: 1;\n  animation-name: downer;\n  animation-direction: normal;\n}\n.show-background .title_header {\n  display: block;\n  animation-duration: 0.8s;\n  animation-iteration-count: 1;\n  animation-name: pulsate;\n  animation-direction: normal;\n}\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none;\n}\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\nion-content {\n  position: absolute;\n  top: 0;\n}\nh1 {\n  font-size: 19px;\n}\nion-badge {\n  --padding-bottom:5px;\n  --padding-start:10px;\n  --padding-end:10px;\n  --padding-top:5px;\n}\n.quantityinput {\n  padding: 2px 2px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 28px;\n}\n.quantitybtn .sign {\n  padding: 7px 2px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n.quantitybtn .plus {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  border-radius: 5px 0px 0px 5px;\n}\n.quantitybtn .minus {\n  background: #4caf50;\n  border: 1px solid #4caf50;\n  color: #fff;\n  border-radius: 0px 5px 5px 0px;\n}\n.header_stikcy {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 250px;\n  padding: 12px 15px;\n  z-index: 50;\n  overflow: hidden;\n}\n.header_stikcy:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n.header_stikcy ion-icon {\n  color: #fff;\n  font-size: 28px;\n}\n.slide-menu {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px 6px;\n  background-color: #000;\n  visibility: hidden;\n}\n.slide_down_View {\n  visibility: visible;\n  animation-duration: 0.6s;\n  animation-iteration-count: 1;\n  animation-name: downer;\n  animation-direction: normal;\n}\n.slide-menu ion-label {\n  font-family: \"SF Pro Display\";\n  font-weight: 100;\n  font-style: normal;\n  font-size: 14px;\n  color: #fff;\n  letter-spacing: 0.8px;\n}\n.pic_menu {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.badgeCart {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QTBCLFdBQUE7RUFBWSw4QkFBQTtBQXdDOUU7QUF0Q0E7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFBTyxPQUFBO0VBQ1AsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTBDRDtBQXhDQztFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUEyQ0Y7QUF4Q0M7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQTBDRjtBQXRDQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF5Q0Q7QUF0Q0E7RUFDQyxtQkFBQTtFQW5JQSx3QkEyQ3lCO0VBdkN6Qiw0QkF1QytCO0VBbkMvQixzQkFtQ2lCO0VBL0JqQiwyQkErQmtDO0FBaUpuQztBQXJEQTtFQUNDLDZCQUFBO0VBQ0csZ0JBQUE7RUFDSCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0cscUJBQUE7QUF3REo7QUFyREE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQXdERDtBQXJEQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBd0REIiwiZmlsZSI6Iml0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3NfcHAge1xuXHRoZWlnaHQ6IDE1NXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0LnBvcnRhZGEge1xuXHRcdHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHR9XG5cblx0LnByb2ZfaW1nIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxMDBweDtcblx0XHRsZWZ0OiAwO3JpZ2h0OiAwO1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHR3aWR0aDogODBweDtcblx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcblx0XHR6LWluZGV4OiAxMDAwO1xuXHR9XG5cbn1cblxuLndlbGNvbWUtY2FyZCB7XG5cdG1hcmdpbi1ib3R0b206IDE1JTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0d2lkdGg6IDk2JTtcblx0bWFyZ2luLWxlZnQ6IDIlO1xuXG5cdGlvbi1jYXJkLWhlYWRlciB7XG5cdFx0bWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuXG5cdFx0aW9uLWNhcmQtdGl0bGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XG5cdFx0XHQuaW5mb19yZXMge1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDE1cHg7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1x0XG5cblx0XHRcdFx0XHQmOm50aC1jaGlsZCgyKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdCY6OmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdFx0bGVmdDogLTE1cHg7dG9wOiAyNyU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogM3B4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogLTE1cHg7dG9wOiAyNyU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogM3B4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xuLnNsaWRlLXRvb2wge1xuXHRpb24tdG9vbGJhciB7XG5cdFx0Ly8gLS1iYWNrZ3JvdW5kOiByZWQ7XG5cdFx0LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHQtLWNvbG9yOiNmZmY7XG5cdFx0LS1iYWNrZ3JvdW5kOiByZ2IoNDEsIDQxLCA0MSk7XG5cdFx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoNDIsIDQyLCA0MikgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XG5cdFx0LnRpdGxlX2hlYWRlciB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblx0XG5cdFx0aW9uLWJhY2stYnV0dG9uIHtcblx0XHRcdGJhY2tncm91bmQ6ICNGNDlBMDA7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0fVxuXHRcblx0XHRpb24tYnV0dG9ucyB7XG5cdFxuXHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNGNDlBMDA7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uc2xpZGUtdG9vbC5zY3JvbGwge1xuXHRpb24tdG9vbGJhciB7XG5cdFx0LS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdC0tY29sb3I6IzAwMDtcblx0XHQtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0XHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjIyNikgMTAwJSk7XG5cblx0XHQudGl0bGVfaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0fVxuXHRcblx0XHRpb24tYmFjay1idXR0b24ge1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdH1cblx0XG5cdFx0aW9uLWJ1dHRvbnMge1xuXHRcblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcblx0QC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcblx0ICBAY29udGVudDtcblx0fVxuXHRALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuXHQgIEBjb250ZW50O1xuXHR9XG5cdEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuXHQgIEBjb250ZW50O1xuXHR9XG5cdEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuXHQgIEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBhbmltYXRlKCRuYW1lLCAkZHVyYXRpb24sICRpdGVyYXRpb24sICRkaXJlY3Rpb24pIHtcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcblx0LW1vei1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcblx0LW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XG5cdC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcblx0LW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbjtcblx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogJG5hbWU7XG5cdC1tb3otYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuXHQtby1hbmltYXRpb24tbmFtZTogJG5hbWU7XG5cdGFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcblx0LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuXHQtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG5cdC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG5cdGFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBpbmNsdWRlIGtleWZyYW1lcyhwdWxzYXRlKSB7XG5cdGZyb20ge1xuXHRcdHJpZ2h0OiAtNTAlO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0dG8ge1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0cmlnaHQ6IDA7XG5cdH1cbn1cblxuQGluY2x1ZGUga2V5ZnJhbWVzKGRvd25lcikge1xuXHRmcm9tIHtcblx0XHRyaWdodDogLTMwJTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdHRvIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG59XG5cblxuQG1peGluIHB1bHNhdGUge1xuXHRAaW5jbHVkZSBhbmltYXRlKHB1bHNhdGUsIDAuOHMsIDEsIG5vcm1hbCk7XG59XG5cbkBtaXhpbiBkb3duZXIge1xuXHRAaW5jbHVkZSBhbmltYXRlKGRvd25lciwgMC42cywgMSwgbm9ybWFsKTtcblx0XG59XG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGNvbG9yOiAjMDAwO1xuXHRwYWRkaW5nLXRvcDogMThweDtcblx0QGluY2x1ZGUgZG93bmVyO1xuXG5cdC50aXRsZV9oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdEBpbmNsdWRlIHB1bHNhdGU7XG5cdH1cbn1cblxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cblxuXG5pb24tY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOjA7XG59XG5cbmgxXG57XG5cdGZvbnQtc2l6ZToxOXB4O1xufVxuXG5pb24tYmFkZ2Vcbntcblx0LS1wYWRkaW5nLWJvdHRvbTo1cHg7XG5cdC0tcGFkZGluZy1zdGFydDoxMHB4O1xuXHQtLXBhZGRpbmctZW5kOjEwcHg7XG5cdC0tcGFkZGluZy10b3A6NXB4O1xufVxuXG4ucXVhbnRpdHlpbnB1dHtwYWRkaW5nOjJweCAycHg7IHRleHQtYWxpZ246Y2VudGVyOyBib3JkZXI6MXB4IHNvbGlkICNjY2M7ICBiYWNrZ3JvdW5kOiNmZmY7IHdpZHRoOjI4cHg7fVxuLnF1YW50aXR5YnRuIC5zaWdue3BhZGRpbmc6N3B4IDJweDsgd2lkdGg6MjBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGN1cnNvcjpwb2ludGVyOyBmb250LXdlaWdodDpib2xkOyBvdXRsaW5lOm5vbmU7IH1cbi5xdWFudGl0eWJ0biAucGx1c3tiYWNrZ3JvdW5kOiNmNDQzMzY7IGJvcmRlcjoxcHggc29saWQgI2Y0NDMzNjsgY29sb3I6I2ZmZjsgYm9yZGVyLXJhZGl1czo1cHggMHB4IDBweCA1cHg7fVxuLnF1YW50aXR5YnRuIC5taW51c3tiYWNrZ3JvdW5kOiM0Y2FmNTA7IGJvcmRlcjoxcHggc29saWQgIzRjYWY1MDsgY29sb3I6I2ZmZjsgYm9yZGVyLXJhZGl1czowcHggNXB4IDVweCAwcHg7fVxuXG4uaGVhZGVyX3N0aWtjeSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO2xlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDI1MHB4O1xuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XG5cdHotaW5kZXg6IDUwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcblx0JjphZnRlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtsZWZ0OiAwO1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQpO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG5cblx0aW9uLWljb24ge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0fVxufVxuXG4uc2xpZGUtbWVudSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAxMHB4IDZweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpZGVfZG93bl9WaWV3IHtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0QGluY2x1ZGUgZG93bmVyO1xufVxuXG4uc2xpZGUtbWVudSBpb24tbGFiZWwge1xuXHRmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcbiAgICBmb250LXdlaWdodDogMTAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNmZmY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuXG4ucGljX21lbnUge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhZGdlQ2FydCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Zm9udC1zaXplOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 4534:
/*!************************************************!*\
  !*** ./src/app/item/item.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border style=\"z-index: 1000;\">\n  <div class=\"slide-tool\" *ngIf=\"data\">\n    <ion-toolbar color=\"primary\"> \n      <!-- [class.show-background]=\"showToolbar\" translucent -->\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <span class=\"title_header\">{{ data.title }}</span>\n      </ion-buttons>\n      <ion-buttons slot=\"end\" (click)=\"viewInfoStore()\"> \n        <ion-icon name=\"home\" slot=\"end\" style=\"float: right;margin-right: 15px;\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </div>\n\n  <div class=\"slide-menu\" *ngIf=\"data\">\n    <ion-slides  [options]=\"BannerOption\">\n      <ion-slide *ngFor=\"let category of data.items\" style=\"text-align: left;\">\n        <ion-label style=\"font-size: 14px;\" (click)=\"ScrollTo(category.id)\">{{category.cate_name}}</ion-label>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-header>\n\n<ion-content mode=\"ios\"  [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" *ngIf=\"data\">\n\n  <ion-fab style=\"padding-bottom: 45px;\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"count > 0\" routerLink=\"/cart\" routerDirection=\"forward\">\n    <ion-fab-button color=\"danger\" edge=\"true\">\n      <ion-icon name=\"cart\"></ion-icon> {{ count }}\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-fab style=\"padding-bottom: 45px;\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\n    <ion-fab-button color=\"danger\" edge=\"true\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"pics_pp\">\n    <div class=\"portada\" [style.backgroundImage]=\"'url('+ data.portada +')'\"></div>\n    <div class=\"prof_img\" [style.backgroundImage]=\"'url('+ data.img +')'\">\n      <!-- <img src=\"{{data.img}}\" alt=\"perfil\"> -->\n    </div>\n  </div>\n\n  <ion-card mode=\"ios\" class=\"welcome-card\">\n    \n    <ion-card-header>\n\n      <ion-card-title>\n        <h4>\n          <ion-icon name=\"restaurant\"></ion-icon> {{ data.title }}\n        </h4>\n\n        <div class=\"info_res\">\n          <span>\n            <ion-icon name=\"star\"></ion-icon>\n            {{ data.rating }}\n          </span>\n\n          <span>\n            <ion-icon name=\"bicycle\"></ion-icon>\n            {{data.delivery_time}} - min\n          </span>\n\n          <span>\n            <ion-icon name=\"stats\"></ion-icon>\n            {{data.person_cost}}\n          </span>\n        </div>\n        \n       \n      </ion-card-title>\n      \n    </ion-card-header>\n\n    <ion-card-content>\n      <span *ngFor=\"let category of data.items\" class=\"cate_{{ category.id }}\">\n        <h1 style=\"margin-top: 20px\">{{ category.cate_name }}</h1>\n        <span *ngFor=\"let item of category.items\">\n          <ion-row style=\"margin-top:10px;padding: 0px\" *ngIf=\"item.status == 0\">\n            <ion-col size=\"5\" (click)=\"showOption(item,data.currency)\">\n              <div class=\"pic_menu\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n            </ion-col>\n            <ion-col size=\"7\" style=\"position: relative;\">\n              <b (click)=\"showOption(item,data.currency)\">{{ item.name }}</b><br>\n                <small (click)=\"showOption(item,data.currency)\" style=\"color: gray;font-size: 10px\" *ngIf=\"item.description\">\n                    {{ item.description | slice:0:25 }}...\n                </small><br>\n              <span (click)=\"showOption(item,data.currency)\" style=\"color: rgb(29, 29, 29);font-size: 11px\"><b>MXN {{ data.currency }}{{ item.price }}</b></span>\n                \n              <ion-badge *ngIf=\"hasCart(item.id)\" class=\"badgeCart\">{{hasCart(item.id)}}</ion-badge>\n            \n            </ion-col>\n          \n          </ion-row>\n        </span>\n      </span>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer *ngIf=\"text && data\" style=\"z-index: 1000;\">\n    <ion-toolbar mode=\"ios\">\n    \n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        \n       <ion-tab-button routerLink=\"/home\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>{{ text.home_footer_name }}</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/home\">\n          <ion-icon name=\"pin\"></ion-icon>\n          <ion-label>{{ text.home_nearest }}</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"basket\"></ion-icon>\n          <ion-label>{{ text.home_cart }}</ion-label>\n          <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>{{ text.home_profile }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n    \n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_item_item_module_ts.js.map