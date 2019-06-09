import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccreditationAppListComponent } from './component/accreditation-app-list/accreditation-app-list.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginLayoutComponent } from './login_layout/login-layout.component';
import { RegisterComponent } from './component/register/register.component';
import { AccreditationProgrammesComponent } from './component/accreditation-programmes/accreditation-programmes.component';
import { AccreditationAppCreateComponent } from './component/accreditation-app-create/accreditation-app-create.component';
import { AccreditationProgrammSubjectsComponent } from './component/accreditation-programm-subjects/accreditation-programm-subjects.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',                      
    component: DashboardComponent,
    canActivate: [AuthGuard],       
    children: [
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'accreditation',
        children:[
          { path:'list', component: AccreditationAppListComponent},
          { path:'details/:id', component:AccreditationProgrammesComponent},
          { path:'programm-subjects/:id', component:AccreditationProgrammSubjectsComponent},
          { path:'add', component:AccreditationAppCreateComponent}

        ]      
      },
      
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:id', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
