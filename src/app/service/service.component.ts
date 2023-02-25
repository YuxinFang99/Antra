import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject, of, map, tap } from 'rxjs';
import { baseUrl } from '../app.module';
import { Book } from '../interface/interface.component';

@Injectable()

export class BookService {
  booklist: Book[] = [];
  booklist$: Subject<Book[]> = new Subject();

  wishlist: any = [];
  wishlist$: Subject<Book[]> = new Subject();

  constructor(
    private http: HttpClient,
    @Inject(baseUrl) private baseUrl: string
  ) {}

  getBooks(bookName: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + bookName).pipe(
      //tap((data) => console.log(data)),  //look for book info on the console
      map((data: any) => {
        if (data.totalItems === 0) return [];
        return data.items.map((book: any) => ({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,  // some books have no author
          publisher: book.volumeInfo.publisher,
          publishDate: book.volumeInfo.publishedDate,
          imageUrl: book.volumeInfo.imageLinks?.thumbnail,
          description: book.volumeInfo.description,
        }));
      }),
      tap((books) => {
        this.booklist = books;
        this.booklist$.next(books);
      })
    )
  }

  addWishlistBook(wbook: Book) {
    for (let book of this.wishlist) {
      if (JSON.stringify(wbook) !== JSON.stringify(book)) {
        this.wishlist.push(wbook);
      }
      this.wishlist$.next(this.wishlist);
    }
  }

  deleteWishlistBook(wbook: Book) {
    this.wishlist = this.wishlist.filter((bookName: Book) => 
    bookName ? JSON.stringify(wbook) !== JSON.stringify(bookName) : false);
    this.wishlist$.next(this.wishlist);
  }
}
