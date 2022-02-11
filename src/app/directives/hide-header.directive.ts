import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[hide-header]'
})
export class HideHeaderDirective {

  @Input('header') header: any;
  @Input('srcBar') srcBar: any;
  private lastY = 0;
  headerHeight: any;
  constructor(
    public element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit(): void {
    this.domCtrl.write(() => {
        this.renderer.setStyle(this.header.el, 'webkitTransition','margin-top 180ms');
    });
    
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    if ($event.detail.currentY > 56) {
      if ($event.detail.scrollTop > 56) {
        this.renderer.setStyle(this.header.el,'margin-top','-56px');
      }else {
        this.renderer.setStyle(this.header.el,'margin-top','0px');
      }
    }else {
      this.renderer.setStyle(this.header.el,'margin-top','0px');
    }
  }

}
