import { TestScheduler } from 'rxjs/testing';

import { Riddle28Solution } from '../solutions/riddle-28-solution';

describe('Riddle 28', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should complete successfully (with flush)', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };
      let completedSuccessfully = false;

      const source$ = cold(sourceMarbles, values);
      const func = () => completedSuccessfully = true;

      const riddle28 = new Riddle28Solution();
      const result$ = riddle28.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
      flush(); // we need to 'run' virtual time to complete result$ observable while inside run() callback
      expect(completedSuccessfully).toBe(true);
    });
  });

  it('should complete successfully (without using flush)', () => {
    let completedSuccessfully = false;

    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);
      const func = () => completedSuccessfully = true;

      const riddle28 = new Riddle28Solution();
      const result$ = riddle28.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
    });

    expect(completedSuccessfully).toBe(true);
  });

  it('should not use complete side effect when errored (with flush)', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const sourceMarbles = '  --a-b-c-#';
      const expectedMarbles = '--a-b-c-#';
      const values = { a: -1, b: 0, c: 3 };
      let completedSuccessfully = false;

      const source$ = cold(sourceMarbles, values);
      const func = () => completedSuccessfully = true;

      const riddle28 = new Riddle28Solution();
      const result$ = riddle28.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
      flush(); // we need to 'run' virtual time to complete result$ observable while inside run() callback
      expect(completedSuccessfully).toBe(false);
    });
  });

  it('should not use complete side effect when errored (without using flush)', () => {
    let completedSuccessfully = false;

    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-#';
      const expectedMarbles = '--a-b-c-#';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);
      const func = () => completedSuccessfully = true;

      const riddle28 = new Riddle28Solution();
      const result$ = riddle28.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
    });

    expect(completedSuccessfully).toBe(false);
  });
});
