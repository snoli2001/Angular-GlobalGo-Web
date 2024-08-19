import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './public/pages/not-found-page/not-found-page.component';
import { MotorcycleCatalougeComponent } from './shopping/pages/motorcycle-catalouge/motorcycle-catalouge.component';
import { MotorcycleDetailComponent } from './shopping/pages/motorcycle-detail/motorcycle-detail.component';
import { NotMotorcycleFoundComponent } from './shopping/pages/not-motorcycle-found/not-motorcycle-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'catalogo-motos', pathMatch: 'full' },   
    { path: 'catalogo-motos', component: MotorcycleCatalougeComponent },  
    { path: 'moto-detail/:id', component: MotorcycleDetailComponent },
    { path: 'not-found', component: NotMotorcycleFoundComponent },
    { path: '**', component: NotFoundPageComponent }
];
