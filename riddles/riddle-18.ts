import { Observable } from 'rxjs';

export interface Riddle18 {

  /**
   * Return an Observable that mirrors either the [first] or [second] Observable depending
   * on whoever emits or terminates first.
   *
   * Use case: You have multiple sources and want to get the data from either one and then
   * be consistent and not switch between multiple sources.
   */
  solve(first: Observable<number>, second: Observable<number>): Observable<number>;
}
