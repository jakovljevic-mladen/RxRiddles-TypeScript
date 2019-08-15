import { of } from 'rxjs';
import { cold } from 'jasmine-marbles';

import { Riddle4Solution } from '../solutions/riddle-4-solution';

describe('Riddle 4', () => {

  it('should emmit [false] value (verified with subscription)', () => {
    const riddle4 = new Riddle4Solution();

    riddle4.solve(of()).subscribe(value => {
      expect(value).toBe(false);
    });
  });

  it('should emmit [false] value (verified with marbles)', () => {
    const sourceMarbles = '--a-|';
    const expectedMarbles = '--a-|';
    const expectedValues = { a: false };

    const source$ = cold(sourceMarbles);
    const expected$ = cold(expectedMarbles, expectedValues);

    const riddle4 = new Riddle4Solution();
    const result$ = riddle4.solve(source$);

    expect(result$).toBeObservable(expected$);
  });

  it('should emmit [false, true] values', () => {
    const sourceMarbles = '--a-b-|';
    const expectedMarbles = '--a-b-|';
    const expectedValues = { a: false, b: true };

    const source$ = cold(sourceMarbles);
    const expected$ = cold(expectedMarbles, expectedValues);

    const riddle4 = new Riddle4Solution();
    const result$ = riddle4.solve(source$);

    expect(result$).toBeObservable(expected$);
  });

  it('should emmit [false, true, false] values', () => {
    const sourceMarbles = '--a-b-c-|';
    const expectedMarbles = '--a-b-c-|';
    const expectedValues = { a: false, b: true, c: false };

    const source$ = cold(sourceMarbles);
    const expected$ = cold(expectedMarbles, expectedValues);

    const riddle4 = new Riddle4Solution();
    const result$ = riddle4.solve(source$);

    expect(result$).toBeObservable(expected$);
  });

  it('should emmit [false, true, false, true] values', () => {
    const sourceMarbles = '--a-b-c-d-|';
    const expectedMarbles = '--a-b-c-d-|';
    const expectedValues = { a: false, b: true, c: false, d: true };

    const source$ = cold(sourceMarbles);
    const expected$ = cold(expectedMarbles, expectedValues);

    const riddle4 = new Riddle4Solution();
    const result$ = riddle4.solve(source$);

    expect(result$).toBeObservable(expected$);
  });
});
