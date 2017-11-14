import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

import { Hero } from '../app/classes/hero';
import { HEROES } from '../app/mock-data/mock-heroes';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
