import { Observable } from 'rxjs';

import { Pair } from '../models/pair';

export interface Riddle10 {

  /**
   * Use the [first] Observable and flatten it with the results of the [f]unction that returns an Observable.
   *
   * Use case: Get some user data and perform a network request with the user data and have both data accessible afterwards.
   */
  solve(first: Observable<number>, f: (value: number) => Observable<string>): Observable<Pair<number, string>>;
}
