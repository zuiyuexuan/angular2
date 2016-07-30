import {Component, OnInit} from "@angular/core";

import {Hero} from './hero';
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";



@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives: [HeroDetailComponent],
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {

    heroes:Hero[];
    selectedHero:Hero;

    constructor(
        private heroService:HeroService,
        private router:Router
    ) {}

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail(){
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
}

