import { TestScheduler } from 'rxjs/testing';

import { Riddle23Solution } from '../solutions/riddle-23-solution';
import { User } from '../models/user';

describe('Riddle 23', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should extract email from user emissions', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const sourceMarbles = '  --a--b-|';
      const expectedMarbles = '--x--y-|';
      const sourceValues = {
        a: <User>{
          firstName: 'John',
          lastName: 'Doe',
          email: 'jon.doe@example.com',
        },
        b: <User>{
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
        }
      };
      const expectedValues = { x: 'jon.doe@example.com', y: 'jane.doe@example.com' };

      const source$ = cold(sourceMarbles, sourceValues);

      const riddle23 = new Riddle23Solution();
      const result$ = riddle23.solve(source$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });
});
