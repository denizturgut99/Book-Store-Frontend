import { MainComponent } from './header.component';
import { BooksService } from './books.service';
import { Component, Input, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'books',
    template: `
                
                
                <div class="container">
                    <div class="miniBooks" *ngFor="let book of bookData | filterName:term">
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
export class BooksComponent implements OnInit {
    //input is necessary to connect 2 components and make a name filter
    @Input('search-term')
    public term: string = null;

    bookForm : FormGroup;
    filteredBooks = [];

    allBooks;
    bookData;
    langs;
    buttons = [];

    // constructor(private booksService: BooksService) {

    // }

    constructor(private booksService: BooksService, private formBuilder: FormBuilder) {
        // this.bookData = booksService.getBooks()
        this.booksService.getBooks()
                .subscribe(data => {this.bookData = data['books']; console.log(this.bookData)})
        // Create a FormControl for each available music preference, initialize them as unchecked, and put them in an array
        
    }

    ngOnInit() {
        console.log("hello")
    }

    submit() {
        const selectedLangs = this.bookForm.value.bookData
          .map((v, i) => v ? this.bookData[i].bookLang : null)
          .filter(v => v !== null);
        console.log(selectedLangs);
    }
}