import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JstoreComponent } from './components/jstore/jstore.component';
import { HomeComponent } from './components/home/home.component';
import { MainServicesComponent } from './components/main-services/main-services.component';
import { JacobsServicesComponent } from './components/jacobs-services/jacobs-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JstoreComponent,
    HomeComponent,
    MainServicesComponent,
    JacobsServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
