import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ux'
})
export class UxPipe implements PipeTransform {

  transform(value:any){
    
    // return value.substr(0,4) + '....'
    // if else condition 
    if(value.length >8){
      return value.substr(0,5) + '.....'
    }else{
      return value
    }
  }

}
