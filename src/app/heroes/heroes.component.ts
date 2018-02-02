import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/heroes/hero';
import { HeroService } from 'app/hero.service';
import { Observable } from 'rxjs/Observable';
import { MessageService } from 'app/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  /* selectedHero: Hero; */
  
  /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('New Hero selected : ' + this.selectedHero.name);
  } */

  constructor(private heroService: HeroService,private messageService :MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
