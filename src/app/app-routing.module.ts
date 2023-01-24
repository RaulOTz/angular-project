import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HotelesComponent } from './Components/hoteles/hoteles.component';
import { DepartamentosComponent } from './Components/departamentos/departamentos.component';
import { PaseosComponent } from './Components/paseos/paseos.component';
import { YatesComponent } from './Components/yates/yates.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Hoteles', component: HotelesComponent},
  {path: 'Departamentos', component: DepartamentosComponent},
  {path: 'Paseos', component: PaseosComponent},
  {path: 'Yates', component: YatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
