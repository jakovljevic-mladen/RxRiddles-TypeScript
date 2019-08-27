import { TestScheduler } from 'rxjs/testing';

import { Riddle2Solution } from '../solutions/riddle-2-solution';

describe('Riddle 2', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should increase values -1, 0 and 5 by 1', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable } = helpers;

      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--x-y-z-|';
      const values = { a: -1, b: 0, c: 5, x: 0, y: 1, z: 6 };

      const source$ = cold(sourceMarbles, values);

      const riddle2 = new Riddle2Solution();
      const result$ = riddle2.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
