import { Observable } from 'rxjs';

export interface Riddle32 {

  /**
   * Signal a [TimeoutError] when the given [source] does not terminate within 3 seconds.
   *
   * Use case: You want to terminate the given reactive type and stop the operation.
   */
  solve(source: Observable<number>): Observable<number>;
}
