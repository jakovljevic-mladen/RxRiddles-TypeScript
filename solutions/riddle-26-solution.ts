import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Riddle26 } from '../riddles/riddle-26';

export class Riddle26Solution implements Riddle26 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(delay(300));
  }
}
