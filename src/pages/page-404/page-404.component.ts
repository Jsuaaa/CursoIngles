import { Component } from '@angular/core';
import { LucideAngularModule, SunIcon } from 'lucide-angular';

@Component({
  selector: 'app-page-404',
  imports: [LucideAngularModule],
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.css'
})
export class Page404Component {

  readonly SunIcon = SunIcon;

}
