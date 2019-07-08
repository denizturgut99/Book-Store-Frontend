import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { IBooks } from './books';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {
    constructor(private http: HttpClient) {  }

    getBooks(): Observable<IBooks[]> {
        return this.http.get<IBooks[]>("http://localhost:8080/api/books")
    }
}