import { Observable, of } from 'rxjs';
import { onErrorResumeNext } from 'rxjs/operators';

import { Riddle12 } from '../riddles/riddle-12';

export class Riddle12Solution implements Riddle12 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(onErrorResumeNext(of(5)));
  }
}
