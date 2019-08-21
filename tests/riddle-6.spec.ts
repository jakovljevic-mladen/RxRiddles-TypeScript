import { cold } from 'jasmine-marbles';

import { Riddle6Solution } from '../solutions/riddle-6-solution';

describe('Riddle 6', () => {

  it('should zip multiple values', () => {
    const source1Marbles = ' -a----d--e--f|';
    const source2Marbles = ' --b--c|';
    const expectedMarbles = '--y---(z|)';
    const values = { a: 4, b: 6, c: 2, d: 5, y: [4, 6], z: [5, 2] };

    const source1$ = cold(source1Marbles, values);
    const source2$ = cold(source2Marbles, values);
    const expected$ = cold(expectedMarbles, values);

    const riddle6 = new Riddle6Solution();
    const result$ = riddle6.solve(source1$, source2$);

    expect(result$).toBeObservable(expected$);
  });

  it('should zip long awaited value', () => {
    const source1Marbles = ' 500ms a|';
    const source2Marbles = ' --b-|';
    const expectedMarbles = '500ms (c|)';
    const values = { a: 10, b: 5, c: [10, 5] };

    const source1$ = cold(source1Marbles, values);
    const source2$ = cold(source2Marbles, values);
    const expected$ = cold(expectedMarbles, values);

    const riddle6 = new Riddle6Solution();
    const result$ = riddle6.solve(source1$, source2$);

    expect(result$).toBeObservable(expected$);
  });
});
