import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardGuard } from './auth-guards/user-guard.guard';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:"full"},
  {path: 'login', component: LoginComponent},
  {path: 'myaccount', component:MyAccountComponent, canActivate:[UserGuardGuard]},
  {path: 'search', component:MoviesSearchComponent, canActivate:[UserGuardGuard]},
  {path: 'mymovies', component:MyMoviesComponent, canActivate:[UserGuardGuard]},
  {path: 'header', component:HeaderComponent, canActivate:[UserGuardGuard]},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
