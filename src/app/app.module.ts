import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HotelesComponent } from './Components/hoteles/hoteles.component';
import { DepartamentosComponent } from './Components/departamentos/departamentos.component';
import { PaseosComponent } from './Components/paseos/paseos.component';
import { YatesComponent } from './Components/yates/yates.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelesComponent,
    DepartamentosComponent,
    PaseosComponent,
    YatesComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
