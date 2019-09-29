import { Observable } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

import { Riddle22 } from '../riddles/riddle-22';

export class Riddle22Solution implements Riddle22 {

  solve(source: Observable<number>): Observable<number[]> {
    return source.pipe(bufferCount(2, 3));
  }
}
