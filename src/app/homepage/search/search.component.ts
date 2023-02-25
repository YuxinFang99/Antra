import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import {
  debounceTime,
  fromEvent,
  mergeMap,
  Subscription,
  switchMap,
} from 'rxjs';
import { BookService } from '../../service/service.component';
import { Book } from '../../interface/interface.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  bookname: string = '';
  subsq = new Subscription();
  @ViewChild('inputbook', { static: true }) inputbox!: ElementRef;


  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.subsq = fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        mergeMap((_) => {
          return this.bookService.getBooks(this.bookname);
        })
      )
      .subscribe((books: any[]) => {
        console.log(books);
      });
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }

  addingBook(book: Book) {
    this.bookService.addWishlistBook(book);
  }

  deletingBook(book: Book) {
    this.bookService.deleteWishlistBook(book);
  }
  
}
