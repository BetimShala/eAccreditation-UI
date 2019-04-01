import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderToggleComponent } from './component/header/header-toggle/header-toggle.component';
import { HeaderLogoComponent } from './component/header/header-logo/header-logo.component';
import { ProfileHeaderComponent } from './component/header/profile-header/profile-header.component';
import { MenuComponent } from './component/sidebar/menu/menu.component';
import { AccreditationAppListComponent } from './component/accreditation-app-list/accreditation-app-list.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './login_layout/login-layout.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { APIInterceptor } from './interceptors/apiinterceptor.service';
import {  MatTableModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { AccreditationProgrammesComponent } from './component/accreditation-programmes/accreditation-programmes.component';
import { MatPaginatorModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { AccreditationAppCreateComponent } from './component/accreditation-app-create/accreditation-app-create.component'; 
import {MatInputModule} from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccreditationProgrammSubjectsComponent } from './component/accreditation-programm-subjects/accreditation-programm-subjects.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderLogoComponent,
    HeaderToggleComponent,
    ProfileHeaderComponent,
    MenuComponent,
    AccreditationAppListComponent,
    LoginComponent,
    LoginLayoutComponent,
    RegisterComponent,
    AccreditationProgrammesComponent,
    AccreditationAppCreateComponent,
    AccreditationProgrammSubjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgSelectModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,      
      multi: true,
    },
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
