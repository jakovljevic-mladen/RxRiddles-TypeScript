import { Observable } from 'rxjs';

export interface Riddle14 {

  /**
   * Retry the given [source] up to three times unless a [NotFoundError] has been emitted.
   *
   * Use case: Retry an operation for a number of times or until a valid error occurred.
   */
  solve(source: Observable<number>): Observable<number>;
}
