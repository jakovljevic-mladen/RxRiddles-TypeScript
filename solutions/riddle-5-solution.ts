import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Riddle5 } from '../riddles/riddle-5';

export class Riddle5Solution implements Riddle5 {

  /*
   * As of RxJS version 6.5, resultSelector is no longer supported, thus writing
   * this:
   * ```
   * combineLatest([first, second], (value1, value2) => value1 + value2);
   * ```
   * would be deprecated. The official docs suggests usage of map operator, so
   * it is used here to solve the riddle.
   */
  solve(first: Observable<number>, second: Observable<number>): Observable<number> {
    return combineLatest([first, second]).pipe(map(combined => combined[0] + combined[1]));
  }
}
