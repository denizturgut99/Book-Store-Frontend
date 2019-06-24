import { MainComponent } from './header.component';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MainComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BooksService,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
