import { Input, Component } from "@angular/core/src/metadata/directives";
import { Hero } from "app/heroes/hero";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "app/hero.service";
import { Location } from "@angular/common";



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.params['id'];
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
