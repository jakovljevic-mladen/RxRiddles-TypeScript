import { TestScheduler } from 'rxjs/testing';

import { Riddle11Solution } from '../solutions/riddle-11-solution';

describe('Riddle 11', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should wait at least 300 ms between 2 emissions', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  50ms a 200ms b 250ms c 100ms d 100ms e|';
      const expectedMarbles = '50ms a 200ms - 250ms c 100ms - 100ms -|';

      const source$ = cold<void>(sourceMarbles);

      const riddle11 = new Riddle11Solution();
      const result$ = riddle11.solve(source$);

      expectObservable(result$).toBe(expectedMarbles);
    });
  });
});
