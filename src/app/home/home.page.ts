import { Component, OnInit,Renderer2,ViewChild, HostListener,Inject } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../service/server.service';
import { EventsService } from '../service/events.service';
import { NavController,
  Platform,
  LoadingController,
  MenuController, 
  ToastController,
  IonContent, 
  IonToolbar, 
  DomController,
  ActionSheetController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, {static: false}) Content: IonContent;
  @ViewChild(IonToolbar, {static: false}) toolbar: IonToolbar;

  BannerOptionFirst = {
    initialSlide: 0,
    slidesPerView: 3,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    spaceBetween:7,
  }
  BannerOption = {
    loop: false,
    centeredSlides: true,
    autoplay:true,
    speed: 500,
    spaceBetween:7,
  }
  SearchOption = {
    initialSlide: 0,
    slidesPerView: 3.5,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 500,
    spaceBetween:-20,

  }
  TrendOption = {
    initialSlide: 0,
    slidesPerView: 1.1,
    loop: false,
    centeredSlides: false,
    autoplay:true,
    speed: 800,
    spaceBetween:-9,
  }

  ask_again = {
    initialSlide: 0,
    slidesPerView: 1.8,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 800,
    spaceBetween:-9,
  }
  MiddleBannerOption = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    autoplay:true,
    speed: 800,
    spaceBetween:4,

  }
  city_name:any;
  city_id: any;
  data:any;
  fakeData = [1,2,3,4,5,6,7];
  oldData:any;
  showLoading = false;
  filterPress:any;
  hasSearch = false;
  searchQuery:any;
  count:any;
  text:any;
  order:any;
  loadRecentItems: boolean = false;
  RecentsItems = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 800,
    spaceBetween:-9,
  }
  RecentsStore = [];
  LastVisitStore = [];
  loadRegularitems: boolean = false;
  LastPlatillos = {
    initialSlide: 0,
    slidesPerView: 1.2,
    freeMode: true,
    loop: false,
    centeredSlides: false,
    autoplay:true,
    speed: 800,
    spaceBetween:9,
  }
  lastDishes = [];
  loadSliderKf: boolean = false;
  // Inicialiamos el slider de KindofFood
  kind_food = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true
  }
  fk_items = [];
  isKeyboardHide=true;
  ComerceRest = [];
  nearby: any;
  address: any;
  scroll: any;
  showToolbar = false;
  headr: any;
  InTrendingStore = [];
  bannerBottomRand: any;
  ComerceRestClose = [];
  allDataComerce = [];
  max_stores = 0;
  length_store = 0;
  Tot_stores = 0;
  let_init = 0;
  let_end: boolean = false;
  trending_wrap: String = "no_margin";
  constructor(
    public server : ServerService,
    private nav: NavController,
    public events: EventsService,
    public keyboard:Keyboard,
    public loadingController: LoadingController,
    public menu: MenuController,
    public toastController: ToastController,
    private renderer: Renderer2,
    private domCtrl: DomController,
    public actionSheetController: ActionSheetController, 
    )
  {
   
  }

  ionViewWillEnter()
  {   
    this.headr = document.getElementsByClassName('header')[0];
    this.address = localStorage.getItem("address");
    this.menu.enable(true);
    this.keyboard.onKeyboardWillShow().subscribe(()=>{this.isKeyboardHide=false;});
    this.keyboard.onKeyboardWillHide().subscribe(()=>{this.isKeyboardHide=true;});

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
    }else {
      this.city_id   = localStorage.getItem('city_id');
    }

    // Verificamos la direccion de entrega.
    if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') this.nav.navigateForward('setaddress');
 

    // Obtenemos el app_text
    if(localStorage.getItem('app_text')) this.text = JSON.parse(localStorage.getItem('app_text'));
 
    // Verificamos al usuario
    this.verifyUser();
    
    // Cargamos todos los Datos
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  }

  ngOnInit()
  {
    this.searchQuery = null;
    this.hasSearch   = false; 
  }

  verifyUser()
  {
    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      if (response.data) {
        if (response.data.phone == 'null') {
         this.presentToast("Te recomendamos agregar un número telefonico a tu cuenta","warning");
          //this.nav.navigateBack('/chkphone');
        }else if (response.data.status == 1) {
          this.nav.navigateBack('/locked')
        }else if (response.data.password == response.data.pswfacebook) {
          this.presentToast("Te recomendamos cambiar tu contraseña","danger");
        }

        // Obtenemos el carrito de compras
        this.server.cartCount(localStorage.getItem('cart_no')+"?user_id="+localStorage.getItem('user_id')).subscribe((response:any) => {
          this.count = response.data;
          this.order = response.order;
        });

        if (this.city_id != localStorage.getItem('city_id')) {
          this.city_name = localStorage.getItem('city_name');
          this.city_id   = localStorage.getItem('city_id');
          this.loadData(localStorage.getItem('city_id')+"?ss=ss");
        }

        
      }else {
        localStorage.removeItem('user_id');
        // this.nav.navigateBack('/welcome')
      }
    });
  }

  clearSearch() {
    this.searchQuery = null;
    this.hasSearch   = false;
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  }

  async nearBy()
  {
    await this.delay(500);
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();
    this.nearby = true;
    this.data.store.sort((a,b) => {
      loading.dismiss();
      return parseFloat(a.km) - parseFloat(b.km);
    });
    // this.loadData(localStorage.getItem('city_id')+"?ss=ss"+"&lat="+localStorage.getItem('current_lat')+"&lng="+localStorage.getItem('current_lng'));
  }

  async loadData(city_id)
  {
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

    this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      console.log(response);
      this.data = response.data;
      this.text = response.data.text;
      this.Tot_stores = response.data.Tot_stores;
      this.events.publish('text', this.text);
      this.events.publish('admin', response.data.admin);
      localStorage.setItem('app_text', JSON.stringify(response.data.text));
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
    
      this.loadRecentItems  = true;
      this.loadRegularitems = true;
      this.loadSliderKf     = true;
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
      }else if (response.data.store > 5) {
        min = 5;
      }else {
        min = 1;
      }
      let random = Math.floor(Math.random() * (response.data.store.length - min)) + min;
      this.bannerBottomRand = random;
    });
  }

  loadMoreData(event) {
    setTimeout(() => {
      this.let_init += 5;
      var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
      var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
      var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
      var city_id = localStorage.getItem('city_id')+"?ss=ss";
      
      this.server.getMoreStores(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng+"&init="+this.let_init).subscribe((response:any) => {
        
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

    this.RecentsStore.sort((a,b) => {
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
        this.server.getStore(element.store_id+"?lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((data:any) => {
          console.log(data);
            if (data.data) {
              if (i <= 3) {
                this.LastVisitStore.push(data.data[0]);
              }
            }else {
              this.nav.navigateRoot('home');
            }
        });
        
      }

      if (this.LastVisitStore.length > 0) {
        this.trending_wrap = 'margin_top';
      }

      this.LastVisitStore.sort((a,b) => {
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

  getTypeStore(List_type: any) {
    this.fk_items = []; // Limpiamos
    List_type.forEach(element => {
      if (element.status == 0) {
        this.fk_items.push({'Name' : element.name,'Img' : element.img});
      }
    });

    this.fk_items.reverse();
  }

  async trashLasComm() {
    localStorage.removeItem('LastStore');
    this.trending_wrap = 'no_margin';
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  }

  search(ev)
  {
    var val = ev.target.value;

    if(val && val.length > 0)
    {
      this.data      = null;
      this.hasSearch = val;

      let search = localStorage.getItem('city_id')+"?q="+val;
      var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
      var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
      var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

      this.server.homepage(search+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
       
        this.data = response.data;
        this.text = response.data.text;
        this.events.publish('text', this.text);
        this.events.publish('admin', response.data.admin);
        localStorage.setItem('app_text', JSON.stringify(response.data.text));
        localStorage.setItem('admin', JSON.stringify(response.data.admin));
      
        this.loadRecentItems  = true;
        this.loadRegularitems = true;
        this.loadSliderKf     = true;
        // Obtenemos los comercios de donde se ha pedido comida
        this.getLastCommPed();
        // Obtenemos todas la categorias
        this.getTypeStore(response.data.Categorys);
        // Ordenamos por los locales mas recientes
        this.data.store.sort((a,b) => {
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
    else
    {
      this.ngOnInit();
      this.hasSearch = false;
    }
  }

  async dataFilter(type)
  {
    this.filterPress = type;
    await this.delay(500);
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();

    if(type == 1)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.discount_value) - parseFloat(a.discount_value);
      });
    }
    else if(type == 2)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(a.delivery_charges_value.costs_ship) - parseFloat(b.delivery_charges_value.costs_ship);
      });
    }
    else if(type == 3)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.trending) - parseFloat(a.trending);
      });
    }
    else if(type == 4)
    {
        this.ComerceRest.sort((a,b) => {
          this.filterPress = 0;
          loading.dismiss();
          return parseFloat(b.id) - parseFloat(a.id);
        });
        
    }
    else if(type == 5)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.rating) - parseFloat(a.rating);
        });
    }
    else if(type == 6)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.delivery_time) - parseFloat(a.delivery_time);
      });
    }
    else if(type == 7)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        if (a.open) {
          return a; 
        }
      });
    }
    
  }

  async delay(ms: number) {
    
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  bannerLink(offer)
  {

    if(offer.link)
    {
      let city_id = localStorage.getItem('city_id')+"?banner="+offer.id;
      var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
      var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
      var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
      this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
        this.itemPage(response.data.store[0]);
      });
    }
  }

  doRefresh(event) {

    setTimeout(() => {
      this.loadData(localStorage.getItem('city_id')+"?ss=ss");
      event.target.complete();
    }, 2000);
  }

  itemPage(storeData)
  {
    if(storeData.open)
    {
      if (storeData.max_distance == 1) {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            store: storeData.title,
            id: storeData.id
          }
        };
    
        this.nav.navigateForward(['/item'], navigationExtras);

      }else {
        this.presentToast("El comercio esta fuera de alcance.",'danger');
      }
    }else {
      this.presentToast("El comercio se encuentra cerrado.",'danger');
    }
    
  }

  ViewCat(Name) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        Cat: Name
      }
    };
    this.nav.navigateForward(['/categorys'], navigationExtras);
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:color
    });
    toast.present();
  }

  async OptionCat_one() {
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }

  async OptionCat_two() {
    
    
    const actionSheet = await this.actionSheetController.create({
      header: "Filtros",
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Más Recientes',
        handler: () => {
          this.nearby = false;
          this.dataFilter(4);
        }
      },{
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
    await actionSheet.present();
  }


}
