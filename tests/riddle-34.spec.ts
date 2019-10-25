import { asapScheduler, asyncScheduler, of, queueScheduler } from 'rxjs';

import { Riddle34Solution } from '../solutions/riddle-34-solution';
import { doOnSubscribe } from '../solutions/riddle-30-solution';

describe('Riddle 34', () => {

  it('should synchronously run on queue scheduler', () => {
    let value = false;

    const riddle34 = new Riddle34Solution();
    riddle34.solve(of(2, 5, -1), queueScheduler)
      .pipe(doOnSubscribe(() => {
        expect(value).toBe(false);
      }))
      .subscribe({
        next() {
          expect(value).toBe(false);
        },
        complete() {
          value = true;
        }
      });

    expect(value).toBe(true);
  });

  it('should asynchronously run on asap scheduler', () => {
    let value = false;

    const riddle34 = new Riddle34Solution();
    riddle34.solve(of(2, 5, -1), asapScheduler)
      .pipe(doOnSubscribe(() => {
        expect(value).toBe(false);
      }))
      .subscribe({
        next() {
          value = true;
        },
        complete() {
          expect(value).toBe(true);
        }
      });

    expect(value).toBe(false);
  });

  it('should asynchronously run on async scheduler', () => {
    let value = false;

    const riddle34 = new Riddle34Solution();
    riddle34.solve(of(2, 5, -1), asyncScheduler)
      .pipe(doOnSubscribe(() => {
        expect(value).toBe(false);
      }))
      .subscribe({
        next() {
          expect(value).toBe(false);
        },
        complete() {
          value = true;
        }
      });

    expect(value).toBe(false);
  });
});
