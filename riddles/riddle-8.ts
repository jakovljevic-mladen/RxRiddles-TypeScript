import { Observable } from 'rxjs';

export interface Riddle8 {

  /**
   * Delay the entire [source] by 200ms. This includes subscribing, emissions and terminal events.
   *
   * Use case: Make an Observable "lazy" for some time. For instance, when wanting to postpone some UI action.
   */
  solve(source: Observable<number>): Observable<number>
}
