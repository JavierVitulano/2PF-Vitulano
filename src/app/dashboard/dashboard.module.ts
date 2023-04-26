import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { dashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AlumnosModule } from '../dashboard/pages/alumnos/alumnos.module';
import { LoginModule } from '../auth/pages/login/login.module';
import { CursosModule } from '../dashboard/pages/cursos/cursos.module';
import { InscripcionesModule } from '../dashboard/pages/inscripciones/inscripciones.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { authModule } from '../auth/auth.module';

@NgModule({
  declarations: [dashboardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AlumnosModule,
    //LoginModule,
    CursosModule,
    InscripcionesModule,
    RouterModule,
    MatListModule,
    authModule,
  ],
  exports: [dashboardComponent],
})
export class dashboardModule {}
