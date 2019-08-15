import { Observable } from 'rxjs';

export interface Riddle3 {

  /**
   * Don't emit odd numbers from the [source] Observable.
   *
   * Use case: You want to filter certain items out.
   */
  solve(source: Observable<number>): Observable<number>
}
