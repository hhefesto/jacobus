import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ValidateService } from './services/validate.service';
import { AuthenticationService } from './services/authentication.service';
import { ProjectHandlingService } from './services/project-handling.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LogicService } from './services/logic.service';
import { ConstantsService } from './services/constants.service';
import { AHPService } from './services/ahp.service';
import { ChartService } from './services/chart.service';
import { DeployService } from './services/deploy.service';

import { Routing, RoutingProviders } from './modules/routing/routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { SideMenuComponent } from './components/principal/side-menu/side-menu.component';
import { SliderComponent } from './components/principal/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    PrincipalComponent,
    SideMenuComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    Routing
  ],
  providers: [
    ValidateService,
    AuthenticationService,
    ProjectHandlingService,
    AuthenticationGuard,
    RoutingProviders,
    LogicService,
    ConstantsService,
    AHPService,
    ChartService,
    DeployService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


