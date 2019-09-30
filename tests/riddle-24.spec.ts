import { TestScheduler } from 'rxjs/testing';

import { Riddle24Solution } from '../solutions/riddle-24-solution';

describe('Riddle 24', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should count number of emissions', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--b-(cd)-|';
      const expectedMarbles = '------------(x|)';
      const sourceValues = { a: 4, b: 6, c: 2, d: 5 };
      const expectedValues = { x: 4 };

      const source$ = cold(sourceMarbles, sourceValues);

      const riddle24 = new Riddle24Solution();
      const result$ = riddle24.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should not count number of emissions if the stream errors', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--b-(cd)-#';
      const expectedMarbles = '------------#';
      const sourceValues = { a: 4, b: 6, c: 2, d: 5 };

      const source$ = cold(sourceMarbles, sourceValues);

      const riddle24 = new Riddle24Solution();
      const result$ = riddle24.solve(source$);

      expectObservable(result$).toBe(expectedMarbles);
    });
  });

  it('should not count number of emissions if the stream never completes', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--b-(cd)-';
      const expectedMarbles = '';
      const sourceValues = { a: 4, b: 6, c: 2, d: 5 };

      const source$ = cold(sourceMarbles, sourceValues);

      const riddle24 = new Riddle24Solution();
      const result$ = riddle24.solve(source$);

      expectObservable(result$).toBe(expectedMarbles);
    });
  });
});
