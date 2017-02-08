import {Directive,ElementRef,Renderer,HostListener,Input} from '@angular/core';

@Directive({
  selector:'[appMyNewDirective]'
})
export class MyNewDirectiveDirective{

  constructor(private el:ElementRef,private render:Renderer){


  }

  @HostListener('mouseenter') methodToHandleMouseEnterAction(){
    this.changecolor('red');
  }

  @HostListener('mouseleave') methodToHandleMouseExitAction(){
    this.changecolor('blue');
  }

  private changecolor(color: string) {

    this.render.setElementStyle(this.el.nativeElement, 'color', color);
  }
}