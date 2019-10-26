import { Observable } from 'rxjs';

export interface Riddle35 {

  /**
   * Return an Observable that emits the value from the [first] source if present,
   * otherwise emit from the [second] source.
   *
   * Use case: You have a local cache and only want to hit the network if the cache misses.
   */
  solve(first: Observable<string>, second: Observable<string>): Observable<string>;
}
