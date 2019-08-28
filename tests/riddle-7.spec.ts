import { TestScheduler } from 'rxjs/testing';

import { Riddle7Solution } from '../solutions/riddle-7-solution';

describe('Riddle 7', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter out distinct values', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  -a-b-c-a-b-d-d-e-d-|';
      const expectedMarbles = '-a-b-c-----d---e---|';
      const values = { a: 1, b: 2, c: 3, d: 4, e: 5 };

      const source$ = cold(sourceMarbles, values);

      const riddle7 = new Riddle7Solution();
      const result$ = riddle7.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
