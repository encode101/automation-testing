import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    
    if (!items) return [];
    if (searchText == "") return items;

    searchText = searchText.toLowerCase();
    let a= items.filter((it:any) => {
       for (const user in it) {
         return it[user].toLowerCase().includes(searchText.toLocaleLowerCase());
       }
    });
    return a;
  }
}
