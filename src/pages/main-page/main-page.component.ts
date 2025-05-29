import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActualStateComponent } from '../../components/actual-state/actual-state.component';

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, ActualStateComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
