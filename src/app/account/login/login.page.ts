import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { EventsService } from '../../service/events.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
// Facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  email = "";
  password = "";
  text:any;
  
  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
  
  isKeyboardHide=true;
  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public keyboard:Keyboard,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService,
    private fb: Facebook){

    this.text = JSON.parse(localStorage.getItem('app_text'));

  }

  ngOnInit()
  { 
    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
      // console.log('SHOWK');
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
      // console.log('HIDEK');
    });
  }

  async login(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor Espere...',
    });
    await loading.present();

    this.server.login(data).subscribe((response:any) => {
  
    if(response.msg != "done")
    {
      this.presentToast(response.msg);
      // this.nav.navigateRoot('signup');  
    }
    else
    {
      localStorage.setItem('user_id',response.user_id);
      
      this.events.publish('user_login', response.user_id);
      this.nav.navigateRoot('city');
    }

    loading.dismiss();

    });
  }

  async loginfb(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor Espere...',
    });
    await loading.present();
    
    this.server.loginfb(data).subscribe((response:any) => {
     
    if(response.msg != "done")
    {
      this.presentToast(response.msg);
      // this.nav.navigateRoot('signup');  
    }
    else
    {
      localStorage.setItem('user_id',response.user_id);
      
      this.events.publish('user_login', response.user_id);
      this.nav.navigateRoot('city');
    }

    loading.dismiss();

    });
  }

  fbLogin() {
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => {
      if (res.status == 'connected') {
        // Usuarios Logeado...
        let url = "https://graph.facebook.com/me?fields=id,email&access_token="+res.authResponse.accessToken;
        this.server.signupWithfb(url).subscribe(data => {
          this.loginfb({
            email: data['email'],
            password: data['id']});
          });
        }
    }).catch(e => {
      alert("Error logging into Facebook "+e);
    });

    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }


  goBck()
  {
    this.nav.navigateRoot('welcome');  
  }
}
