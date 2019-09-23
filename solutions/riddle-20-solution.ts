import { merge, Observable } from 'rxjs';

import { Riddle20 } from '../riddles/riddle-20';

export class Riddle20Solution implements Riddle20 {

  solve(first: Observable<number>, second: Observable<number>): Observable<number> {
    return merge(first, second);
  }
}
