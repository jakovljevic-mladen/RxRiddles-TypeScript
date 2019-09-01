import { TestScheduler } from 'rxjs/testing';

import { Riddle12Solution } from '../solutions/riddle-12-solution';

describe('Riddle 12', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should recover from error by completing with value of 5', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  --a--b--#';
      const expectedMarbles = '--a--b--(c|)';
      const values = { a: 1, b: 2, c: 5 };

      const source$ = cold(sourceMarbles, values);

      const riddle12 = new Riddle12Solution();
      const result$ = riddle12.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
