import { Observable } from 'rxjs';

export interface Riddle36 {

  /**
   * Return an Observable that only emits items from [source]
   * if there isn't another emission before 300 milliseconds has passed.
   *
   * Use case: You want the latest user-input to trigger a search
   * request for the entered text, but only when no changes have been
   * made for 300 milliseconds to avoid unnecessary requests.
   */
  solve(source: Observable<string>): Observable<string>;
}
