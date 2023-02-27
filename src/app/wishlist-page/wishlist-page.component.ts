import { Component } from '@angular/core';
import { BookService } from '../service/service.component';
import { Book } from '../interface/interface.component';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent {
  constructor(public bookService: BookService) {}
  deletingBook(book: Book) {
    this.bookService.deleteWishlistBook(book);
  }
}
