import { TestScheduler } from 'rxjs/testing';

import { Riddle8Solution } from '../solutions/riddle-8-solution';

describe('Riddle 8', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should subscribe after 200ms', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable } = helpers;

      const sourceMarbles = '  -a-|';
      const expectedMarbles = '200ms -a-|';
      const values = { a: 1 };

      const source$ = cold(sourceMarbles, values);

      const riddle8 = new Riddle8Solution();
      const result$ = riddle8.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
