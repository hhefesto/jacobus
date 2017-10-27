import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { PrincipalComponent } from '../../components/principal/principal.component';
import { ProfileComponent } from '../../components/profile/profile.component';

import { AuthenticationGuard } from '../../guards/authentication.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard]},
  { path: 'principal', component: PrincipalComponent, canActivate:[AuthenticationGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthenticationGuard]},
  { path: '**', component: HomeComponent}
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

