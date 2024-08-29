import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

{path:'home', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'features', component: FeaturesComponent},
{path:'about', component: AboutComponent},

{path:'', redirectTo: 'home', pathMatch: 'full'}, // Rota vazia, ele abre a Home por default.
{path:'**', component: NotFoundComponent}, // error 404.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
