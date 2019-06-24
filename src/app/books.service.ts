
export class BooksService {
    allBooks;
    bookData;

    constructor() {
        this.getBooks()
    }

    getBooks() {
        let url = 'http://localhost:8080/api/books';
        return fetch(url, {
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
            this.getData()
            // console.log(this.allBooks);  
        })
        .catch(error => console.log(error))
    }

    getData() {
        let allBooks = this.allBooks;
        
        let books = allBooks['books']
        this.bookData = books;
    }

    getBooksData() {
        return this.bookData;
    }

}