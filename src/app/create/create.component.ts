import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksModel } from '../models/books.model';
import { AppState } from '../app.state';
import * as BookActions from '../actions/books.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {

  }

  addTutorial(name, url) {
    this.store.dispatch(new BookActions.AddBook({name, url}));
  }

  ngOnInit(): void {
  }

}
