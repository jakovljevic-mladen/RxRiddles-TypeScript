import { Observable } from 'rxjs';
import { repeat } from 'rxjs/operators';

import { Riddle31 } from '../riddles/riddle-31';

export class Riddle31Solution implements Riddle31 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(repeat(3));
  }
}
