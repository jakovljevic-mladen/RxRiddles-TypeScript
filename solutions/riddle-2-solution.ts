import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Riddle2 } from '../riddles/riddle-2';

export class Riddle2Solution implements Riddle2 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(map(value => value + 1));
  }
}
