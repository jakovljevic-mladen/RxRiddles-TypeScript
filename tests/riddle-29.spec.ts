import { TestScheduler } from 'rxjs/testing';

import { Riddle29Solution } from '../solutions/riddle-29-solution';

describe('Riddle 29', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should error (with flush)', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const sourceMarbles = '  --a-b-c-#';
      const expectedMarbles = '--a-b-c-#';
      const values = { a: -1, b: 0, c: 3 };
      let erroredSuccessfully = false;

      const source$ = cold(sourceMarbles, values);
      const func = () => erroredSuccessfully = true;

      const riddle29 = new Riddle29Solution();
      const result$ = riddle29.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
      flush(); // we need to 'run' virtual time to complete result$ observable while inside run() callback
      expect(erroredSuccessfully).toBe(true);
    });
  });

  it('should error (without using flush)', () => {
    let erroredSuccessfully = false;

    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-#';
      const expectedMarbles = '--a-b-c-#';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);
      const func = () => erroredSuccessfully = true;

      const riddle29 = new Riddle29Solution();
      const result$ = riddle29.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
    });

    expect(erroredSuccessfully).toBe(true);
  });

  it('should complete successfully (with flush)', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };
      let erroredSuccessfully = false;

      const source$ = cold(sourceMarbles, values);
      const func = () => erroredSuccessfully = true;

      const riddle29 = new Riddle29Solution();
      const result$ = riddle29.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
      flush(); // we need to 'run' virtual time to complete result$ observable while inside run() callback
      expect(erroredSuccessfully).toBe(false);
    });
  });

  it('should complete successfully (without using flush)', () => {
    let erroredSuccessfully = false;

    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);
      const func = () => erroredSuccessfully = true;

      const riddle29 = new Riddle29Solution();
      const result$ = riddle29.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
    });

    expect(erroredSuccessfully).toBe(false);
  });
});
