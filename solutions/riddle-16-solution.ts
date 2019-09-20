import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Riddle16 } from '../riddles/riddle-16';

export class Riddle16Solution implements Riddle16 {

  solve(first: Observable<string>, f: (value: string) => Observable<number>): Observable<number> {
    return first.pipe(switchMap(f));
  }
}
