import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Riddle36 } from '../riddles/riddle-36';

export class Riddle36Solution implements Riddle36 {

  solve(source: Observable<string>): Observable<string> {
    return source.pipe(debounceTime(300));
  }
}
