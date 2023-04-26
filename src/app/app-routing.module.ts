import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { AuthComponent } from './auth/auth.component';
import { InscripcionesComponent } from './dashboard/pages/inscripciones/inscripciones.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { DetalleAlumnosComponent } from './dashboard/pages/alumnos/detalle/detalleAlumnos.component';
import { DetalleCursosComponent } from './dashboard/pages/cursos/detalle/detalleCursos.component';

const routes: Routes = [
  {path: 'auth',
  component : AuthComponent,
  children : [
    {path: 'login',
    component : LoginComponent,
    }]
},
  {path: 'dashboard',
  component : dashboardComponent,
  children : [
    {path: 'alumnos',
    //component : AlumnosComponent,
    children : [     
      {  path: '',
      component: AlumnosComponent},
      {  path: ':nroDocumento',
       component: DetalleAlumnosComponent}
      ]
    },
    {path: 'cursos',
    children : [     
      {  path: '',
      component: CursosComponent},
      {  path: ':id',
       component: DetalleCursosComponent}
      ]
    },
    {path: 'inscripciones',
    component : InscripcionesComponent,
    },    
  ]
},
{
  path: '**',
  redirectTo : 'dashboard',
 // redirectTo : 'auth',
}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
