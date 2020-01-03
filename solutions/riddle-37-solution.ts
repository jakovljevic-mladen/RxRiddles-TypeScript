import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Riddle37 } from '../riddles/riddle-37';
import { NotFoundError } from '../models/error';

export class Riddle37Solution implements Riddle37 {

  solve(source: Observable<boolean>): Observable<boolean> {
    return source.pipe(catchError(error => error instanceof NotFoundError ? of(false) : throwError(error)));
  }
}
