import { Directive, ElementRef, HostListener, Input, } from '@angular/core';


@Directive({
  selector: '[appColorCheck]'
})
export class ColorCheckDirective {
  @Input('appColorCheck') any;

  constructor(private _e: ElementRef) {
  }

  @HostListener('keydown', ['$event']) onKeyDown(_e: KeyboardEvent): void {
    this._e.nativeElement.style.backgroundColor = '#' + this._e.nativeElement.value;
  }

}
