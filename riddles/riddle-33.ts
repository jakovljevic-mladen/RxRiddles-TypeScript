import { Observable, SchedulerLike } from 'rxjs';

export interface Riddle33 {

  /**
   * Shift all downstream work of [source] to the given [scheduler].
   *
   * Use case: You want to shift work to a particular Scheduler.
   */
  solve(source: Observable<number>, scheduler: SchedulerLike): Observable<number>;
}
