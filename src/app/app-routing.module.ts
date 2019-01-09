import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccreditationAppListComponent } from './component/accreditation-app-list/accreditation-app-list.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginLayoutComponent } from './login_layout/login-layout.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path: '',                      
    component: DashboardComponent,
    canActivate: [AuthGuard],       
    children: [
      {
        path: '',
        component: AccreditationAppListComponent   // to be changed
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
