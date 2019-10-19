import { TestScheduler } from 'rxjs/testing';

import { createRetryableStream } from './helpers/helpers';
import { NotFoundError } from '../models/error';
import { Riddle14Solution } from '../solutions/riddle-14-solution';

describe('Riddle 14', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should complete successfully when no errors were thrown', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-|';
      const expectedMarbles = '--a-|';
      const values = { a: 1 };

      const source$ = cold(sourceMarbles, values);

      const riddle14 = new Riddle14Solution();
      const result$ = riddle14.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should retry once', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarble1 = '  --#';
      const sourceMarble2 = '  ---a--|';
      const expectedMarbles = '5ms a--|';
      const values = { a: 1 };

      const source$ = createRetryableStream(
        cold(sourceMarble1),
        cold(sourceMarble2, values)
      );

      const riddle14 = new Riddle14Solution();
      const result$ = riddle14.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should retry two times', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarble1 = '  --#';
      const sourceMarble2 = '  -----#';
      const sourceMarble3 = '  ---a--|';
      const expectedMarbles = '10ms a--|';
      const values = { a: 1 };

      const source$ = createRetryableStream(
        cold(sourceMarble1),
        cold(sourceMarble2),
        cold(sourceMarble3, values)
      );

      const riddle14 = new Riddle14Solution();
      const result$ = riddle14.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should error after 2 unsuccessful retries', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarble1 = '  --#';
      const sourceMarble2 = '  -----#';
      const sourceMarble3 = '  ----#';
      const expectedMarbles = '11ms #';

      const source$ = createRetryableStream(
        cold(sourceMarble1),
        cold(sourceMarble2),
        cold(sourceMarble3)
      );

      const riddle14 = new Riddle14Solution();
      const result$ = riddle14.solve(source$);

      expectObservable(result$).toBe(expectedMarbles);
    });
  });

  it('should error if NotFoundError has been emitted', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarble1 = '  --#';
      const sourceMarble2 = '  ----a--|';
      const expectedMarbles = '--#';
      const values = { a: 1 };

      const source$ = createRetryableStream(
        cold(sourceMarble1, undefined, new NotFoundError()),
        cold(sourceMarble2, values)
      );

      const riddle14 = new Riddle14Solution();
      const result$ = riddle14.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values, new NotFoundError());
    });
  });
});
