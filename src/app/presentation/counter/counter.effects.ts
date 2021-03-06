import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CounterActionTypes, CounterActions } from './counter.actions';


@Injectable()
export class CounterEffects {


  @Effect()
  loadCounters$ = this.actions$.pipe(
    ofType(CounterActionTypes.LoadCounters),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<CounterActions>) {}

}
