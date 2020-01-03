import { TestScheduler } from 'rxjs/testing';

import { Riddle37Solution } from '../solutions/riddle-37-solution';
import { NotFoundError } from '../models/error';

describe('Riddle 37', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return false when errored with NotFoundError', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  -a--#';
      const expectedMarbles = '-a--(f|)';
      const values = { a: true, f: false };

      const source1$ = cold(sourceMarbles, values, new NotFoundError());

      const riddle37 = new Riddle37Solution();
      const result$ = riddle37.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should complete successfully', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  -a--|';
      const expectedMarbles = '-a--|';
      const values = { a: true };

      const source1$ = cold(sourceMarbles, values);

      const riddle37 = new Riddle37Solution();
      const result$ = riddle37.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should not emit value but should error when not errored with NotFoundError', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  -a--#';
      const expectedMarbles = '-a--#';
      const values = { a: true };

      const source1$ = cold(sourceMarbles, values);

      const riddle37 = new Riddle37Solution();
      const result$ = riddle37.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
