import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './public/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirección a la página de inicio
    {path:'**', component:NotFoundPageComponent}
];
