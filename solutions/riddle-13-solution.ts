import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { Riddle13 } from '../riddles/riddle-13';

export class Riddle13Solution implements Riddle13 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(distinctUntilChanged());
  }
}
