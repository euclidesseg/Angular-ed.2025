import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuOptionsComponent } from '../side-menu-options/side-menu-options.component';
import { SideMenuHeaderComponent } from '../side-menu-header/side-menu-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'side-menu',
  imports: [RouterOutlet, SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
  