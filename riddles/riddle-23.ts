import { Observable } from 'rxjs';

import { User } from '../models/user';

export interface Riddle23 {

  /**
   * Map email property from each emission of the [User] from the [source].
   *
   * Use case: You want to extract certain property from the known object.
   */
  solve(source: Observable<User>): Observable<string>;
}
