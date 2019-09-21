import { TestScheduler } from 'rxjs/testing';

import { Riddle18Solution } from '../solutions/riddle-18-solution';

describe('Riddle 18', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should mirror the first Observable', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const source1Marbles = ' -a----b--c--|';
      const source2Marbles = ' ---b--c--|';
      const expectedMarbles = '-a----b--c--|';
      const values = { a: 4, b: 6, c: 2, d: 5 };

      const source1$ = cold(source1Marbles, values);
      const source2$ = cold(source2Marbles, values);

      const riddle18 = new Riddle18Solution();
      const result$ = riddle18.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should mirror the second Observable', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const source1Marbles = ' ----a----b--c--|';
      const source2Marbles = ' --b--c--|';
      const expectedMarbles = '--b--c--|';
      const values = { a: 4, b: 6, c: 2, d: 5 };

      const source1$ = cold(source1Marbles, values);
      const source2$ = cold(source2Marbles, values);

      const riddle18 = new Riddle18Solution();
      const result$ = riddle18.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
