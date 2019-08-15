import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Riddle3 } from '../riddles/riddle-3';

export class Riddle3Solution implements Riddle3 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(filter(value => value % 2 === 0));
  }
}
