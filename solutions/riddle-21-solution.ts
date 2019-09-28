import { Observable } from 'rxjs';

import { Riddle21 } from '../riddles/riddle-21';

export class Riddle21Solution implements Riddle21 {

  solve(source: Observable<number>): Promise<number> {
    return source.toPromise();
  }
}
