import { TestScheduler } from 'rxjs/testing';

import { Riddle35Solution } from '../solutions/riddle-35-solution';

describe('Riddle 35', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should not switch when not empty', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles1 = ' --a-|';
      const sourceMarbles2 = ' -x---|';
      const expectedMarbles = '--a-|';
      const values = { a: 'First', x: 'Second' };

      const source1$ = cold(sourceMarbles1, values);
      const source2$ = cold(sourceMarbles2, values);

      const riddle35 = new Riddle35Solution();
      const result$ = riddle35.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should switch when empty', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles1 = ' --|';
      const sourceMarbles2 = ' -x---|';
      const expectedMarbles = '---x---|';
      const values = { a: 'First', x: 'Second' };

      const source1$ = cold(sourceMarbles1, values);
      const source2$ = cold(sourceMarbles2, values);

      const riddle35 = new Riddle35Solution();
      const result$ = riddle35.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should not switch when empty and errored', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles1 = ' --#';
      const sourceMarbles2 = ' -x---|';
      const expectedMarbles = '--#';
      const values = { a: 'First', x: 'Second' };

      const source1$ = cold(sourceMarbles1, values);
      const source2$ = cold(sourceMarbles2, values);

      const riddle35 = new Riddle35Solution();
      const result$ = riddle35.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });

  it('should not switch when not empty and errored', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles1 = ' -a-#';
      const sourceMarbles2 = ' -x---|';
      const expectedMarbles = '-a-#';
      const values = { a: 'First', x: 'Second' };

      const source1$ = cold(sourceMarbles1, values);
      const source2$ = cold(sourceMarbles2, values);

      const riddle35 = new Riddle35Solution();
      const result$ = riddle35.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, values);
    });
  });
});
