
import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
   select:'my-dashboard',
    templateUrl:'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    constructor(
        private router:Router,
        private heroService:HeroService
    ){}

    heroes:Hero[] = [];


    ngOnInit(){
        this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
    }

    gotoDetail(hero:Hero){
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }

}