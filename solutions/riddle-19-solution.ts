import { Observable } from 'rxjs';

import { Riddle19 } from '../riddles/riddle-19';
import { IInteraction } from '../models/interaction';

export class Riddle19Solution implements Riddle19 {

  solve(interaction: IInteraction): Observable<number> {
    return new Observable<number>(subscriber => {
      interaction.listener = subscriber.next.bind(subscriber);

      return () => {
        interaction.listener = undefined;
      };
    });
  }
}
