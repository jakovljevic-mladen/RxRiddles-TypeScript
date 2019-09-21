import { defer, Observable, of } from 'rxjs';

import { Riddle17 } from '../riddles/riddle-17';

export class Riddle17Solution implements Riddle17 {

  solve(f: () => number): Observable<number> {
    return defer(() => of(f()));
  }
}
