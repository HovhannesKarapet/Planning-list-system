import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search?: any): any {
    if (search) {
      search = search.toLowerCase();
      return value.filter(item => {
        if (item.title.toLowerCase().indexOf(search) > -1) {
          return item;
        }
        if (item.place.toLowerCase().indexOf(search) > -1) {
          return item;
        }
        if (item.address.toLowerCase().indexOf(search) > -1) {
          return item;
        }
      });
    }
    return value;
  }

}
