import { TestScheduler } from 'rxjs/testing';

import { Riddle6Solution } from '../solutions/riddle-6-solution';

describe('Riddle 6', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should zip multiple values', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const source1Marbles = ' -a----d--e--f|';
      const source2Marbles = ' --b--c|';
      const expectedMarbles = '--y---(z|)';
      const sourceValues = { a: 4, b: 6, c: 2, d: 5 };
      const expectedValues = { y: [4, 6], z: [5, 2] };

      const source1$ = cold(source1Marbles, sourceValues);
      const source2$ = cold(source2Marbles, sourceValues);

      const riddle6 = new Riddle6Solution();
      const result$ = riddle6.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should zip long awaited value', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const source1Marbles = ' 5000ms a|';
      const source2Marbles = ' --b-|';
      const expectedMarbles = '5000ms (c|)';
      const sourceValues = { a: 10, b: 5 };
      const expectedValues = { c: [10, 5] };

      const source1$ = cold(source1Marbles, sourceValues);
      const source2$ = cold(source2Marbles, sourceValues);

      const riddle6 = new Riddle6Solution();
      const result$ = riddle6.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });
});
