import { Observable } from 'rxjs';

export interface Riddle4 {

  /**
   * Implement a toggle mechanism. Initially we want to return false.
   * Every time [source] emits, we want to negate the previous value.
   *
   * Use case: Some button that can toggle two states. For instance a switch between White & Dark theme.
   */
  solve(source: Observable<void>): Observable<boolean>
}
