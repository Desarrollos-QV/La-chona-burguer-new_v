import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { EventsService } from '../../service/events.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';
// Facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// Firebase
import * as firebase from 'firebase/app'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  logedd: any;
  text:any;
  dating = [];
  // public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService,
    private fb: Facebook, 
    ){

   this.text = JSON.parse(localStorage.getItem('app_text'));

  }

  ngOnInit()
  {
   
  }

  async signup(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor Espere...',
    });
    await loading.present();

    this.server.signup(data).subscribe((response:any) => {
    
    if(response.msg != "done")
    {
      this.presentToast(response.msg,'danger');
    }
    else
    {
      localStorage.setItem('user_id',response.user_id);
      
      this.events.publish('user_login', response.user_id);
      
      this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');

      this.nav.navigateRoot('/home');
    }

    loading.dismiss();
      
    });
  }

  fbSignup() {
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => {
      if (res.status == 'connected') {
        // Usuarios Logeado...
        let url = "https://graph.facebook.com/me?fields=id,name,email&access_token="+res.authResponse.accessToken;
        this.server.signupWithfb(url).subscribe(data => {
          this.signup({name : data['name'],
            email: data['email'],
            phone: 'null',
            password: data['id'],
            pswfb: data['id']});
          });
        }
    }).catch(e => {
      this.presentToast("Error logging into Facebook "+e, 'danger');
    });

    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  
  async presentToast(txt, color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:color
    });
    toast.present();
  }

  goBck()
  {
    this.nav.navigateRoot('welcome');  
  }
}
