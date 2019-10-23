import { asapScheduler, asyncScheduler, of, queueScheduler } from 'rxjs';

import { Riddle33Solution } from '../solutions/riddle-33-solution';
import { doOnSubscribe } from '../solutions/riddle-30-solution';

describe('Riddle 33', () => {

  it('should synchronously run on queue scheduler', () => {
    let value = false;

    const riddle33 = new Riddle33Solution();
    riddle33.solve(of(2, 5, -1), queueScheduler)
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

    const riddle33 = new Riddle33Solution();
    riddle33.solve(of(2, 5, -1), asapScheduler)
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

    const riddle33 = new Riddle33Solution();
    riddle33.solve(of(2, 5, -1), asyncScheduler)
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
});
