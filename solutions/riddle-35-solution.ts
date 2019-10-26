import { EmptyError, Observable, throwError } from 'rxjs';
import { catchError, throwIfEmpty } from 'rxjs/operators';

import { Riddle35 } from '../riddles/riddle-35';

export class Riddle35Solution implements Riddle35 {

  solve(first: Observable<string>, second: Observable<string>): Observable<string> {
    return first.pipe(
      throwIfEmpty(),
      catchError(error => error instanceof EmptyError ? second : throwError(error))
    );
  }
}
