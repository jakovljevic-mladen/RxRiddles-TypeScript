import { TestScheduler } from 'rxjs/testing';

import { Riddle27Solution } from '../solutions/riddle-27-solution';

describe('Riddle 27', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should use side effect (with flush)', () => {
    scheduler.run(({ cold, expectObservable, flush }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };
      const testValues: number[] = [];

      const source$ = cold(sourceMarbles, values);
      const func = (value: number) => testValues.push(value);

      const riddle27 = new Riddle27Solution();
      const result$ = riddle27.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
      flush(); // we need to 'run' virtual time to complete result$ observable while inside run() callback
      expect(testValues).toEqual([-1, 0, 3]);
    });
  });

  it('should use side effect (without using flush)', () => {
    const testValues: number[] = [];

    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);
      const func = (value: number) => testValues.push(value);

      const riddle27 = new Riddle27Solution();
      const result$ = riddle27.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, values);
    });

    expect(testValues).toEqual([-1, 0, 3]);
  });
});
