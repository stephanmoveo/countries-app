import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CloneArrPipe } from './shared/pipes/clone-arr.pipe';
import { HistoryLogComponent } from './pages/history-log/history-log.component';
import { LoginComponent } from './pages/login/login.component';
import { GoogleMapsComponent } from './pages/google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    CloneArrPipe,
    HistoryLogComponent,
    LoginComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
