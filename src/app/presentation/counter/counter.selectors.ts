import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './counter.reducer';

export const getCounterFeature = createFeatureSelector<State>('counter')
export const getCounterValue = createSelector(getCounterFeature, (state) => state.value)
