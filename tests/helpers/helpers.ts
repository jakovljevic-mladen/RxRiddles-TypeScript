import createSpy = jasmine.createSpy;
import { defer, Observable } from 'rxjs';

export const createRetryableStream = (...retryObservables$: Observable<any>[]): any => {
  const next = createSpy('next');
  next.and.returnValues(...retryObservables$);

  return defer(() => next());
};
