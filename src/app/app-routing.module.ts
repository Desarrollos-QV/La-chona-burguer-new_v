import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  
  { path: 'welcome', 
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule) 
  },
  { path: 'city', 
    loadChildren: () => import('./account/city/city.module').then( m => m.CityPageModule)
  },
  { path: 'item', 
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  { path: 'option',
  loadChildren:  () => import('./option/option.module').then( m => m.OptionPageModule) 
  },
  { path: 'info', 
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule) 
  },
  { path: 'cart', 
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule) 
  },
  { path: 'offer', 
    loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule) 
  },
  { path: 'checkout', 
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule) 
  },
  { path: 'login', 
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule) 
  },
  { path: 'chkphone', 
    loadChildren: () => import('./account/chkphone/chkphone.module').then( m => m.ChkphonePageModule)
  },
  { path: 'verfycode', 
    loadChildren: () => import('./account/verfycode/verfycode.module').then( m => m.VerfycodePageModule)
  },
  { path: 'signup', 
    loadChildren: () => import('./account/signup/signup.module').then( m => m.SignupPageModule) 
  },
  { path: 'forgot', 
    loadChildren: () => import('./account/forgot/forgot.module').then( m => m.ForgotPageModule) 
  },
  { path: 'address', 
    loadChildren: () => import('./account/address/address.module').then( m => m.AddressPageModule) 
  },
  { path: 'done', 
    loadChildren: () => import('./done/done.module').then( m => m.DonePageModule) 
  },
  { path: 'profile', 
    loadChildren: () => import('./account/profile/profile.module').then( m => m.ProfilePageModule) 
  },
  { path: 'order',
  loadChildren:  () => import('./account/order/order.module').then( m => m.OrderPageModule) 
  },
  { path: 'rate/:id/:type',
  loadChildren:  () => import('./account/rate/rate.module').then( m => m.RatePageModule) 
  },
  { path: 'about', 
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule) 
  },
  { path: 'how', 
    loadChildren: () => import('./page/how/how.module').then( m => m.HowPageModule) 
  },
  { path: 'faq', 
    loadChildren: () => import('./page/faq/faq.module').then( m => m.FaqPageModule) 
  },
  { path: 'contact', 
    loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule) 
  },
  { path: 'lang', 
    loadChildren: () => import('./lang/lang.module').then( m => m.LangPageModule) 
  },
  { path: 'categorys', 
    loadChildren: () => import('./categorys/categorys.module').then( m => m.CategorysPageModule)
  },
  { path: 'locked', 
    loadChildren: () => import('./locked/locked.module').then( m => m.LockedPageModule)
  },
  {
    path: 'setaddress',
    loadChildren: () => import('./account/address/setaddress/setaddress.module').then( m => m.SetaddressPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
