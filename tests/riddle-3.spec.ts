import { cold } from 'jasmine-marbles';

import { Riddle3Solution } from '../solutions/riddle-3-solution';

describe('Riddle 3', () => {

  it('should filter out odd values from [0, 10) array', () => {
    const sourceMarbles = '--a-b-c-d-e-f-g-h-i-j-|';
    const sourceValues = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };
    const expectedMarbles = '--a---b---c---d---e---|';
    const expectedValues = { a: 0, b: 2, c: 4, d: 6, e: 8 };

    const source$ = cold(sourceMarbles, sourceValues);
    const expected$ = cold(expectedMarbles, expectedValues);

    const riddle3 = new Riddle3Solution();
    const result$ = riddle3.solve(source$);

    expect(result$).toBeObservable(expected$);
  });
});
