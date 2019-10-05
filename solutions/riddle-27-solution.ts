import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Riddle27 } from '../riddles/riddle-27';

export class Riddle27Solution implements Riddle27 {

  solve(source: Observable<number>, f: (value: number) => void): Observable<number> {
    return source.pipe(tap(f));
  }
}
