import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = true;
  constructor(private el: ElementRef) { 

  }
  @HostBinding('class.show') get opened() {
    return this.isOpen;
}
@HostListener('click') open() {
  this.isOpen = true;
  this.el.nativeElement.querySelector('.dropdown-menu').classList.add('show')                
}
@HostListener('document:click', ['$event.target']) close (targetElement) {
  let inside: boolean = this.el.nativeElement.contains(targetElement);
  if(!inside) {
      this.isOpen = false;
      this.el.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
  }
}


  // @HostListener('click') toggleOpen(){
   
  //   this.isOpen = !this.isOpen;
  // }


}
