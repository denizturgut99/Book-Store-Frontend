import { FilterLang } from './langFilter.pipe';
import { MainComponent } from './header.component';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MainComponent,
    FilterPipe,
    FilterLang
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BooksService,
    FilterPipe,
    FilterLang
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
