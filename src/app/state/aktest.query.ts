import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AktestStore, AktestState } from './aktest.store';
import { Aktest } from './aktest.model';

@Injectable({
  providedIn: 'root'
})
export class AktestQuery extends QueryEntity<AktestState, Aktest> {

  constructor(protected store: AktestStore) {
    super(store);
  }

}
