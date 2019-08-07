import { Observable, of } from 'rxjs';

import { Riddle1 } from '../riddles/riddle-1';

export class Riddle1Solution implements Riddle1 {

  solve(value: number): Observable<number> {
    return of(value);
  }
}
