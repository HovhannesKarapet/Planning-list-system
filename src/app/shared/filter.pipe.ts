import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, form?: any): any {
    let result = value;
    if (form.status) {
      if (form.status === 'All') {
        result = value;
      } else {
        result = value.filter(item => {
          if (item.status === form.status) {
            return item;
          }
        });
      }
    }
    if (form.from) {
      let d = new Date(form.from);
      let dd = d.getDate() + d.getMonth() + 1 + d.getFullYear();
      result = result.filter(item => {
        let f = new Date(item.date);
        let ff = f.getDate() + f.getMonth() + 1 + f.getFullYear();
        if (ff >= dd) {
          return item;
        }
      });
    }
    if (form.to) {
      let d = new Date(form.to);
      let dd = d.getDate() + d.getMonth() + 1 + d.getFullYear();
      result = result.filter(item => {
        let f = new Date(item.date);
        let ff = f.getDate() + f.getMonth() + 1 + f.getFullYear();
        if (ff <= dd) {
          return item;
        }
      });
    }
    if (form.place) {
      result = result.filter(item => {
        if (item.place.toLowerCase().indexOf(form.place.toLowerCase()) > -1) {
          return item;
        }
      });
    }
    if (form.address) {
      result = result.filter(item => {
        if (item.address.toLowerCase().indexOf(form.address.toLowerCase()) > -1) {
          return item;
        }
      });
    }
    return result;
  }

}
