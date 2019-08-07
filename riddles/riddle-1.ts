import { Observable } from 'rxjs';

export interface Riddle1 {

  /**
   * Transform the given [value] into an Observable that emits the value and then completes.
   *
   * Use case: You want to transform some value to the reactive world.
   */
  solve(value: number): Observable<number>;
}
