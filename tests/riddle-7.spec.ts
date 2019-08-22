import { cold } from 'jasmine-marbles';

import { Riddle7Solution } from '../solutions/riddle-7-solution';

describe('Riddle 7', () => {

  it('should filter out distinct values', () => {
    const sourceMarbles = '  -a-b-c-a-b-d-d-e-d-|';
    const expectedMarbles = '-a-b-c-----d---e---|';
    const values = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    const source$ = cold(sourceMarbles, values);
    const expected$ = cold(expectedMarbles, values);

    const riddle7 = new Riddle7Solution();
    const result$ = riddle7.solve(source$);

    expect(result$).toBeObservable(expected$);
  });
});
