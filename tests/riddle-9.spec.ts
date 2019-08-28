import { TestScheduler } from 'rxjs/testing';

import { Riddle9Solution } from '../solutions/riddle-9-solution';

describe('Riddle 9', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should unsubscribe after 2s', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  1s a 999ms a 999ms a-|';
      const triggerMarbles = ' 1s - 999ms a|';
      const expectedMarbles = '1s a 999ms |';
      const values = { a: 1 };

      const source$ = cold(sourceMarbles, values);
      const trigger$ = cold(triggerMarbles, values);

      const riddle9 = new Riddle9Solution();
      const result$ = riddle9.solve(source$, trigger$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should unsubscribe after 2001ms', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  1s a 999ms a 999ms a-|';
      const triggerMarbles = ' 1s - 999ms -a|';
      const expectedMarbles = '1s a 999ms a|';
      const values = { a: 1 };

      const source$ = cold(sourceMarbles, values);
      const trigger$ = cold(triggerMarbles, values);

      const riddle9 = new Riddle9Solution();
      const result$ = riddle9.solve(source$, trigger$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
