import { TestScheduler } from 'rxjs/testing';

import { Riddle25Solution } from '../solutions/riddle-25-solution';

describe('Riddle 25', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should default when the stream is empty', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  ---|';
      const expectedMarbles = '---(x|)';
      const expectedValues = { x: 5 };

      const source$ = cold<number>(sourceMarbles);

      const riddle25 = new Riddle25Solution();
      const result$ = riddle25.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should not default if the stream is not empty', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a-b-c-|';
      const expectedMarbles = '--a-b-c-|';
      const values = { a: -1, b: 0, c: 3 };

      const source$ = cold(sourceMarbles, values);

      const riddle25 = new Riddle25Solution();
      const result$ = riddle25.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
