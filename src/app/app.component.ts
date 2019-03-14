import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './presentation';
import { Decrement, Increment } from './presentation/counter/counter.actions';
import { Observable } from 'rxjs';
import { getCounterValue } from './presentation/counter/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-app';

  counter$: Observable<number>

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.pipe(select(getCounterValue))
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
