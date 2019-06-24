import { BooksService } from './books.service';
import { Component, Input } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
    selector: 'books',
    template: ` 

            <div class="container">
                <div class="miniBooks" *ngFor="let book of bookData | filter:term">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img :src="{{book.bookPortrait}}" class="bookPortrait" alt="books">
                            </div>
                            <div id="allBooks" class="flip-card-back">
                                <p id="title" class="bookName"><strong id="titleFilter"> {{book.bookName}} </strong></p>
                                <p id="desc" class="bookDesc"><strong> {{book.bookDescription}} </strong></p>
                                <button data-fancybox="gallery" type="button" :href="book.bookDetail" class="btn btn-outline-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    `
})
export class BooksComponent {
    //input is necessary to connect 2 components and make a name filter
    @Input('search-term')
    public term: string = null;

    allBooks;
    bookData;
    buttons = [];

    constructor() {
        this.getBooks()
    }

    getBooks() {
        let url = 'http://localhost:8080/api/books';
        fetch(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.allBooks = json;
            // console.log(this.allBooks);
            this.getData()
        })
        .catch(error => console.log(error))
    }

    getData() {
        let allBooks = this.allBooks;
        let books = allBooks['books']
        this.bookData = books;
    }

    languageFilter(e) {
        console.log(e)
    }

}