import { Riddle17Solution } from '../solutions/riddle-17-solution';

describe('Riddle 17', () => {

  it('should emit the value at the time of subscription', () => {
    let value = 1;

    const riddle17 = new Riddle17Solution();
    const result$ = riddle17.solve(() => value);

    value = 5;

    result$.subscribe((value: number) => {
      expect(value).toBe(5);
    });
  });

  it('should not emit the value at the time of passing the value to the Observable', () => {
    let value = 1;

    const riddle17 = new Riddle17Solution();
    const result$ = riddle17.solve(() => value);

    value = 5;

    result$.subscribe((value: number) => {
      expect(value).not.toBe(1);
    });
  });
});
