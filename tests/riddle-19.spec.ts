import { Riddle19Solution } from '../solutions/riddle-19-solution';
import { IInteraction } from '../models/interaction';

describe('Riddle 19', () => {

  it('should emit values passed through IInteraction interface', () => {
    const testInteraction = new TestInteraction();
    const riddle19 = new Riddle19Solution();
    const testValues: number[] = [];

    const result$ = riddle19.solve(testInteraction);
    result$.subscribe(value => {
      testValues.push(value);
    });

    if (testInteraction.listener) {
      testInteraction.listener(5);
      expect(testValues).toEqual([5]);

      testInteraction.listener(10);
      expect(testValues).toEqual([5, 10]);

      testInteraction.listener(15);
      expect(testValues).toEqual([5, 10, 15]);
    }
  });
});

class TestInteraction implements IInteraction {
  private internalListener?: (value: number) => void;

  get listener(): ((value: number) => void) | undefined {
    return this.internalListener;
  }

  set listener(value: ((value: number) => void) | undefined) {
    this.internalListener = value;
  }
}
