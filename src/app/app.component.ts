import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroesComponent, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontendAng';
}
