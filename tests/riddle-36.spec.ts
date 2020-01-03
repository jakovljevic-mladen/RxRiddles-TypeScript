import { TestScheduler } from 'rxjs/testing';

import { Riddle36Solution } from '../solutions/riddle-36-solution';

describe('Riddle 36', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should emit after 300 ms', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '        --a--';
      const expectedMarbles = '300ms --a';
      const values = { a: 'H' };

      const source1$ = cold(sourceMarbles, values);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should emit last value within 300 ms frame', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '        --a--b---';
      const expectedMarbles = '300ms -----b';
      const values = { a: 'H', b: 'Hel' };

      const source1$ = cold(sourceMarbles, values);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should emit last value within 300 ms frame 2', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '        --a--b-- 250ms c';
      const expectedMarbles = '558ms c'; // 300 ms + --a--b-- (8ms) + 250ms
      const values = { a: 'H', b: 'Hel', c: 'Hello' };

      const source1$ = cold(sourceMarbles, values);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should emit last value with two 300 ms frames', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '        --a--b-- 300ms c';
      const expectedMarbles = '300ms -----b-- 300ms c';
      const values = { a: 'H', b: 'Hel', c: 'Hello' };

      const source1$ = cold(sourceMarbles, values);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should emit last value with two 300 ms frames 2', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '        --a--b-- 300ms c-------d';
      const expectedMarbles = '300ms -----b-- 300ms --------d';
      const values = { a: 'H', b: 'Hel', c: 'Hello', d: 'Hello World' };

      const source1$ = cold(sourceMarbles, values);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should not wait 300 ms if the source completed before', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--|';
      const expectedMarbles = '-----(a|)';
      const values = { a: 'H' };

      const source1$ = cold(sourceMarbles, values);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should not wait 300 ms if the source errored before', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--#';
      const expectedMarbles = '-----#';

      const source1$ = cold(sourceMarbles);

      const riddle36 = new Riddle36Solution();
      const result$ = riddle36.solve(source1$);

      expectObservable(result$).toBe(expectedMarbles);
    });
  });
});
