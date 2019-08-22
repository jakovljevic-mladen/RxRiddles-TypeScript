import { Observable } from 'rxjs';
import { distinct } from 'rxjs/operators';

import { Riddle7 } from '../riddles/riddle-7';

export class Riddle7Solution implements Riddle7 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(distinct());
  }
}
