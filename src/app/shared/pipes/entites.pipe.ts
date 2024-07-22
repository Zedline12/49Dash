import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entites',
})
export class EntitesPipe implements PipeTransform {
  transform(value: Object, ...args: unknown[]): [string, any][] {
    return Object.entries(value);
  }
}
