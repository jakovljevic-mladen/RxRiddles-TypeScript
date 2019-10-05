import { Observable } from 'rxjs';

export interface Riddle28 {

  /**
   * Call the given [f]unction when the [source] completes.
   *
   * Use case: Add some logging.
   */
  solve(source: Observable<number>, f: () => void): Observable<number>;
}
