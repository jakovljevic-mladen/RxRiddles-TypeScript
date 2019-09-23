import { Observable } from 'rxjs';

export interface Riddle20 {

  /**
   * Merge the [first] and the [second] Observable together.
   *
   * Use case: There is something you want to execute and you have multiple trigger points in your UI.
   */
  solve(first: Observable<number>, second: Observable<number>): Observable<number>;
}
