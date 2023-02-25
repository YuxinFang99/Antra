import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/interface/interface.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  @Input() wbook!: Book;
  @Output() nameEmiter = new EventEmitter();

  getWbookName() {
    this.nameEmiter.emit(this.wbook);
    console.log(this.wbook);
  }
}
