import { Observable, SchedulerLike } from 'rxjs';
import { observeOn } from 'rxjs/operators';

import { Riddle33 } from '../riddles/riddle-33';

export class Riddle33Solution implements Riddle33 {

  solve(source: Observable<number>, scheduler: SchedulerLike): Observable<number> {
    return source.pipe(observeOn(scheduler));
  }
}
