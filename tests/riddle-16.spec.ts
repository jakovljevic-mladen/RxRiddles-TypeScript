import { TestScheduler } from 'rxjs/testing';

import { Riddle16Solution } from '../solutions/riddle-16-solution';

describe('Riddle 16', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should switch emissions to new ones with func1', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '    -a----b--------c---d-|';
      const inner1Marbles = '    --i---j-k-|';
      const inner2Marbles = '    -l----m---|';
      const expectedMarbles = '  ---i----i---j-k-l----i---j-k-|';
      // when source emits:       a [which has value 't']
      // inner1 starts emitting:  --i--
      // when source emits:            b [which has value 'te']
      // inner1 starts emitting:       --i---j-k
      // when source emits:                     c [which has value 'tes']
      // inner2 starts emitting:                -l--
      // when source emits:                         d [which has value 'test']
      // inner1 starts emitting:                    --i---j-k-|
      // expected:               ---i----i---j-k-l----i---j-k-| // emits when inners emit
      const sourceValues = { a: 't', b: 'te', c: 'tes', d: 'test' };
      const innerValues = { i: 1, j: 2, k: 3, l: 4, m: 5 };

      const source$ = cold(sourceMarbles, sourceValues);
      const inner1 = cold(inner1Marbles, innerValues);
      const inner2 = cold(inner2Marbles, innerValues);
      const func = (value: string) => value !== 'tes' ? inner1 : inner2;

      const riddle16 = new Riddle16Solution();
      const result$ = riddle16.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, innerValues);
    });
  });

  it('should switch emissions to new ones with func2', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const sourceMarbles = '    -a----b-----------c---d-|';
      const inner1Marbles = '    --i---j-k-|';
      const inner2Marbles = '    -l----m-|';
      const expectedMarbles = '  --l----l----m-------i--l----m-|';
      // when source emits:       a [which has value 't']
      // inner2 starts emitting:  -l---
      // when source emits:            b [which has value 'te']
      // inner2 starts emitting:       -l----m-|
      // when source emits:                        c [which has value 'tes']
      // inner1 starts emitting:                   --i-
      // when source emits:                            d [which has value 'test']
      // inner2 starts emitting:                       -l----m-|
      // expected:               --l----l----m-------i--l----m-| // emits when inners emit
      const sourceValues = { a: 't', b: 'te', c: 'tes', d: 'test' };
      const innerValues = { i: 1, j: 2, k: 3, l: 4, m: 5 };

      const source$ = cold(sourceMarbles, sourceValues);
      const inner1 = cold(inner1Marbles, innerValues);
      const inner2 = cold(inner2Marbles, innerValues);
      const func = (value: string) => value === 'tes' ? inner1 : inner2;

      const riddle16 = new Riddle16Solution();
      const result$ = riddle16.solve(source$, func);

      expectObservable(result$).toBe(expectedMarbles, innerValues);
    });
  });
});
