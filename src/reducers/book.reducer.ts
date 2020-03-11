import { Action } from '@ngrx/store';
import { BooksModel } from '../models/books.model';
import * as BookActions from '../actions/books.actions'


const initialState: BooksModel = {
  name: 'First Book',
  url: 'http://google.com'
};

export function reducer(state: BooksModel[] = [initialState], action: BookActions.Actions) {
  switch (action.type) {

  }
}
