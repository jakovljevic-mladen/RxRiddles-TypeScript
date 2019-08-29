import { TestScheduler } from 'rxjs/testing';

import { Riddle10Solution } from '../solutions/riddle-10-solution';

describe('Riddle 10', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should merge emissions with func1', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '    -a-b-|';
      const inner1Marbles = '    --c---d-e-|';
      const inner2Marbles = '    -f----g---|';
      const expectedMarbles = '  ---il--j-(km)|';
      // when source emits:       a [which has value 1]
      // inner1 starts emitting:  --c---d-e-|
      // when source emits:         b [which has value 2]
      // inner2 starts emitting:    -f----g---|
      // expected:               ---il--j-(km)| // emits when inners emit
      const sourceValues = { a: 1, b: 2 };
      const inner1values = { c: '1', d: '2', e: '3' };
      const inner2values = { f: '5', g: '6' };
      const expectedValues = {
        i: { first: 1, second: '1' }, // a + c
        j: { first: 1, second: '2' }, // a + d
        k: { first: 1, second: '3' }, // a + g
        l: { first: 2, second: '5' }, // b + f
        m: { first: 2, second: '6' }  // b + g
      };

      const source$ = cold(sourceMarbles, sourceValues);
      const inner1 = cold(inner1Marbles, inner1values);
      const inner2 = cold(inner2Marbles, inner2values);
      const func = (value: number) => value === 1 ? inner1 : inner2;

      const riddle10 = new Riddle10Solution();
      const result$ = riddle10.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('should merge emissions with func2', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '    -a-b-|';
      const inner1Marbles = '    --c---d-e-|';
      const inner2Marbles = '    -f----g---|';
      const expectedMarbles = '  --i--k-j-l-m-|';
      // when source emits:       a [which has value 2]
      // inner2 starts emitting:  -f----g---|
      // when source emits:         b [which has value 1]
      // inner1 starts emitting:    --c---d-e-|
      // expected:               --i--k-j-l-m-| // emits when inners emit
      const sourceValues = { a: 1, b: 2 };
      const inner1values = { c: '1', d: '2', e: '3' };
      const inner2values = { f: '5', g: '6' };
      const expectedValues = {
        i: { first: 1, second: '5' }, // a + f
        j: { first: 1, second: '6' }, // a + g
        k: { first: 2, second: '1' }, // b + c
        l: { first: 2, second: '2' }, // b + d
        m: { first: 2, second: '3' }  // b + e
      };

      const source$ = cold(sourceMarbles, sourceValues);
      const inner1 = cold(inner1Marbles, inner1values);
      const inner2 = cold(inner2Marbles, inner2values);
      const func = (value: number) => value === 2 ? inner1 : inner2;

      const riddle10 = new Riddle10Solution();
      const result$ = riddle10.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });
});
