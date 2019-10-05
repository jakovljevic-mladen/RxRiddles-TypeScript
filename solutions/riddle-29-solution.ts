import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Riddle29 } from '../riddles/riddle-29';

export class Riddle29Solution implements Riddle29 {

  solve(source: Observable<number>, f: () => void): Observable<number> {
    return source.pipe(tap({ error: f }));
  }
}
