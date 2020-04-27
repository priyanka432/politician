import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], searchTerm?: any): any {
    return value.filter(res=> {      
        return res.authorName.indexOf(searchTerm) > -1       
    })
  }

}


 
 