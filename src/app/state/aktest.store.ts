import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Aktest } from './aktest.model';

export interface AktestState extends EntityState<Aktest> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'aktest' })
export class AktestStore extends EntityStore<AktestState, Aktest> {

  constructor() {
    super();
  }

}

