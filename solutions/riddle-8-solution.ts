import { Observable, of } from 'rxjs';
import { delay, delayWhen } from 'rxjs/operators';

import { Riddle8 } from '../riddles/riddle-8';

export class Riddle8Solution implements Riddle8 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(delayWhen(() => of(), of().pipe(delay(200))));
  }
}
