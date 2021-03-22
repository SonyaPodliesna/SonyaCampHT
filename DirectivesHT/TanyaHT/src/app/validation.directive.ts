import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

  @Input('appValidation') any;

  constructor(private _e: ElementRef) { 
  }

  @HostListener('keydown', ['$event']) onKeyDown(_e) {
    console.log(_e)
    if ((_e.keyCode >= 65 && _e.keyCode <= 90) || _e.keyCode === 8 || (_e.keyCode >= 48 && _e.keyCode <= 57)) {
      return;
    }
    _e.preventDefault();
  }
}
