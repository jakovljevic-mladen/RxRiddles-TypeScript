import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Riddle28 } from '../riddles/riddle-28';

export class Riddle28Solution implements Riddle28 {

  solve(source: Observable<number>, f: () => void): Observable<number> {
    return source.pipe(tap({ complete: f }));
  }
}
