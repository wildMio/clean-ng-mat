import { ID } from '@datorama/akita';

export interface Aktest {
  id: ID;
}

/**
 * A factory function that creates Aktest
 */
export function createAktest(params: Partial<Aktest>) {
  return {

  } as Aktest;
}
