import { BooksComponent } from './books.component';
import { Component } from '@angular/core';

@Component({
    selector: 'main',
    template: `
    
            <header class="booksHeader">
                <p class="headerText"><img src="https://ui-ex.com/images/book-transparent-black-and-white-6.png" class="logo" alt="logo"> Ubiqum Bookstore</p>
            </header>

            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand"><i class="fas fa-book"></i></a>
                <form id="bookSearch">
                    <input id="searchBooks" class="inputBar" type="text" [(ngModel)]="term" name="bookFilter" placeholder="Search for books">
                </form>
            </nav>
            <div class='flexWrap col-sm'>
                <div class="container">
                    <p class="welcomeText">Hello! Welcome to our book store. If you're looking for a specific book, you can use the search bar or use one of the buttons below.</p>
                </div>

                <div class="container">
                    <label> Spanish
                        <input id="input1" type="checkbox" value="es" (click)="languageFilter(event)">
                    </label>

                    <label class="space"> English
                        <input id="input2" type="checkbox" value="en" (click)="languageFilter(event)">
                    </label>

                    <label class="space"> Catalan
                        <input id="input3" type="checkbox" value="ca" (click)="languageFilter(event)">
                    </label>
                </div>

            </div>

            <div class="container" *ngIf='term'>
                <p class="welcomeText"> You searched for: {{term}} </p>
            </div>

            <books [search-term]="term"></books>
`
})

export class MainComponent { 
    
}