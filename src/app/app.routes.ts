import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './public/pages/not-found-page/not-found-page.component';
import { MotorcycleCatalougeComponent } from './shopping/pages/motorcycle-catalouge/motorcycle-catalouge.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'catalogo-motos',component: MotorcycleCatalougeComponent},
    {path:'**', component:NotFoundPageComponent}
];
