import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';

import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesList:Hero[];

  selectedHero:Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getListOfHeroes();
  }

  public getListOfHeroes(){
    this.heroService.getHeroes().subscribe(heroesList => this.heroesList = heroesList);;
  } 

  public selectHero(hero:Hero) {
    this.selectedHero = hero;
  }

}
