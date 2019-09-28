import { Observable } from 'rxjs';

export interface Riddle21 {

  /**
   * Return the last emission of the [source] in a Promise fashion.
   *
   * Use case: Sometimes you can't do everything reactively and you need to break out of it.
   */
  solve(source: Observable<number>): Promise<number>;
}
