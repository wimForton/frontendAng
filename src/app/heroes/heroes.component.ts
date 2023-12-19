import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [HeroDetailComponent, NgFor],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero!: Hero;
  constructor(private heroService: HeroService) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
