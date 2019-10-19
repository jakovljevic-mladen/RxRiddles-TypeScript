import { TestScheduler } from 'rxjs/testing';

import { Riddle31Solution } from '../solutions/riddle-31-solution';
import { createRetryableStream } from './helpers/helpers';

describe('Riddle 31', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should repeat', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  ---a-b-|';
      const expectedMarbles = '---a-b----a-b----a-b-|';
      const values = { a: 1, b: 5 };

      const source$ = cold(sourceMarbles, values);

      const riddle31 = new Riddle31Solution();
      const result$ = riddle31.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should repeat with different emissions', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarble1 = '  --a|';
      const sourceMarble2 = '  ---b--|';
      const sourceMarble3 = '  -(ac)----|';
      const expectedMarbles = '--a---b---(ac)----|';
      const values = { a: 1, b: 5, c: 2 };

      const source$ = createRetryableStream(
        cold(sourceMarble1, values),
        cold(sourceMarble2, values),
        cold(sourceMarble3, values)
      );

      const riddle31 = new Riddle31Solution();
      const result$ = riddle31.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should fail when a stream errors', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarble1 = '  --a|';
      const sourceMarble2 = '  -----#';
      const expectedMarbles = '--a-----#';
      const values = { a: 1 };

      const source$ = createRetryableStream(
        cold(sourceMarble1, values),
        cold(sourceMarble2)
      );

      const riddle31 = new Riddle31Solution();
      const result$ = riddle31.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
