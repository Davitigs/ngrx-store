import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksModel } from '../models/books.model';
import { AppState } from '../app.state';
import * as BookActions from '../actions/books.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  books: Observable<BooksModel[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.books = store.select('book');
  }

  ngOnInit() {
  }

  removeBook(ind: number) {
    this.store.dispatch(new BookActions.RemoveBook(ind));
  }
}
