import { Observable } from 'rxjs';

export interface Riddle17 {

  /**
   * Return an Observable that emits the value from the given [f]unction when being subscribed to.
   *
   * Use case: Reactive types are lazy by default. Hence you might also want to get the value
   * upon the subscription and not execution time.
   */
  solve(f: () => number): Observable<number>;
}
