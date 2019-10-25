import { Observable, SchedulerLike } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

import { Riddle34 } from '../riddles/riddle-34';

export class Riddle34Solution implements Riddle34 {

  solve(source: Observable<number>, scheduler: SchedulerLike): Observable<number> {
    return source.pipe(subscribeOn(scheduler));
  }
}
