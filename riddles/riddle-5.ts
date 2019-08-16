import { Observable } from 'rxjs';

export interface Riddle5 {

  /**
   * Sum up the latest values of [first] and [second] whenever one of the Observables emits a new value.
   *
   * Use case: Two input fields in a calculator that need to be summed up and the result should be updated every time one of the inputs change.
   */
  solve(first: Observable<number>, second: Observable<number>): Observable<number>
}
