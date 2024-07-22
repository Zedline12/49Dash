import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beauty',
})
export class BeautyPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    value = this.removeUnderScore(value);
    value = this.capitalizeWords(value);
    return value;
  }
  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }
  capitalizeWords(str: string) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }
}
