import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './admin/registration/registration.component';
import {StudentDetailsComponent} from './student/student-details/student-details.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'admin/registration', component: RegistrationComponent},
    {path: 'student/details', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
