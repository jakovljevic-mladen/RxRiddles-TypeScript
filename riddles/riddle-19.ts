import { Observable } from 'rxjs';

import { IInteraction } from '../models/interaction';

export interface Riddle19 {

  /**
   * Use the given [IInteraction] interface and use its listener to transform the
   * [number] callback to an Observable that emits every time the listener is called.
   * When the Observable is being disposed the listener should be set to undefined.
   *
   * Use case: Transform any listener into an Observable.
   */
  solve(interaction: IInteraction): Observable<number>;
}
