import { defer, Observable } from 'rxjs';

import { Riddle30 } from '../riddles/riddle-30';

export class Riddle30Solution implements Riddle30 {

  solve(source: Observable<number>, f: () => void): Observable<number> {
    return source.pipe(doOnSubscribe(f));
  }
}

function doOnSubscribe<T>(onSubscribe: () => void): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> => defer(() => {
    onSubscribe();

    return source;
  });
}
