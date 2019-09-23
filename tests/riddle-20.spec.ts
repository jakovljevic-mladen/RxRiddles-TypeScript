import { TestScheduler } from 'rxjs/testing';

import { Riddle20Solution } from '../solutions/riddle-20-solution';

describe('Riddle 20', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should merge emission from two Observables', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source1Marbles = ' -a----b---c--|';
      const source2Marbles = ' ---b--d--|';
      const expectedMarbles = '-a-b--(bd)c--|';
      const values = { a: 4, b: 6, c: 2, d: 5 };

      const source1$ = cold(source1Marbles, values);
      const source2$ = cold(source2Marbles, values);

      const riddle20 = new Riddle20Solution();
      const result$ = riddle20.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
