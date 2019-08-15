import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Riddle4 } from '../riddles/riddle-4';

export class Riddle4Solution implements Riddle4 {

  solve(source: Observable<void>): Observable<boolean> {
    return source.pipe(scan((acc: boolean) => !acc, true));
  }
}
