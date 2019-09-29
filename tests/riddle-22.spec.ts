import { TestScheduler } from 'rxjs/testing';

import { Riddle22Solution } from '../solutions/riddle-22-solution';

describe('Riddle 22', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should group related data while skipping over some of it', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--b--c----d-e--f-g---h-i-j--|';
      const expectedMarbles = '-----k---------l--------m------(n|)';
      const sourceValues = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };
      const expectedValues = { k: [0, 1], l: [3, 4], m: [6, 7], n: [9] };

      const source$ = cold(sourceMarbles, sourceValues);

      const riddle22 = new Riddle22Solution();
      const result$ = riddle22.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });
});
