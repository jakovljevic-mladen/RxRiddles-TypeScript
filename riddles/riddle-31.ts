import { Observable } from 'rxjs';

export interface Riddle31 {

  /**
   * Duplicate the entire [source] three times. After emitting all events three times it should complete.
   *
   * Use case: You want to re-run a certain Observable a number of times.
   */
  solve(source: Observable<number>): Observable<number>;
}
