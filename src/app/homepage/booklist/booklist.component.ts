import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../service/service.component';
import { Book } from '../../interface/interface.component';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  constructor(private bookService: BookService) {}
  @Input() book!: Book;
  @Output() nameEmiter = new EventEmitter();

  ngOnInit() {}

  getName() {
    this.nameEmiter.emit(this.book);
    console.log(this.book);
  }
}
