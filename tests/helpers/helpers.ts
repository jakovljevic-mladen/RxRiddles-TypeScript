import createSpy = jasmine.createSpy;
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const createRetryableStream = (...retryObservables$: Observable<any>[]): any => {
  const next = createSpy('next');
  next.and.returnValues(...retryObservables$);

  return of(undefined).pipe(
    switchMap(() => next())
  );
};
