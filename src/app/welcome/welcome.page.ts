import { Component, OnInit,ViewChild } from '@angular/core';
import { ServerService } from '../service/server.service';
import { NavController,Platform,LoadingController,IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

@ViewChild('slides',{static:false}) slides: IonSlides;

text:any;
slideOptsTwo = {
    slidesPerView: 1,
    loop: true,
    autoplay:false,
    pagination: {
      el: '.swiper-pagination',
    }

}

  data:any;
  getStart = false;



  chargePage: String;
  loadpage: String;
  IniSes: boolean;
  // Datos del usuario
  Email: any;
  Name: String;
  Aps: String;
  Phone: any;
  Key: String;

  // Control de errores
  Error: String;  
  constructor(
    public server : ServerService,
    public loadingController: LoadingController,
    public nav: NavController,
    public menu : MenuController
  ) { 
    
    this.menu.enable(false);
  }


  ngOnInit()
  {
    this.loaingData();
  }

  async loaingData()
  {
    const loading = await this.loadingController.create({
      message: 'Bienvenido(a)...',
      mode: 'md'
    });

    await loading.present();

    if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
    {
      this.nav.navigateRoot('/home');
    }

    this.server.welcome().subscribe((response:any) => {
      console.log(response);
      this.data = response.data;
      this.chargePage = 'sliderIni';
      this.loadpage   = 'EmailIn';
      this.IniSes     = false;
      loading.dismiss();
    });
  }
}
