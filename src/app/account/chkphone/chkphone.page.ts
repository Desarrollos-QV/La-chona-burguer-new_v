import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { EventsService } from '../../service/events.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import * as firebase from 'firebase/app'; 

@Component({
  selector: 'app-chkphone',
  templateUrl: './chkphone.page.html',
  styleUrls: ['./chkphone.page.scss'],
})
export class ChkphonePage implements OnInit {

  user_id:any;
  Code: String;
  phone: any = '';
  stateVerify;
  windowsRef:any;
  confirmationResult: any;
  txtbnt: any;
  btnDisabled = true;
  // public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public keyboard:Keyboard,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService, 
  ) { }

  ngOnInit() {
    this.windowsRef = this.server.windowRef;
    this.stateVerify = 'inputPhone';
    this.txtbnt = 'Siguiente';
    this.user_id = localStorage.getItem('user_id');
  }

  ionViewWillEnter(){
    // this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
    //   size: "invisible",
    //   callback: function(response) {
    //     this.verify();
    //   }
    // });
  }

  async verify() {

    this.btnDisabled = false;

    const loading = await this.loadingController.create({
      message: 'Validando...',
    });
    await loading.present();

    if (this.phone.length == 10) {
      let phone = '+521'+this.phone;
      // firebase.auth().signInWithPhoneNumber(phone,this.windowsRef.recaptchaVerifier).then(confirmationResult => {
      // this.firebaseAuthentication.verifyPhoneNumber(phone,3000).then((confirmationResult:any) => {
      //   // this.windowsRef.confirmationResult = confirmationResult;
      //   localStorage.setItem('confirmationResult',confirmationResult);
      //   localStorage.setItem('phone',this.phone);
      //   setTimeout(() => {
      //     loading.dismiss();
      //     this.nav.navigateForward('/verfycode');
      //   }, 700);
      // }).catch(fail => {
      //   this.btnDisabled = true;
      //   this.presentToast('Error: '+fail,'danger');
      //   console.log('fail: '+fail);
      //   loading.dismiss();
      // });
    }else {
      loading.dismiss();
      this.btnDisabled = true;
      this.presentToast('Verifica tu Número Telefonico.','danger');
    }
  }

  async resend() {
    const loading = await this.loadingController.create({
      message: 'Volviendo a intentar...',
    });
    await loading.present();
    this.stateVerify = 'inputPhone';
    this.txtbnt = 'Siguiente';

    setTimeout(() => {
      this.windowsRef = this.server.windowRef;
      // this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      loading.dismiss();      
    }, 800);

  }

  async presentToast(txt, color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'bottom',
      mode:'ios',
      color:color
    });
    toast.present();
  }
}
