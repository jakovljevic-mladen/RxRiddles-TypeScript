import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { Riddle32 } from '../riddles/riddle-32';

export class Riddle32Solution implements Riddle32 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(timeout(3 * 1000));
  }
}
