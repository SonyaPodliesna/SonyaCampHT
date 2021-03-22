import { Pipe, PipeTransform, Input, Output } from '@angular/core';


@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {

      return value;
    }
    let newStr: string = "";
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }

    return newStr;
  }
}
