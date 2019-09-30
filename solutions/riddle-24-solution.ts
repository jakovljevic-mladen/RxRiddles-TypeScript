import { Observable } from 'rxjs';
import { count } from 'rxjs/operators';

import { Riddle24 } from '../riddles/riddle-24';

export class Riddle24Solution implements Riddle24 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(count());
  }
}
