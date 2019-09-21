import { Observable } from 'rxjs';

export interface Riddle13 {

  /**
   * When the [source] emits the same value as it did last time, don't allow it to travel downstream.
   *
   * Use case: You only want to observe changes of a value but don't care if the same value has been emitted consecutively.
   */
  solve(source: Observable<number>): Observable<number>;
}