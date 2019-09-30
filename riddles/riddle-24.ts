import { Observable } from 'rxjs';

export interface Riddle24 {

  /**
   * Upon completion of the [source] return an Observable
   * containing the number of emissions from the [source].
   *
   * Use case: Know how many emissions have been sent out.
   */
  solve(source: Observable<number>): Observable<number>;
}
