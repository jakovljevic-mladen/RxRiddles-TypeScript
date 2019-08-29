import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Pair } from '../models/pair';
import { Riddle10 } from '../riddles/riddle-10';

export class Riddle10Solution implements Riddle10 {

  solve(first: Observable<number>, func: (value: number) => Observable<string>): Observable<Pair<number, string>> {
    return first.pipe(mergeMap(firstValue => func(firstValue).pipe(map(secondValue => ({ first: firstValue, second: secondValue })))));
  }
}
