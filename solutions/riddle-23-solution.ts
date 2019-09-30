import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Riddle23 } from '../riddles/riddle-23';
import { User } from '../models/user';

export class Riddle23Solution implements Riddle23 {

  solve(source: Observable<User>): Observable<string> {
    return source.pipe(pluck('email'));
  }
}
