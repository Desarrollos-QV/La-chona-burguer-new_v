import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
import { ModalController, IonContent, Platform, NavController, IonToolbar } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  @ViewChild(IonContent, {static: false}) Content: IonContent;

  data:any;
  veg = false;
  cart_no:any;
  count:any;
  order:any;
  text:any;
  cart:any = [];
  showToolbar = false;
  isOpen: any;
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 3.3,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    spaceBetween:7,
  }

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public server : ServerService,
    private statusBar: StatusBar,
    public platform: Platform,
    public nav: NavController,
    public route: ActivatedRoute
  ) 
  { 
    this.text = JSON.parse(localStorage.getItem('app_text'));
    this.route.queryParams.subscribe( params => {
      if (params.id) {
        var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
        var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
        var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

        this.server.getStore(params.id+"?lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((data:any) => {
            if (data.data) {
              console.log(data);
              this.data = data.data[0];
              // Order Sort_no
              this.data.items.sort((a,b) => {
                return parseFloat(a.sort_no) - parseFloat(b.sort_no);
              });
              
            }else {
              this.nav.navigateRoot('home');
            }
        });
      }else {
        this.nav.navigateRoot('home');
      }
    }); 
  }

  ngOnInit() {
   
  }


  ionViewWillEnter()
  {
    if(localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined)
    {
      this.cart_no = Math.floor(Math.random()*2000000000)+1;

      localStorage.setItem('cart_no',this.cart_no);
    }
    else
    {
      this.cart_no = localStorage.getItem('cart_no');
    }

    this.server.cartCount(this.cart_no).subscribe((response:any) => {
      
      this.count = response.data;
      this.cart  = response.cart;
     });
  }

  vegOnly()
  {
  	this.veg = this.veg == true ? false : true;
  }

  async showOption(item,currency) {
    this.isOpen = true;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(item),
        cart: this.cart,
        currency : currency
      }
    };

    this.nav.navigateForward(['/option'], navigationExtras);
  }

  async viewInfoStore() 
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.data.id
      }
    };

    this.nav.navigateForward(['/info'], navigationExtras);
  }

  addToCart(id,price,type = 0,qty,addon = [])
  {
      this.presentToast("Elemento Agregado.");
      var allData = {
       cart_no : this.cart_no,
       id : id,
       price : price,
       qtype : type,
       type:0,
       qty: qty,
       addon : addon,
       price_comm: this.data.c_value
      };
     this.server.addToCart(allData).subscribe((response:any) => {
        this.count = response.data.count;
        this.cart  = response.data.cart;
     });
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

  hasCart(id)
  {
    for(var i =0;i<this.cart.length;i++)
    {
      if(this.cart[i].item_id == id)
      {
        return this.cart[i].qty;
      }
    }

    return false;
  }

  async updateCart(id,type = 0)
  {
    this.presentToast("Removed Successfully");
    this.server.updateCart(id,type+"?cart_no="+this.cart_no+"&lid="+localStorage.getItem('lid')).subscribe((response:any) => {
    
    this.cart = response.data;
    
    });
  }

  onScroll(event) {
    
    // let title:  HTMLSpanElement = document.querySelector('.content_title');
    // let subTitle: HTMLSpanElement = document.querySelector('.title_header');
    let menuSub: HTMLDivElement = document.querySelector('.slide-menu');
    let ToolSub: HTMLDivElement = document.querySelector('.slide-tool');
    
    if (event && event.detail && event.detail.scrollTop) {
      const scrollTop = event.detail.scrollTop;
      this.showToolbar = scrollTop >= 175;

      if (scrollTop >= 175) {
        menuSub.className = 'slide-menu slide_down_View';
        ToolSub.className = "slide-tool scroll animate__animated animate__lightSpeedInRight";
      }else {
        menuSub.className = 'slide-menu';
        ToolSub.className = "slide-tool";
      }
    }
  }

  ScrollTo(div) {
    let menuSub: HTMLDivElement = document.querySelector('.cate_'+div);
    let DownY  = menuSub.offsetTop + 210;
  
    this.Content.scrollToPoint(0,DownY,300);
  }
}	