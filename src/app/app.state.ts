import { BooksModel } from './models/books.model';

export interface AppState {
  readonly book: BooksModel[];
}
