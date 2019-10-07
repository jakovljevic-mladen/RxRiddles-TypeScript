import { TestScheduler } from 'rxjs/testing';

import { Riddle30Solution } from '../solutions/riddle-30-solution';

fdescribe('Riddle 30', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should execute func on subscribe (with flush)', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };
      let subscribed = false;

      const source$ = cold(sourceMarbles, values);
      const func = () => subscribed = true;

      const riddle30 = new Riddle30Solution();
      const result$ = riddle30.solve(source$, func);

      expect(subscribed).toBe(false);
      expectObservable(result$).toBe(expectedMarbles, values);
      flush(); // we need to 'run' virtual time to complete result$ observable while inside run() callback
      expect(subscribed).toBe(true);
    });
  });

  it('should execute func on subscribe (without using flush)', () => {
    let subscribed = false;

    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);
      const func = () => subscribed = true;

      const riddle30 = new Riddle30Solution();
      const result$ = riddle30.solve(source$, func);

      expect(subscribed).toBe(false);
      expectObservable(result$).toBe(expectedMarbles, values);
    });

    expect(subscribed).toBe(true);
  });
});
