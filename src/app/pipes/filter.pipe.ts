import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, searchTerm: unknown[]): any {
    return value.filter(function(search:any){
      return search.name.toLowerCase().indexOf(searchTerm) > -1

    })
  }

}
