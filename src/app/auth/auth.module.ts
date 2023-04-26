import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './pages/login/login.module';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/AuthService';
//import { AuthService } from './auth/services/AuthService';



@NgModule({
  declarations: [AuthComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    LoginModule,
    RouterModule
  ],
  exports: [
    AuthComponent
  ]
})
export class authModule { }
