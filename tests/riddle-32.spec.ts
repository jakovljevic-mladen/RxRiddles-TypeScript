import { TestScheduler } from 'rxjs/testing';
import { TimeoutError } from 'rxjs/internal/util/TimeoutError';

import { Riddle32Solution } from '../solutions/riddle-32-solution';

describe('Riddle 32', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should successfully complete', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  ---a-|';
      const expectedMarbles = '---a-|';
      const values = { a: 4 };

      const source$ = cold(sourceMarbles, values);

      const riddle32 = new Riddle32Solution();
      const result$ = riddle32.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should successfully error', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  ---a-#';
      const expectedMarbles = '---a-#';
      const values = { a: 4 };

      const source$ = cold(sourceMarbles, values);

      const riddle32 = new Riddle32Solution();
      const result$ = riddle32.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values, 'error');
    });
  });

  it('should successfully emit after 2 seconds', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  2s -a-|';
      const expectedMarbles = '2s -a-|';
      const values = { a: 4 };

      const source$ = cold(sourceMarbles, values);

      const riddle32 = new Riddle32Solution();
      const result$ = riddle32.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values, 'error');
    });
  });

  it('should throw TimeoutError if there were no emissions within 3 seconds', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  3s -a-|';
      const expectedMarbles = '3s #';
      const values = { a: 4 };

      const source$ = cold(sourceMarbles, values);

      const riddle32 = new Riddle32Solution();
      const result$ = riddle32.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values, new TimeoutError());
    });
  });
});
