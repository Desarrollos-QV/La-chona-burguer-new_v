"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 8676:
/*!*****************************************************!*\
  !*** ./src/app/directives/hide-header.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideHeaderDirective": () => (/* binding */ HideHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 5472);



let HideHeaderDirective = class HideHeaderDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
    }
    ngOnInit() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header.el, 'webkitTransition', 'margin-top 180ms');
        });
    }
    onContentScroll($event) {
        if ($event.detail.currentY > 56) {
            if ($event.detail.scrollTop > 56) {
                this.renderer.setStyle(this.header.el, 'margin-top', '-56px');
            }
            else {
                this.renderer.setStyle(this.header.el, 'margin-top', '0px');
            }
        }
        else {
            this.renderer.setStyle(this.header.el, 'margin-top', '0px');
        }
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.DomController }
];
HideHeaderDirective.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['header',] }],
    srcBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['srcBar',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionScroll', ['$event'],] }]
};
HideHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[hide-header]'
    })
], HideHeaderDirective);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/hide-header.directive */ 8676);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
                }
            ])
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_1__.HideHeaderDirective
        ]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 7206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 978);








let HomePage = class HomePage {
    constructor(server, nav, events, keyboard, loadingController, menu, toastController, renderer, domCtrl, actionSheetController) {
        this.server = server;
        this.nav = nav;
        this.events = events;
        this.keyboard = keyboard;
        this.loadingController = loadingController;
        this.menu = menu;
        this.toastController = toastController;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.actionSheetController = actionSheetController;
        this.BannerOptionFirst = {
            initialSlide: 0,
            slidesPerView: 3,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            spaceBetween: 7,
        };
        this.BannerOption = {
            loop: false,
            centeredSlides: true,
            autoplay: true,
            speed: 500,
            spaceBetween: 7,
        };
        this.SearchOption = {
            initialSlide: 0,
            slidesPerView: 3.5,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 500,
            spaceBetween: -20,
        };
        this.TrendOption = {
            initialSlide: 0,
            slidesPerView: 1.1,
            loop: false,
            centeredSlides: false,
            autoplay: true,
            speed: 800,
            spaceBetween: -9,
        };
        this.ask_again = {
            initialSlide: 0,
            slidesPerView: 1.8,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 800,
            spaceBetween: -9,
        };
        this.MiddleBannerOption = {
            initialSlide: 0,
            slidesPerView: 1,
            loop: false,
            centeredSlides: true,
            autoplay: true,
            speed: 800,
            spaceBetween: 4,
        };
        this.fakeData = [1, 2, 3, 4, 5, 6, 7];
        this.showLoading = false;
        this.hasSearch = false;
        this.loadRecentItems = false;
        this.RecentsItems = {
            initialSlide: 0,
            slidesPerView: 1.2,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 800,
            spaceBetween: -9,
        };
        this.RecentsStore = [];
        this.LastVisitStore = [];
        this.loadRegularitems = false;
        this.LastPlatillos = {
            initialSlide: 0,
            slidesPerView: 1.2,
            freeMode: true,
            loop: false,
            centeredSlides: false,
            autoplay: true,
            speed: 800,
            spaceBetween: 9,
        };
        this.lastDishes = [];
        this.loadSliderKf = false;
        // Inicialiamos el slider de KindofFood
        this.kind_food = {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true
        };
        this.fk_items = [];
        this.isKeyboardHide = true;
        this.ComerceRest = [];
        this.showToolbar = false;
        this.InTrendingStore = [];
        this.ComerceRestClose = [];
        this.allDataComerce = [];
        this.max_stores = 0;
        this.length_store = 0;
        this.Tot_stores = 0;
        this.let_init = 0;
        this.let_end = false;
        this.trending_wrap = "no_margin";
    }
    ionViewWillEnter() {
        this.headr = document.getElementsByClassName('header')[0];
        this.address = localStorage.getItem("address");
        this.menu.enable(true);
        this.keyboard.onKeyboardWillShow().subscribe(() => { this.isKeyboardHide = false; });
        this.keyboard.onKeyboardWillHide().subscribe(() => { this.isKeyboardHide = true; });
        // if (!localStorage.getItem('user_id')) {
        //   this.nav.navigateRoot('/welcome');
        // }else {
        //   if(localStorage.getItem('user_id') == 'null')
        //   {
        //     this.nav.navigateRoot('/welcome');
        //   }
        // }
        if (!localStorage.getItem('city_id') || localStorage.getItem('city_id') == 'null') {
            this.nav.navigateForward('city');
        }
        else {
            this.city_id = localStorage.getItem('city_id');
        }
        // Verificamos la direccion de entrega.
        if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null')
            this.nav.navigateForward('setaddress');
        // Obtenemos el app_text
        if (localStorage.getItem('app_text'))
            this.text = JSON.parse(localStorage.getItem('app_text'));
        // Verificamos al usuario
        this.verifyUser();
        // Cargamos todos los Datos
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
    }
    ngOnInit() {
        this.searchQuery = null;
        this.hasSearch = false;
    }
    verifyUser() {
        this.server.userInfo(localStorage.getItem('user_id')).subscribe((response) => {
            if (response.data) {
                if (response.data.phone == 'null') {
                    this.presentToast("Te recomendamos agregar un número telefonico a tu cuenta", "warning");
                    //this.nav.navigateBack('/chkphone');
                }
                else if (response.data.status == 1) {
                    this.nav.navigateBack('/locked');
                }
                else if (response.data.password == response.data.pswfacebook) {
                    this.presentToast("Te recomendamos cambiar tu contraseña", "danger");
                }
                // Obtenemos el carrito de compras
                this.server.cartCount(localStorage.getItem('cart_no') + "?user_id=" + localStorage.getItem('user_id')).subscribe((response) => {
                    this.count = response.data;
                    this.order = response.order;
                });
                if (this.city_id != localStorage.getItem('city_id')) {
                    this.city_name = localStorage.getItem('city_name');
                    this.city_id = localStorage.getItem('city_id');
                    this.loadData(localStorage.getItem('city_id') + "?ss=ss");
                }
            }
            else {
                localStorage.removeItem('user_id');
                // this.nav.navigateBack('/welcome')
            }
        });
    }
    clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
    }
    nearBy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.delay(500);
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
            });
            yield loading.present();
            this.nearby = true;
            this.data.store.sort((a, b) => {
                loading.dismiss();
                return parseFloat(a.km) - parseFloat(b.km);
            });
            // this.loadData(localStorage.getItem('city_id')+"?ss=ss"+"&lat="+localStorage.getItem('current_lat')+"&lng="+localStorage.getItem('current_lng'));
        });
    }
    loadData(city_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.let_init = 0;
            this.data = null;
            this.nearby = false;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            // Obtenemos las coordenadas
            if (this.address == '') {
                this.server.getGeolocation();
            }
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                console.log(response);
                this.data = response.data;
                this.text = response.data.text;
                this.Tot_stores = response.data.Tot_stores;
                this.events.publish('text', this.text);
                this.events.publish('admin', response.data.admin);
                localStorage.setItem('app_text', JSON.stringify(response.data.text));
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
                this.loadRecentItems = true;
                this.loadRegularitems = true;
                this.loadSliderKf = true;
                // Obtenemos los comercios de donde se ha pedido comida
                this.getLastCommPed();
                // Obtenemos todas la categorias
                this.getTypeStore(response.data.Categorys);
                // Ordenamos por los locales mas recientes
                this.GetRecentStore(response.data.store);
                // Obtenemos los comercios en tendencia
                this.GetTrendingStore(response.data.trending);
                this.ComerceRest = [];
                this.ComerceRestClose = [];
                for (let r = 0; r < response.data.store.length; r++) {
                    const element = response.data.store[r];
                    this.ComerceRest.push(element);
                }
                // this.Content.scrollToPoint(0,0,300);
                // this.domCtrl.write(() => {
                //   this.renderer.setStyle(this.headr, 'transition', 'margin-top 300ms');
                // });
                // Generamos el numero random para los banners
                let min = 5;
                if (response.data.store < 5 && response.data.store > 3) {
                    min = 2;
                }
                else if (response.data.store > 5) {
                    min = 5;
                }
                else {
                    min = 1;
                }
                let random = Math.floor(Math.random() * (response.data.store.length - min)) + min;
                this.bannerBottomRand = random;
            });
        });
    }
    loadMoreData(event) {
        setTimeout(() => {
            this.let_init += 5;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            var city_id = localStorage.getItem('city_id') + "?ss=ss";
            this.server.getMoreStores(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng + "&init=" + this.let_init).subscribe((response) => {
                for (let r = 0; r < response.data.store.length; r++) {
                    const element = response.data.store[r];
                    this.ComerceRest.push(element);
                }
                event.target.complete();
            });
            if (this.ComerceRest.length >= this.Tot_stores) {
                event.target.disabled = true;
                this.let_end = true;
            }
        }, 500);
    }
    GetRecentStore(data) {
        this.RecentsStore = [];
        let last = data.length;
        if (data.length >= 3) {
            last = 3;
        }
        for (let i = 0; i < last; i++) {
            const element = data[i];
            this.RecentsStore.push(element);
        }
        this.RecentsStore.sort((a, b) => {
            return parseFloat(b.id) - parseFloat(a.id);
        });
    }
    getLastCommPed() {
        this.LastVisitStore = [];
        if (localStorage.getItem('LastStore')) {
            let LastComm = JSON.parse(localStorage.getItem('LastStore'));
            for (let i = 0; i < LastComm.length; i++) {
                const element = LastComm[i];
                var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
                var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
                var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
                this.server.getStore(element.store_id + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((data) => {
                    console.log(data);
                    if (data.data) {
                        if (i <= 3) {
                            this.LastVisitStore.push(data.data[0]);
                        }
                    }
                    else {
                        this.nav.navigateRoot('home');
                    }
                });
            }
            if (this.LastVisitStore.length > 0) {
                this.trending_wrap = 'margin_top';
            }
            this.LastVisitStore.sort((a, b) => {
                return parseFloat(a.id) - parseFloat(b.id);
            });
        }
    }
    GetTrendingStore(data) {
        this.InTrendingStore = [];
        for (let t = 0; t < data.length; t++) {
            const element = data[t];
            if (element.open == true) {
                this.InTrendingStore.push(element);
            }
        }
        this.InTrendingStore.reverse();
    }
    getLastDishes(Stores) {
        let Items = [];
        let dishes = [];
        Stores.forEach(element => {
            Items.push(element.items);
        });
    }
    getTypeStore(List_type) {
        this.fk_items = []; // Limpiamos
        List_type.forEach(element => {
            if (element.status == 0) {
                this.fk_items.push({ 'Name': element.name, 'Img': element.img });
            }
        });
        this.fk_items.reverse();
    }
    trashLasComm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.removeItem('LastStore');
            this.trending_wrap = 'no_margin';
            this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        });
    }
    search(ev) {
        var val = ev.target.value;
        if (val && val.length > 0) {
            this.data = null;
            this.hasSearch = val;
            let search = localStorage.getItem('city_id') + "?q=" + val;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(search + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                this.data = response.data;
                this.text = response.data.text;
                this.events.publish('text', this.text);
                this.events.publish('admin', response.data.admin);
                localStorage.setItem('app_text', JSON.stringify(response.data.text));
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
                this.loadRecentItems = true;
                this.loadRegularitems = true;
                this.loadSliderKf = true;
                // Obtenemos los comercios de donde se ha pedido comida
                this.getLastCommPed();
                // Obtenemos todas la categorias
                this.getTypeStore(response.data.Categorys);
                // Ordenamos por los locales mas recientes
                this.data.store.sort((a, b) => {
                    return parseFloat(b.id) - parseFloat(a.id);
                });
                this.ComerceRest = [];
                for (let r = 0; r < response.data.store.length; r++) {
                    const element = response.data.store[r];
                    this.ComerceRest.push(element);
                }
                this.GetRecentStore(response.data.store);
            });
        }
        else {
            this.ngOnInit();
            this.hasSearch = false;
        }
    }
    dataFilter(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.filterPress = type;
            yield this.delay(500);
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
            });
            yield loading.present();
            if (type == 1) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.discount_value) - parseFloat(a.discount_value);
                });
            }
            else if (type == 2) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(a.delivery_charges_value.costs_ship) - parseFloat(b.delivery_charges_value.costs_ship);
                });
            }
            else if (type == 3) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.trending) - parseFloat(a.trending);
                });
            }
            else if (type == 4) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.id) - parseFloat(a.id);
                });
            }
            else if (type == 5) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.rating) - parseFloat(a.rating);
                });
            }
            else if (type == 6) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.delivery_time) - parseFloat(a.delivery_time);
                });
            }
            else if (type == 7) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    if (a.open) {
                        return a;
                    }
                });
            }
        });
    }
    delay(ms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
    }
    bannerLink(offer) {
        if (offer.link) {
            let city_id = localStorage.getItem('city_id') + "?banner=" + offer.id;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                this.itemPage(response.data.store[0]);
            });
        }
    }
    doRefresh(event) {
        setTimeout(() => {
            this.loadData(localStorage.getItem('city_id') + "?ss=ss");
            event.target.complete();
        }, 2000);
    }
    itemPage(storeData) {
        if (storeData.open) {
            if (storeData.max_distance == 1) {
                let navigationExtras = {
                    queryParams: {
                        store: storeData.title,
                        id: storeData.id
                    }
                };
                this.nav.navigateForward(['/item'], navigationExtras);
            }
            else {
                this.presentToast("El comercio esta fuera de alcance.", 'danger');
            }
        }
        else {
            this.presentToast("El comercio se encuentra cerrado.", 'danger');
        }
    }
    ViewCat(Name) {
        let navigationExtras = {
            queryParams: {
                Cat: Name
            }
        };
        this.nav.navigateForward(['/categorys'], navigationExtras);
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
    OptionCat_one() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Re-Ordenar",
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Cercanos',
                        icon: 'pin',
                        handler: () => {
                            this.nearBy();
                        }
                    }, {
                        text: 'Entrega Rapida',
                        icon: 'alarm',
                        handler: () => {
                            this.nearby = false;
                            this.dataFilter(6);
                        }
                    }, {
                        text: 'Costos de envio más bajos',
                        icon: 'cash',
                        handler: () => {
                            this.nearby = false;
                            this.dataFilter(2);
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    OptionCat_two() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Filtros",
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Más Recientes',
                        handler: () => {
                            this.nearby = false;
                            this.dataFilter(4);
                        }
                    }, {
                        text: 'Ofertas',
                        handler: () => {
                            this.nearby = false;
                            this.dataFilter(1);
                        }
                    }, {
                        text: 'Trending',
                        handler: () => {
                            this.nearby = false;
                            this.dataFilter(3);
                        }
                    }, {
                        text: 'Rating',
                        handler: () => {
                            this.nearby = false;
                            this.dataFilter(5);
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.DomController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
HomePage.propDecorators = {
    Content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, { static: false },] }],
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 7206:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-backdrop {\n  opacity: 0.3;\n}\n\nion-toolbar {\n  --opacity: 0;\n}\n\n.action-sheet-group {\n  background: #911919;\n}\n\n.margin_top {\n  margin-top: -4%;\n}\n\n.no_margin {\n  margin-top: 20px;\n}\n\n.img_banner {\n  width: 100%;\n  height: 125px;\n  border-radius: 3px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center 0;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .action-sheet-group {\n  background: #911919;\n}\n\n.searchBar {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.grid_menu {\n  margin: 0px !important;\n  padding-top: 0;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 14.5px;\n  font-family: \"SF Pro Display\";\n}\n\n.grid_menu ion-row ion-col {\n  position: relative;\n}\n\n.grid_menu ion-row ion-col:before {\n  position: absolute;\n  content: \"\";\n  right: 0;\n  top: 20%;\n  width: 1px;\n  height: 60%;\n  background-color: #ececec;\n}\n\n.grid_menu ion-row ion-col ion-icon {\n  position: absolute;\n  top: 30%;\n}\n\n.grid_menu ion-row ion-col:last-child::before {\n  display: none;\n}\n\n.AllElements {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.AllElements .regular-items {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  justify-content: center;\n}\n\n.AllElements a {\n  text-decoration: none;\n}\n\n.AllElements a h3 {\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n  padding-left: 10px;\n}\n\n.AllElements a small {\n  color: #626262;\n  font-size: 13px;\n  padding-left: 10px;\n}\n\n.AllElements .wrap-img-items {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 0;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.AllElements .wrap-img-items:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 160px;\n  background: #010101;\n  background: linear-gradient(0deg, #010101 10%, rgba(255, 255, 255, 0) 98%);\n  z-index: 1;\n}\n\n.AllElements .wrap-img-items .text {\n  position: absolute;\n  bottom: 0;\n  padding: 10px 0;\n  z-index: 50;\n}\n\n.AllElements .wrap-img-items .text h3 {\n  color: #fff;\n  max-width: 250px;\n}\n\n.AllElements .wrap-img-items .text small {\n  color: #fff;\n}\n\n.AllElements .Abierto {\n  color: #08a82a;\n}\n\n.AllElements .Cerrado {\n  color: red;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col {\n  text-align: center;\n  font-size: 12px;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.AllElements .raiting {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 12px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.wrap_info {\n  position: relative;\n}\n\n.wrap_info ion-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  padding: 4px 8px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 11px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.recentItems a {\n  text-decoration: none;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.recentItems a h2 {\n  color: #000;\n  font-weight: 700;\n}\n\n.recentItems a small {\n  color: #626262;\n}\n\n.recentItems a h3 {\n  color: #626262;\n}\n\n.recentItems .Abierto {\n  color: #08a82a;\n}\n\n.recentItems .Cerrado {\n  color: red;\n}\n\n.recentItems h3 {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000 !important;\n}\n\n.recentItems .wrap-img-recents {\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\n\n.recentItems ion-label .info span {\n  width: 100%;\n  font-size: 11px;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.recentItems ion-label .info span .pl-10 {\n  padding-left: 10px;\n}\n\n.recentItems ion-label .info span strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.recentItems .raiting {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  z-index: 100;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  border-radius: 8px;\n}\n\n.img_radius {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n  position: relative;\n}\n\n.img_radius .close_in {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.602);\n  text-align: center;\n}\n\n.img_radius .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 40px;\n  margin: auto;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.img_radius .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.img_trend {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n}\n\n.img_trend .close_in {\n  position: absolute;\n  width: 100%;\n  height: 150px;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.342);\n  text-align: center;\n}\n\n.img_trend .close_in span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  color: #fff;\n  top: 60px;\n  margin: auto;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.img_trend .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.lastdisches {\n  box-shadow: 14px 13px 14px -8px rgba(0, 0, 0, 0.28);\n}\n\n.kind_food .swiper-container {\n  box-shadow: 0 !important;\n  background-color: #fff;\n  border: 0 !important;\n  padding: 15px 0;\n  width: 100%;\n  height: 100%;\n}\n\n.kind_food .wrap-img-kindfood {\n  width: 120px;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(43, 40, 38, 0.4);\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf h6 {\n  color: #f6f6f6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 8px auto;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.tag_close {\n  position: absolute;\n  top: -8px;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,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RSxtREFBQTtBQXJERjs7QUEyREU7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4REo7O0FBMkRFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXpESjs7QUEwREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCx1Q0FBQTtFQUNBLG1CQUFBO0FBdkROOztBQXdETTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFyRFI7O0FBMkRBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQVUsT0FBQTtFQUNWLFdBQUE7QUF2REYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFja2Ryb3Age1xuICBvcGFjaXR5OiAwLjM7XG59IFxuXG5pb24tdG9vbGJhciB7XG4gIC0tb3BhY2l0eTogMDtcbn1cblxuLmFjdGlvbi1zaGVldC1ncm91cCB7XG4gIGJhY2tncm91bmQ6ICM5MTE5MTk7XG59XG5cbi5tYXJnaW5fdG9wIHtcbiAgbWFyZ2luLXRvcDogLTQlO1xufVxuXG4ubm9fbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmltZ19iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcbn1cblxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cbi5teS1jdXN0b20tY2xhc3MgLmFjdGlvbi1zaGVldC1ncm91cCB7XG4gIGJhY2tncm91bmQ6ICM5MTE5MTk7XG59XG5cbi5zZWFyY2hCYXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufSAgXG5cbi5ncmlkX21lbnUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNC41cHg7XG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuXG4gIGlvbi1yb3cge1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjAlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzMCU7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIFxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSXRlbXMgUmVndWxhcmVzXG5cbi5BbGxFbGVtZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLnJlZ3VsYXItaXRlbXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC53cmFwLWltZy1pdGVtcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHRvcDogMDtsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDEsMSwxKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEsMSwxLDEpIDEwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA5OCUpO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB6LWluZGV4OiA1MDtcblxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuQWJpZXJ0byB7XG4gICAgY29sb3I6ICMwOGE4MmE7XG4gIH1cblxuICAuQ2VycmFkbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICNpbmZvLWNhcmQge1xuICAgIC5pbmZvIHtcbiAgICAgIGlvbi1ncmlkICB7XG4gICAgICAgIGlvbi1yb3cgIHtcbiAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yYWl0aW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O3JpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB6LWluZGV4OiA1MDtcbiAgfVxuXG59XG5cbi53cmFwX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7cmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOTUwNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgei1pbmRleDogNTA7XG4gIH1cbn1cblxuXG4ucmVjZW50SXRlbXMgIHtcbiAgICBcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5BYmllcnRvIHtcbiAgICAgICAgY29sb3I6ICMwOGE4MmE7XG4gICAgICB9XG4gICAgXG4gICAgICAuQ2VycmFkbyB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC53cmFwLWltZy1yZWNlbnRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxuICAgICAgICAgICAgLnBsLTEwIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5yYWl0aW5nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1cHg7dG9wOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICBcbiAgICBcbn1cbiAgICBcbi5pbWdfcmFkaXVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2xvc2VfaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDA7dG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjAyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdG9wOiA0MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC50YWdfY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbWdfdHJlbmQge1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAuY2xvc2VfaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGxlZnQ6IDA7dG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC50YWdfY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yJTtsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuLmxhc3RkaXNjaGVzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC4yOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMTRweCAxM3B4IDE0cHggLThweCByZ2JhKDAsMCwwLDAuMjgpO1xuICBib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC4yOCk7XG59XG5cbi8vIFRpcG9zIGRlIGNvbWlkYVxuLmtpbmRfZm9vZCB7XG5cbiAgLnN3aXBlci1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAud3JhcC1pbWcta2luZGZvb2Qge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC53cmFwLWJveC1rZiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0Myw0MCwzOCwwLjQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGg2IHtcbiAgICAgICAgY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO3JpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46OHB4IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7bGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbn0iXX0= */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header  #head>\n  <ion-toolbar class=\"header\" color=\"white\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button></ion-menu-button>\n\n      <span color=\"dark\" *ngIf=\"address\" style=\"font-size:13.5px;\" routerLink=\"/setaddress\" routerDirection=\"forward\">\n        <ion-icon name=\"pin\"></ion-icon>\n        {{address | slice:0:28}} <i *ngIf=\"address && address.length > 28\">...</i>\n        <ion-icon name=\"arrow-dropdown\"></ion-icon>\n      </span>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div class=\"searchBar\" *ngIf=\"text\">\n    <ion-searchbar style=\"font-size: 12px;font-family: 'SF Pro Display';--margin-bottom:0;--margin-top:0;\" (ionInput)=\"search($event)\" placeholder=\"{{ text.home_search }}\" mode=\"ios\" color=\"light\" (ionClear)=\"clearSearch()\" [(ngModel)]=\"searchQuery\"></ion-searchbar>\n    \n    <ion-grid class=\"grid_menu\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"OptionCat_one()\">\n          Cercanos\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" routerLink=\"/categorys\" routerDirection=\"forward\">\n          Categorias\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"OptionCat_two()\">\n          Filtros\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  </div>\n</ion-header>\n<ion-content *ngIf=\"text\" mode=\"md\" scrollEvents=\"true\" hide-header [header]=\"head\">\n\n  <!-- Refresh -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\"  pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n      <ion-refresher-content \n      pullingIcon=\"ellipsis-horizontal\"\n      refreshingSpinner=\"dots\">\n        \n      </ion-refresher-content>\n    </ion-refresher>\n  <!-- Refresh -->\n\n  <!-- Orders -->\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"count > 0\" routerLink=\"/cart\" routerDirection=\"forward\">\n      <ion-fab-button color=\"danger\" edge=\"true\">\n        <ion-icon name=\"cart\"></ion-icon> {{ count }}\n      </ion-fab-button>\n    </ion-fab>\n\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\n      <ion-fab-button color=\"danger\" edge=\"true\">\n        <ion-icon name=\"pin\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  <!-- Orders -->\n\n  <!-- Content  rgb(243, 243, 243)-->\n  <div class=\"welcome-card\" style=\"background-color:#FFFFFF;width: 98%;margin-left: 1%\" mode=\"ios\">\n    <ion-list id=\"skeleton\" *ngIf=\"!data\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let fake of fakeData\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-card-content *ngIf=\"data\" style=\"padding:0;\">\n\n      <!-- Banners -->\n      <ion-slides pager=\"false\" [options]=\"BannerOption\" #slideone autoplay=\"3000\" *ngIf=\"!hasSearch && !nearby\">\n        <ion-slide *ngFor=\"let offer of data.banner\" (click)=\"bannerLink(offer)\">\n          <!-- <img src=\"{{ offer.img }}\" class=\"img_banner\"> -->\n          <div class=\"img_banner\" [style.backgroundImage]=\"'url('+ offer.img +')'\"></div>\n        </ion-slide>\n      </ion-slides>\n      <!-- Banners -->\n\n      <ion-card *ngIf=\"!hasSearch && !nearby && data && data.store.length == 0\" mode=\"ios\" style=\"padding: 20px 20px;\">\n\n        <h2>\n          Opps! Aun no hay comercios en esta zona\n        </h2>\n        <ion-button size=\"small\" mode=\"ios\" routerLink=\"/city\" routerDirection=\"back\">Cambiar Localidad</ion-button>\n      </ion-card>\n    \n      <ion-backdrop tappable=\"false\" *ngIf=\"filterPress\"></ion-backdrop>\n\n      <!--******************* Ordena de nuevo ***************************-->\n      <div *ngIf=\"!nearby && !hasSearch && LastVisitStore.length >= 1 && data && data.store.length > 0\" style=\"margin-top: 30px;background-color: #FFFFFF;\">\n        <h6 style=\"padding-left:5px;font-family: 'SF Pro Display';font-weight: 700;font-size: 16px;\">\n          <ion-icon name=\"refresh\"></ion-icon> Pidelo de Nuevo<br />\n          <small style=\"color: #727272;\">Ordena <b>nuevamente</b> de tus restaurantes</small>\n          <a (click)=\"trashLasComm()\" style=\"float: right;padding-right: 15px;padding-top: 4px;text-decoration: none;font-size: 12px;\">Borrar Historial</a>\n        </h6>\n\n        <div style=\"margin-bottom: 10px;background-color: #fff;\">\n          <ion-slides pager=\"false\" [options]=\"TrendOption\" #slideone autoplay=\"3000\" class=\"trend\">\n            <ion-slide *ngFor=\"let store of LastVisitStore\" (click)=\"itemPage(store)\">\n              <ion-card style=\"padding: 2px 2px;font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\">\n                <ion-row>\n                  <ion-col size=\"12\" style=\"margin: 0 !important;padding: 0 !important;\">\n                    <div class=\"img_trend\" [style.backgroundImage]=\"'url('+  store.img+')'\">\n                      <div class=\"close_in\"  *ngIf=\"!store.open\">\n                        <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                      </div>\n                    </div>\n                  </ion-col>\n                  \n                  <ion-col size=\"12\" style=\"text-align: left;\">\n                    <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n                      <b style=\"font-size: 16px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\n                    </div>\n                    <small style=\"color: gray;font-size: 10px\">\n                      <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n                    </small><br>\n                    <small style=\"color: gray;font-size: 10px\">\n                      Entrega en {{ store.delivery_time }}\n                    </small><br />\n\n                    <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                      Distancia: {{store.km}} km\n                    </small><br *ngIf=\"store.max_distance > 0\" />\n  \n                    <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n                      Sin cobertura en tu ubicación.\n                    </small><br *ngIf=\"store.max_distance == 0\" />\n  \n                    <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                      Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n                    </small>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <!--******************* Ordena de nuevo ***************************-->\n\n      <!--******************* Trending Store ****************************-->\n      <div size=\"12\" *ngIf=\"!hasSearch && !nearby && InTrendingStore.length > 0\" style=\"margin-top: 30px;background-color: #FFFFFF;\">\n        \n        <h6 style=\"padding-left: 5px; font-family: 'SF Pro Display';font-weight: 700;font-size: 16px;\">\n          <ion-icon name=\"trending-up\"></ion-icon> Tendencias<br />\n          <small style=\"color: #727272;\">Estos son los restaurantes <b>tendencia</b> en {{city_name}}</small>\n        </h6>\n        \n        <ion-slides pager=\"false\" [options]=\"TrendOption\" #slideone autoplay=\"3000\" class=\"trend\">\n          <ion-slide *ngFor=\"let trend of InTrendingStore\" (click)=\"itemPage(trend)\">\n            <ion-card style=\"font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\">\n              <ion-row>\n                <ion-col size=\"12\" style=\"margin: 0 !important;padding: 0 !important;\">\n                  <div class=\"img_trend\" [style.backgroundImage]=\"'url('+ trend.portada +')'\">\n                    <div class=\"close_in\"  *ngIf=\"!trend.open\">\n                      <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                    </div>\n                  </div>\n                </ion-col>\n                \n                <ion-col size=\"12\" style=\"text-align: left;\">\n                  <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n                    <b style=\"font-size: 16px;\">{{ trend.title | slice:0:27 }}<i *ngIf=\"trend.title.length > 27\">...</i></b>\n                  </div>\n                  <small style=\"color: gray;font-size: 10px\">\n                    <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ trend.rating }}</span> | {{ trend.type }}\n                  </small><br>\n                  <small style=\"color: gray;font-size: 10px\">\n                    Entrega en {{ trend.delivery_time }}\n                  </small><br />\n\n                  <small *ngIf=\"trend.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                    Distancia: {{trend.km}} km\n                  </small><br *ngIf=\"trend.max_distance > 0\" />\n\n                  <small *ngIf=\"trend.max_distance == 0\" style=\"color: red;\">\n                    Sin cobertura en tu ubicación.\n                  </small><br *ngIf=\"trend.max_distance == 0\" />\n\n                  <small *ngIf=\"trend.delivery_charges_value.costs_ship == 0 && trend.max_distance == 1\">\n                    Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!trend.open\"> | Abre a las: <span style=\"color:red;\">{{trend.open_time}}</span></span>\n                  </small>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <!--******************* Trending Store ****************************-->\n\n      <!--********************** Items Normales ********************************************************-->\n      <div *ngIf=\"!nearby && data && data.store.length > 0\" style=\"background-color: #FFFFFF;margin-top: 15px;\">\n          <ion-card style=\"padding: 2px 2px;font-size: 12px;width: 100%;margin-left: 2px\" mode=\"ios\" \n            *ngFor=\"let store of ComerceRest;let i = index\" (click)=\"itemPage(store)\">\n\n            <ion-row>\n              <ion-col size=\"12\" style=\"margin: 0 !important;padding: 0 !important;\">\n                <div class=\"img_trend\" [style.backgroundImage]=\"'url('+ store.portada +')'\">\n                  <div class=\"close_in\"  *ngIf=\"!store.open\">\n                    <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n                  </div>\n                </div>\n              </ion-col>\n              \n              <ion-col size=\"12\" style=\"text-align: left;\">\n                <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n                  <b style=\"font-size: 16px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\n                </div>\n                <small style=\"color: gray;font-size: 10px\">\n                  <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n                </small><br>\n                <small style=\"color: gray;font-size: 10px\">\n                  Entrega en {{ store.delivery_time }}\n                </small><br />\n\n                <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                  Distancia: {{store.km}} km\n                </small><br *ngIf=\"store.max_distance > 0\" />\n\n                <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n                  Sin cobertura en tu ubicación.\n                </small><br *ngIf=\"store.max_distance == 0\" />\n\n                <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                  Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n                </small>\n              </ion-col>\n            </ion-row>\n\n            <ion-col size=\"12\" *ngIf=\"i == bannerBottomRand && data.bottom.length > 0\">\n              <ion-slides pager=\"false\" [options]=\"MiddleBannerOption\" #slideone autoplay=\"1000\">\n                <ion-slide *ngFor=\"let bottom of data.bottom\" (click)=\"bannerLink(bottom)\"><img src=\"{{ bottom.img }}\"></ion-slide>\n              </ion-slides>\n            </ion-col>\n\n          </ion-card>    \n      </div>\n      <!--********************** Items Normales ********************************************************-->\n\n      <!--********************** Comercios Cercanos ********************************************************-->\n      <div *ngIf=\"!hasSearch && nearby && data\" style=\"background-color: #FFFFFF;margin-top: 0%;\">\n        <h6 style=\"padding-left: 15px;padding-top: 25px; font-family: 'SF Pro Display';font-weight: 500;\">\n          <ion-icon name=\"restaurant\"></ion-icon> Comercios Cercanos\n        </h6>\n\n        <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of data.store;let i = index\" (click)=\"itemPage(store)\">\n          <!-- Imagen -->\n          <ion-col size=\"4\" style=\"margin: 0 !important;padding: 0 !important;\">\n            <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n              <div class=\"close_in\"  *ngIf=\"!store.open\">\n                <span>NO DISPONIBLE EN ESTE MOMENTO</span>\n              </div>\n            </div>\n          </ion-col>\n          <!-- Imagen -->\n          <!-- Info -->\n          <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\n            <div style=\"width: 100%;text-align: left;padding: 0 !important;margin: 0 !important;\">\n              <b style=\"font-size: 16px;\">{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b>\n            </div>\n            <small style=\"color: gray;font-size: 10px\">\n              <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n            </small><br>\n            <small style=\"color: gray;font-size: 10px\">\n              Entrega en {{ store.delivery_time }}\n            </small><br />\n\n            <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n              Distancia: {{store.km}} km\n            </small><br *ngIf=\"store.max_distance > 0\" />\n\n            <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n              Sin cobertura en tu ubicación.\n            </small><br *ngIf=\"store.max_distance == 0\" />\n\n            <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n              Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n            </small>\n          </ion-col>\n          <!-- Info -->\n        </ion-row>\n      </div>\n      <!--********************** Comercios Cercanos ********************************************************-->\n      \n      <!--********************** Infinite Scroll ******************************************-->\n        <ion-infinite-scroll *ngIf=\"!hasSearch\" threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Cargando mas datos...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n        <ion-item *ngIf=\"let_end\" style=\"text-align: center;\">\n          Ya no hay mas tiendas que mostrar.\n        </ion-item>\n      <!--********************** Infinite Scroll ******************************************-->\n    </ion-card-content>\n  </div>\n  <!-- Content -->\n\n</ion-content>\n\n<ion-footer *ngIf=\"text && isKeyboardHide\">\n  <ion-toolbar mode=\"md\">\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        \n      <ion-tab-button (click)=\"loadData(city_id + '?ss=ss')\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>{{ text.home_footer_name }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"nearBy()\">\n          <ion-icon name=\"pin\"></ion-icon>\n          <ion-label>{{ text.home_nearest }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"basket\"></ion-icon>\n          <ion-label>{{ text.home_cart }}</ion-label>\n          <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n        </ion-tab-button>\n\n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>{{ text.home_profile }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map