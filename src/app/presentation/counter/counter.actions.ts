import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  LoadCounters = '[Counter] Load Counters',
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
}

export class LoadCounters implements Action {
  readonly type = CounterActionTypes.LoadCounters;
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export type CounterActions =
  LoadCounters |
  Increment |
  Decrement
