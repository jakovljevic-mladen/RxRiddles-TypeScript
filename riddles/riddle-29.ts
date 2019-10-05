import { Observable } from 'rxjs';

export interface Riddle29 {

  /**
   * Call the given [f]unction when the [source] errors.
   *
   * Use case: Add some logging.
   */
  solve(source: Observable<number>, f: () => void): Observable<number>;
}
