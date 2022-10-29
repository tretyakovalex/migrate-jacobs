import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { JacobsServicesComponent } from './components/jacobs-services/jacobs-services.component';
import { JstoreComponent } from './components/jstore/jstore.component';
import { MainServicesComponent } from './components/main-services/main-services.component';

import { BankingComponent } from './components/main-services/banking/banking.component';
import { DocumentsComponent } from './components/main-services/documents/documents.component';
import { HousingComponent } from './components/main-services/housing/housing.component';
import { InsuranceComponent } from './components/main-services/insurance/insurance.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'jstore', component: JstoreComponent},
  { path: 'main_services', component: MainServicesComponent},
  { path: 'main_services/banking', component: BankingComponent },
  { path: 'main_services/documents', component: DocumentsComponent },
  { path: 'main_services/housing', component: HousingComponent },
  { path: 'main_services/insurance', component: InsuranceComponent },
  { path: 'jacobs_services', component: JacobsServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
