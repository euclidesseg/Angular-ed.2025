import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';

// Pipes
import { ToggleCasePipe } from '../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../pipes/can-fly.pipe';
import { HeroColorPipe } from '../pipes/heroColor.pipe';
import { HeroBgColorPipe } from '../pipes/hero-bg-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroBgColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Euclides perez');

  upperCase = signal(false);

  toggleCase(){
    this.upperCase.update(value => !value);
  }

  heroes = signal(heroes)

  sortBy = signal<keyof Hero | null>(null);

  sortHeroes(sortBy:keyof Hero | null){
    this.sortBy.set(sortBy);
  }
 }
