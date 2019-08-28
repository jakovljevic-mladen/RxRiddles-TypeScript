import { Observable } from 'rxjs';

export interface Riddle7 {

  /**
   * When the [source] emits the same value multiple times, only allow the first value to travel downstream.
   *
   * Use case: You never want to show the same value twice.
   */
  solve(source: Observable<number>): Observable<number>;
}
