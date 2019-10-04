import { TestScheduler } from 'rxjs/testing';

import { Riddle26Solution } from '../solutions/riddle-26-solution';

describe('Riddle 26', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should delay emissions for 300 ms', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '300ms --a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);

      const riddle26 = new Riddle26Solution();
      const result$ = riddle26.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
