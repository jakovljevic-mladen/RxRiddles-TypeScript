import { Observable } from 'rxjs';

export interface Riddle2 {

  /**
   * Increment each emitted value of the given [source] by 1.
   *
   * Use case: You want to transform the data.
   */
  solve(source: Observable<number>): Observable<number>
}
