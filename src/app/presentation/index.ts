import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter/counter.reducer';

export interface AppState {
  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
};
