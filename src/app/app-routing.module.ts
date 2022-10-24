import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { JacobsServicesComponent } from './components/jacobs-services/jacobs-services.component';
import { JstoreComponent } from './components/jstore/jstore.component';
import { MainServicesComponent } from './components/main-services/main-services.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'jstore', component: JstoreComponent},
  { path: 'main_services', component: MainServicesComponent},
  { path: 'jacobs_services', component: JacobsServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
