import { Riddle1Solution } from '../solutions/riddle-1-solution';

describe('Riddle 1', () => {

  it('should transform value (5) to Observable', () => {
    const riddle1 = new Riddle1Solution();

    riddle1.solve(5).subscribe(res => {
      expect(res).toBe(5);
    });
  });
});
