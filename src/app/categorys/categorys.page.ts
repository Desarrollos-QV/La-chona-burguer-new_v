import { Component, OnInit } from '@angular/core';
import { NavController, IonContent, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.page.html',
  styleUrls: ['./categorys.page.scss'],
})
export class CategorysPage implements OnInit {
  text: any;
  data: any;
  SearchTitle: any = "Categorías";
  SearchData = [];
  loadBody: boolean = false;
  fk_items = [];
  count: any;
  loadView: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    public server : ServerService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { 
    this.loadData(localStorage.getItem('city_id')+"?ss=ss", '');
  }

  ngOnInit() {
    
  }
  
  ionViewWillEnter()
  {   
    if (!localStorage.getItem('user_id')) {
      this.nav.navigateRoot('/welcome');
    }else {
      if(localStorage.getItem('user_id') == 'null')
      {
        this.nav.navigateRoot('/welcome');
      }
    }

    if(localStorage.getItem('app_text'))
    {
      this.text = JSON.parse(localStorage.getItem('app_text'));
    }
  }

  viewAll() {
    this.SearchData = [];
    this.SearchTitle = 'Categorias';
    this.loadData(localStorage.getItem('city_id')+"?ss=ss", '');
  }

  async loadData(city_id, cat)
  {
    const loading = await this.loadingController.create({});
    await loading.present();

    this.data = null;
    this.SearchData = [];
    this.fk_items = []; // Vaciamos
    this.loadBody = false;
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    if (cat != '') {
      this.server.SearchCat(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng+"&cat="+cat).subscribe((response:any) => {
        if (response.data.length == 0) {
          this.SearchTitle = '';
          this.loadBody = true;
          this.loadView = true;
        }else {
          this.loadView = false
          this.SearchTitle = response.cat;
          this.SearchData = response.data;
        }
        loading.dismiss();
      });
    }else {
      this.loadView = false;
      this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
        this.getTypeStore(response.data.Categorys);
        loading.dismiss();
      });
    }
    
  }

  getTypeStore(List_type: any) {
    this.fk_items = []; // Limpiamos
    List_type.forEach(element => {
      if (element.status == 0) {
        this.fk_items.push({'id' : element.id,'Name' : element.name,'Img' : element.img}); 
      }   
    });

    this.loadBody = true;
  }

  SearchColCategory(Cat) {
    this.loadData(localStorage.getItem('city_id')+"?ss=ss", Cat);
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
}
