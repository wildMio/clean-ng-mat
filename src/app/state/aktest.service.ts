import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { AktestStore } from './aktest.store';
import { Aktest } from './aktest.model';

@Injectable({ providedIn: 'root' })
export class AktestService {

  constructor(private aktestStore: AktestStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.aktestStore.set(entities));
  }

  add(aktest: Aktest) {
    this.aktestStore.add(aktest);
  }

  update(id, aktest: Partial<Aktest>) {
    this.aktestStore.update(id, aktest);
  }

  remove(id: ID) {
    this.aktestStore.remove(id);
  }
}
