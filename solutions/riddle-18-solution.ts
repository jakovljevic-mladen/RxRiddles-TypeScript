import { Observable, race } from 'rxjs';

import { Riddle18 } from '../riddles/riddle-18';

export class Riddle18Solution implements Riddle18 {

  solve(first: Observable<number>, second: Observable<number>): Observable<number> {
    return race(first, second);
  }
}
