import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, term: any): any {
        //check if search term is undefined
        if (term === undefined) return value;
        //return updated books array
        return value.filter((book)=>{
          return book.bookName.toLowerCase().includes(term.toLowerCase());
        })
      }
}