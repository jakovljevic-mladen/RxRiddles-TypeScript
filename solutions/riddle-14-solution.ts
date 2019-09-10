import { Observable, of, throwError } from 'rxjs';
import { mergeMap, retryWhen } from 'rxjs/operators';

import { NotFoundError } from '../models/error';
import { Riddle14 } from '../riddles/riddle-14';

export class Riddle14Solution implements Riddle14 {

  solve(source: Observable<number>): Observable<number> {
    return source.pipe(
      retryWhen(errors => errors.pipe(
        mergeMap((err, i) => i < 2 && !(err instanceof NotFoundError) ? of(undefined) : throwError(err))
        )
      )
    );
  }
}
