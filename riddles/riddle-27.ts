import { Observable } from 'rxjs';

export interface Riddle27 {

  /**
   * Call the given [f]unction each time the [source] emits a value.
   *
   * Use case: Add some logging.
   */
  solve(source: Observable<number>, f: (value: number) => void): Observable<number>;
}
