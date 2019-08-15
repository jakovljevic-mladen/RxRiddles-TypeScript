import { cold } from 'jasmine-marbles';

import { Riddle3Solution } from '../solutions/riddle-3-solution';

describe('Riddle 3', () => {

  it('should filter out odd values from [0, 10) array', () => {
    const sourceMarbles = '--a-b-c-d-e-f-g-h-i-j-|';
    const expectedMarbles = '--a---c---e---g---i---|';
    const values = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };

    const source$ = cold(sourceMarbles, values);
    const expected$ = cold(expectedMarbles, values);

    const riddle3 = new Riddle3Solution();
    const result$ = riddle3.solve(source$);

    expect(result$).toBeObservable(expected$);
  });
});
