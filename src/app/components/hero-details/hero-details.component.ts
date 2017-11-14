import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() selectedHeroDetail: Hero;

  constructor() { }

  ngOnInit() {
  }

}
