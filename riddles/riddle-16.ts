import { Observable } from 'rxjs';

export interface Riddle16 {

  /**
   * For each emission of the [first] Observable use the [f]unction and return its value.
   * Dispose all previously non terminated returned Observables from the [f]unction upon
   * receiving a new emission from [first].
   *
   * Use case: The [first] Observable is an input field and you want to issue
   * a network request while disposing the old requests in case the user has typed something new.
   */
  solve(first: Observable<string>, f: (value: string) => Observable<number>): Observable<number>;
}
