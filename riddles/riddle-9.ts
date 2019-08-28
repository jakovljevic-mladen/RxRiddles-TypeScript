import { Observable } from 'rxjs';

export interface Riddle9 {

  /**
   * As long as the [trigger] Observable does not emit an item, keep the [main] Observable alive.
   *
   * Use case: Cancel an Observable when something has happened. For instance, stop polling when the user has been logged out.
   */
  solve(main: Observable<number>, trigger: Observable<number>): Observable<number>;
}
