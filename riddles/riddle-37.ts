import { Observable } from 'rxjs';

export interface Riddle37 {

  /**
   * Return an Observable that emits 'false' when the [source] emits NotFoundError.
   *
   * Use case: You want to recover from an expected error and map them to a particular result.
   */
  solve(source: Observable<boolean>): Observable<boolean>;
}
