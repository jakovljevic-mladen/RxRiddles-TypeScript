import { of } from 'rxjs';

import { Riddle21Solution } from '../solutions/riddle-21-solution';

describe('Riddle 21', () => {
  it('should turn an Observable to a Promise', () => {
    const riddle21 = new Riddle21Solution();
    const result = riddle21.solve(of(1, 2, 3));

    result.then(value => {
      expect(value).toBe(3);
    });
  });
});
