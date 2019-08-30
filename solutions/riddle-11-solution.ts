import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import { Riddle11 } from '../riddles/riddle-11';

export class Riddle11Solution implements Riddle11 {

  solve(source: Observable<void>): Observable<void> {
    return source.pipe(throttleTime(300));
  }
}
