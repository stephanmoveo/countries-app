import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';
import { GoogleMapsComponent } from './pages/google-maps/google-maps.component';
import { HistoryLogComponent } from './pages/history-log/history-log.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'all', component: AllCountriesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'log', component: HistoryLogComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'maps', component: GoogleMapsComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
