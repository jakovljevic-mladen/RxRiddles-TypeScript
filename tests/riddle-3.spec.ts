import { TestScheduler } from 'rxjs/testing';

import { Riddle3Solution } from '../solutions/riddle-3-solution';

describe('Riddle 3', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter out odd values from [0, 10) array', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable } = helpers;

      const sourceMarbles = '  --a-b-c-d-e-f-g-h-i-j-|';
      const expectedMarbles = '--a---c---e---g---i---|';
      const values = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };

      const source$ = cold(sourceMarbles, values);

      const riddle3 = new Riddle3Solution();
      const result$ = riddle3.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
