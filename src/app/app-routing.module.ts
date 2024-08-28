import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentAreaComponent } from 'src/app/pages/content-area/content-area.component';
import { ServiceComponent } from 'src/app/pages/service/service.component';
import { ServiceListComponent } from 'src/app/pages/service-list/service-list.component';
import { ServiceBookingComponent } from 'src/app/pages/service-booking/service-booking.component';
import { RegistrationCustomerComponent } from 'src/app/pages/registration-customer/registration-customer.component';
import { RegistrationServiceProviderComponent } from 'src/app/pages/registration-service-provider/registration-service-provider.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RegistrationAgentComponent } from 'src/app/pages/registration-agent/registration-agent.component';
import { DownloadAppComponent } from 'src/app/pages/download-app/download-app.component';
import { DepartmentsComponent } from 'src/app/pages/departments/departments.component';
import { BookingsComponent } from 'src/app/pages/bookings/bookings.component';
import { CompanyUsersComponent } from 'src/app/pages/company-users/company-users.component';
import { CompanyEmployeesComponent } from 'src/app/pages/company-employees/company-employees.component';
import { CreateEmployeesComponent } from 'src/app/pages/company-employees/create-employees/create-employees.component';
import { EditEmployeesComponent } from 'src/app/pages/company-employees/edit-employees/edit-employees.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterCustomerComponent } from 'src/app/pages/register-customer/register-customer.component';
import { RegisterProviderComponent } from 'src/app/pages/register-provider/register-provider.component';
import { CustomerBookingsComponent } from './pages/customer-bookings/customer-bookings.component';
import { RegisterProviderByAgentComponent } from './pages/register-provider-by-agent/register-provider-by-agent.component';
import { AgentBookingsComponent } from 'src/app/pages/agent-bookings/agent-bookings.component';
import { ServiceProviderBookingsComponent } from 'src/app/pages/service-provider-bookings/service-provider-bookings.component';
import { AgentRegisterProviderComponent } from 'src/app/pages/agent-register-provider/agent-register-provider.component';
import { CustomerTransactionComponent } from 'src/app/pages/Transactions/customer-transaction/customer-transaction.component';
import { AgentTransactionComponent } from 'src/app/pages/Transactions/agent-transaction/agent-transaction.component';
import { ProviderTransactionComponent } from 'src/app/pages/Transactions/provider-transaction/provider-transaction.component';
import { TermsAndConditionsComponent } from 'src/app/pages/terms-and-conditions/terms-and-conditions.component';
import { TaskerWitnessComponent } from 'src/app/pages/witnesses/tasker-witness/tasker-witness.component';
import { CompanySubAdminsComponent } from './pages/company-sub-admins/company-sub-admins.component';
import { CreateSubadminsComponent } from './pages/company-sub-admins/create-subadmins/create-subadmins.component';
import { EditSubadminsComponent } from './pages/company-sub-admins/edit-subadmins/edit-subadmins.component';
import { AuthGuard } from './service/login-guard.service';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HelpAndFAQComponent } from './pages/help-and-faq/help-and-faq.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';

const routes: Routes = [
  {
    path: '',
    component: ContentAreaComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: LoginComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'help',
    component: HelpAndFAQComponent,
  },
  {
    path: 'service-list',
    component: ServiceListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'service-booking',
    component: ServiceBookingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registration-customer',
    component: RegistrationCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register-customer',
    component: RegisterCustomerComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'registration-service-provider',
    component: RegistrationServiceProviderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register-provider',
    component: RegisterProviderComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'register-provider-by-agent',
    component: RegisterProviderByAgentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'registration-agent',
    component: RegistrationAgentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'download',
    component: DownloadAppComponent,
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'employees',
    component: CompanyEmployeesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'employees-create',
    component: CreateEmployeesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'employees-edit',
    component: EditEmployeesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings-customer',
    component: CustomerBookingsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings-agent',
    component: AgentBookingsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings-provider',
    component: ServiceProviderBookingsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions-customer',
    component: CustomerTransactionComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions-agent',
    component: AgentTransactionComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions-provider',
    component: ProviderTransactionComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings-sp',
    component: ServiceProviderBookingsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'companyusers',
    component: CompanyUsersComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'companysubadmins',
    component: CompanySubAdminsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'subadmins-create',
    component: CreateSubadminsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'subadmins-edit',
    component: EditSubadminsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'agent-register-provider',
    component: AgentRegisterProviderComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'terms',
    component: TermsAndConditionsComponent,
    pathMatch: 'full',
  },
  {
    path: 'userprofile',
    component: UserProfileComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'witness',
    component: TaskerWitnessComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'complaints',
    component: ComplaintsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: ErrorPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
