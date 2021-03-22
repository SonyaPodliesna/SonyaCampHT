import { Directive, Input, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  private _myColor: string;

  @Input('appHoverColor') set color(value: string) {
    this._myColor = '#' + value;
  }
  
  constructor(private _e: ElementRef) {
  }

  @HostListener('mouseover') onHover() {
    this._e.nativeElement.style.color = this._myColor;
  }

  @HostListener('mouseout') onOut() {
    this._e.nativeElement.style.color = '';
  }

}
