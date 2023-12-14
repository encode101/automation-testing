import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo',
  pure: false
})
export class LimitToPipe implements PipeTransform {
  transform(items: any[], number: number): any[] {
    if (!items) return [];
    if (!number || number==undefined ) return items;
    return items.splice(0, number);
  }
}
