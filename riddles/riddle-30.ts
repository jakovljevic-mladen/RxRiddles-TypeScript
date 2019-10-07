import { Observable } from 'rxjs';

export interface Riddle30 {

  /**
   * Call the given [f]unction when the [source] is being subscribed to.
   *
   * Use case: Add some logging.
   */
  solve(source: Observable<number>, f: () => void): Observable<number>;
}
