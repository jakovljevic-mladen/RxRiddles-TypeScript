import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { Riddle4Solution } from '../solutions/riddle-4-solution';

describe('Riddle 4', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should emmit [false] value (verified with subscription)', () => {
    const riddle4 = new Riddle4Solution();

    riddle4.solve(of()).subscribe(value => {
      expect(value).toBe(false);
    });
  });

  it('should emmit [false] value (verified with marbles)', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  --a-|';
      const expectedMarbles = '--a-|';
      const expectedValues = { a: false };

      const source$ = cold<void>(sourceMarbles);

      const riddle4 = new Riddle4Solution();
      const result$ = riddle4.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should emmit [false, true] values', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  --a-b-|';
      const expectedMarbles = '--a-b-|';
      const expectedValues = { a: false, b: true };

      const source$ = cold<void>(sourceMarbles);

      const riddle4 = new Riddle4Solution();
      const result$ = riddle4.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should emmit [false, true, false] values', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const expectedValues = { a: false, b: true, c: false };

      const source$ = cold<void>(sourceMarbles);

      const riddle4 = new Riddle4Solution();
      const result$ = riddle4.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should emmit [false, true, false, true] values', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '  --a-b-c-d-|';
      const expectedMarbles = '--a-b-c-d-|';
      const expectedValues = { a: false, b: true, c: false, d: true };

      const source$ = cold<void>(sourceMarbles);

      const riddle4 = new Riddle4Solution();
      const result$ = riddle4.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });
});
