import { Observable } from 'rxjs';

export interface Riddle25 {

  /**
   * In case the [source] is empty return a default value of 5.
   *
   * Use case: Continue with data if the stream is empty.
   */
  solve(source: Observable<number>): Observable<number>;
}
