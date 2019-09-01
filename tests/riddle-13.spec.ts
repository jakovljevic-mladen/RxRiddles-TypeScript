import { TestScheduler } from 'rxjs/testing';

import { Riddle13Solution } from '../solutions/riddle-13-solution';

describe('Riddle 13', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should emmit values in the stream only if the value has changed', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  --a-b-a-a-a-d-d-c-d-d-e-e-e-e-d-|';
      const expectedMarbles = '--a-b-a-----d---c-d---e-------d-|';
      const values = { a: 1, b: 2, c: 3, d: 4, e: 5 };

      const source$ = cold(sourceMarbles, values);

      const riddle13 = new Riddle13Solution();
      const result$ = riddle13.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
