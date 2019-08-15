import { Observable } from 'rxjs';

import { Riddle2 } from '../riddles/riddle-2';
import { map } from 'rxjs/operators';

export class Riddle2Solution implements Riddle2 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(map(value => value + 1));
  }
}
