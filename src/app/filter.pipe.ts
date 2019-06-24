import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(books: any, term: any): any {
        //check if search term is undefined
        if (term === undefined) return books;
        //return updated employees array
        return books.filter((book)=>{
          return book.bookName.toLowerCase().includes(term.toLowerCase());
        })
      }
}