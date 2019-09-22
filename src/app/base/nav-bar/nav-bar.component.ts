import {Component} from '@angular/core';
import {Icon, IconConfiguration, IconNames} from 'gwipp';

@Component({
  selector: 'gh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Icon({name: 'fas fa-home'})
  homeIcon: IconConfiguration;

  @Icon({name: IconNames.USER_CIRCLE})
  userIcon: IconConfiguration;
}
