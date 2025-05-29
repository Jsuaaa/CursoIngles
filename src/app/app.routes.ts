import { Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { Page404Component } from '../pages/page-404/page-404.component';

export const routes: Routes = [

{path: '', component: MainPageComponent},
{path: '**', component: Page404Component}

];
