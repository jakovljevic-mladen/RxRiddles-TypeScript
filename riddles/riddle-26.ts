import { Observable } from 'rxjs';

export interface Riddle26 {

  /**
   * Delay each emission of the [source] by 300 milliseconds.
   *
   * Use case: Delay emission of events to simulate some indication.
   */
  solve(source: Observable<number>): Observable<number>;
}
