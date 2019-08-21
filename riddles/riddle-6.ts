import { Observable } from 'rxjs';

export interface Riddle6 {

  /**
   * Execute both [first] and [second] Observable's in parallel and provide both results as an array.
   *
   * Use case: Execute two network requests in parallel and wait for each other and process the combined data.
   */
  solve(first: Observable<number>, second: Observable<number>): Observable<number[]>
}
