import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Riddle9 } from '../riddles/riddle-9';

export class Riddle9Solution implements Riddle9 {

  solve(main: Observable<number>, trigger: Observable<number>): Observable<number> {
    return main.pipe(takeUntil(trigger));
  }
}
