import { Riddle2Solution } from '../solutions/riddle-2-solution';
import { cold } from 'jasmine-marbles';

describe('Riddle 2', () => {

  it('should increase values -1, 0, 5 by 1', () => {
    const source$ = cold('--a-b-c-|', { a: -1, b: 0, c: 5 });
    const expected$ = cold('--x-y-z-|', { x: 0, y: 1, z: 6 });

    const riddle2 = new Riddle2Solution();
    const result$ = riddle2.solve(source$);

    expect(result$).toBeObservable(expected$);
  });
});
