import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Beauty Creations' },
      { id: 12, name: 'Fenty Beauty' },
      { id: 13, name: 'Holika' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'MAC' },
      { id: 16, name: 'Good Molecules' },
      { id: 17, name: 'Etude House' },
      { id: 18, name: 'Jeffree Star Cosmetics' },
      { id: 19, name: 'Cosrx' },
      { id: 20, name: 'Benefit' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/