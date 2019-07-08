import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterLang',
    pure: false
})
export class FilterLang implements PipeTransform {
    transform(bookLang: any, lang: any): any {

        if(lang === undefined) return bookLang;

        return bookLang.filter((book) => {
            let langFilter = book.bookLang.toLowerCase().includes(lang.toLowerCase()) || book.bookLang.length == 0;
            return langFilter
        })
    }
}
