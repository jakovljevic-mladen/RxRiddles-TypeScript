import { Observable } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

import { Riddle25 } from '../riddles/riddle-25';

export class Riddle25Solution implements Riddle25 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(defaultIfEmpty(5));
  }
}
