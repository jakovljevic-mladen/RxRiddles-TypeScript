import { Observable, SchedulerLike } from 'rxjs';

export interface Riddle34 {

  /**
   * Shift all downstream and upstream work of [source] to the given [scheduler].
   *
   * Use case: You want to shift work to a particular Scheduler.
   */
  solve(source: Observable<number>, scheduler: SchedulerLike): Observable<number>;
}
