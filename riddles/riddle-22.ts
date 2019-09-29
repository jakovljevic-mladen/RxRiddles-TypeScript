import { Observable } from 'rxjs';

export interface Riddle22 {

  /**
   * Group emissions of the [source] always in a list of 2 elements and skip every third element.
   *
   * Use case: Group related data while skipping over some of it.
   */
  solve(source: Observable<number>): Observable<number[]>;
}
