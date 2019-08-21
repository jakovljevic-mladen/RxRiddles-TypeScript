import { Observable, zip } from 'rxjs';

import { Riddle6 } from '../riddles/riddle-6';

export class Riddle6Solution implements Riddle6 {

  solve(first: Observable<number>, second: Observable<number>): Observable<number[]> {
    return zip(first, second);
  }
}
