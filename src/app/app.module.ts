import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { NavComponent } from 'src/app/pages/nav/nav.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { ContentAreaComponent } from 'src/app/pages/content-area/content-area.component';
import { RegistrationComponent } from 'src/app/pages/registration/registration.component';
import { ServiceComponent } from 'src/app/pages/service/service.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ServiceListComponent } from 'src/app/pages/service-list/service-list.component';
import { ServiceBookingComponent } from 'src/app/pages/service-booking/service-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationCustomerComponent } from 'src/app/pages/registration-customer/registration-customer.component';
import { RegistrationServiceProviderComponent } from 'src/app/pages/registration-service-provider/registration-service-provider.component';
import { NgToastModule } from 'ng-angular-popup';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { BookServiceModalComponent } from 'src/app/pages/book-service-modal/book-service-modal.component';
import { RegistrationAgentComponent } from 'src/app/pages/registration-agent/registration-agent.component';
import { DownloadAppComponent } from 'src/app/pages/download-app/download-app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BookServiceDetailModalComponent } from 'src/app/pages/book-service-detail-modal/book-service-detail-modal.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookAcceptedModalComponent } from 'src/app/pages/book-accepted-modal/book-accepted-modal.component';
import { BookInProgressModalComponent } from 'src/app/pages/book-in-progress-modal/book-in-progress-modal.component';
import { BookPausedModalComponent } from 'src/app/pages/book-paused-modal/book-paused-modal.component';
import { BookCancelledModalComponent } from 'src/app/pages/book-cancelled-modal/book-cancelled-modal.component';
import { BookCompletedModalComponent } from 'src/app/pages/book-completed-modal/book-completed-modal.component';
import { RegisterProviderByAgentComponent } from 'src/app/pages/register-provider-by-agent/register-provider-by-agent.component';
import { MatSelectModule } from '@angular/material/select';
import { ServiceProviderByAgentModalComponent } from 'src/app/pages/service-provider-by-agent-modal/service-provider-by-agent-modal.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { TransactionDetailModalComponent } from 'src/app/pages/transaction-detail-modal/transaction-detail-modal.component';
import { TransactionInvoiceDetailModalComponent } from 'src/app/pages/transaction-invoice-detail-modal/transaction-invoice-detail-modal.component';
import { ServiceProviderHistoryForCustomerModalComponent } from 'src/app/pages/service-provider-history-for-customer-modal/service-provider-history-for-customer-modal.component';
import { ServiceProviderAttachmentsModalComponent } from 'src/app/pages/service-provider-attachments-modal/service-provider-attachments-modal.component';
import { BookingsDetailModalComponent } from 'src/app/pages/bookings-detail-modal/bookings-detail-modal.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { DepartmentsComponent } from 'src/app/pages/departments/departments.component';
import { BookingsComponent } from 'src/app/pages/bookings/bookings.component';
import { DepartmentService } from 'src/app/pages/departments/department.service';
import { CreateDepartmentsComponent } from 'src/app/pages/departments/create-departments/create-departments.component';
import { EditDepartmentsComponent } from 'src/app/pages/departments/edit-departments/edit-departments.component';
import { ViewDepartmentComponent } from 'src/app/pages/departments/view-department/view-department.component';
import { CompanyUsersComponent } from 'src/app/pages/company-users/company-users.component';
import { CreateCompanyUserComponent } from 'src/app/pages/company-users/create-company-user/create-company-user.component';
import { CompanyEmployeesComponent } from 'src/app/pages/company-employees/company-employees.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EditCompanyUserComponent } from 'src/app/pages/company-users/edit-company-user/edit-company-user.component';
import { CreateEmployeesComponent } from 'src/app/pages/company-employees/create-employees/create-employees.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditEmployeesComponent } from 'src/app/pages/company-employees/edit-employees/edit-employees.component';
import { ViewEmployeesComponent } from 'src/app/pages/company-employees/view-employees/view-employees.component';
import { ViewCompanyUserComponent } from 'src/app/pages/company-users/view-company-user/view-company-user.component';
import { ViewBookingComponent } from 'src/app/pages/bookings/view-booking/view-booking.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RegisterCustomerComponent } from 'src/app/pages/register-customer/register-customer.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgentBookingsComponent } from 'src/app//pages/agent-bookings/agent-bookings.component';
import { ViewAgentBookingsComponent } from 'src/app//pages/agent-bookings/view-agent-bookings/view-agent-bookings.component';
import { ServiceProviderBookingsComponent } from 'src/app//pages/service-provider-bookings/service-provider-bookings.component';
import { ViewServiceProviderBookingComponent } from 'src/app//pages/service-provider-bookings/view-service-provider-booking/view-service-provider-booking.component';
import { RegisterProviderComponent } from 'src/app/pages/register-provider/register-provider.component';
import { CustomerBookingsComponent } from 'src/app/pages/customer-bookings/customer-bookings.component';
import { ViewCustomerBookingComponent } from 'src/app/pages/customer-bookings/view-customer-booking/view-customer-booking.component';
import { AgentRegisterProviderComponent } from 'src/app/pages/agent-register-provider/agent-register-provider.component';
import { CustomerTransactionComponent } from './pages/Transactions/customer-transaction/customer-transaction.component';
import { AgentTransactionComponent } from './pages/Transactions/agent-transaction/agent-transaction.component';
import { ProviderTransactionComponent } from './pages/Transactions/provider-transaction/provider-transaction.component';
import { ViewCustomerTransactionComponent } from './pages/Transactions/customer-transaction/view-customer-transaction/view-customer-transaction.component';
import { ViewAgentTransactionComponent } from './pages/Transactions/agent-transaction/view-agent-transaction/view-agent-transaction.component';
import { ViewProviderTransactionComponent } from './pages/Transactions/provider-transaction/view-provider-transaction/view-provider-transaction.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { TaskerWitnessComponent } from './pages/witnesses/tasker-witness/tasker-witness.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CompanySubAdminsComponent } from './pages/company-sub-admins/company-sub-admins.component';
import { CreateSubadminsComponent } from './pages/company-sub-admins/create-subadmins/create-subadmins.component';
import { ViewSubadminsComponent } from './pages/company-sub-admins/view-subadmins/view-subadmins.component';
import { EditSubadminsComponent } from './pages/company-sub-admins/edit-subadmins/edit-subadmins.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HelpAndFAQComponent } from './pages/help-and-faq/help-and-faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContentAreaComponent,
    RegistrationComponent,
    RegistrationCustomerComponent,
    RegistrationServiceProviderComponent,
    ServiceComponent,
    ServiceListComponent,
    ServiceBookingComponent,
    DashboardComponent,
    BookServiceModalComponent,
    BookServiceDetailModalComponent,
    RegistrationAgentComponent,
    DownloadAppComponent,
    BookAcceptedModalComponent,
    BookInProgressModalComponent,
    BookPausedModalComponent,
    BookCancelledModalComponent,
    BookCompletedModalComponent,
    RegisterProviderByAgentComponent,
    ServiceProviderByAgentModalComponent,
    UserProfileComponent,
    TransactionDetailModalComponent,
    TransactionInvoiceDetailModalComponent,
    ServiceProviderHistoryForCustomerModalComponent,
    ServiceProviderAttachmentsModalComponent,
    BookingsDetailModalComponent,
    SidenavComponent,
    DepartmentsComponent,
    BookingsComponent,
    CreateDepartmentsComponent,
    EditDepartmentsComponent,
    ViewDepartmentComponent,
    CompanyUsersComponent,
    CreateCompanyUserComponent,
    CompanyEmployeesComponent,
    EditCompanyUserComponent,
    CreateEmployeesComponent,
    EditEmployeesComponent,
    ViewEmployeesComponent,
    ViewCompanyUserComponent,
    ViewBookingComponent,
    LoginComponent,
    RegisterCustomerComponent,
    RegisterProviderComponent,
    CustomerBookingsComponent,
    ViewCustomerBookingComponent,
    AgentBookingsComponent,
    ViewAgentBookingsComponent,
    ServiceProviderBookingsComponent,
    ViewServiceProviderBookingComponent,
    AgentRegisterProviderComponent,
    CustomerTransactionComponent,
    AgentTransactionComponent,
    ProviderTransactionComponent,
    ViewCustomerTransactionComponent,
    ViewAgentTransactionComponent,
    ViewProviderTransactionComponent,
    TermsAndConditionsComponent,
    TaskerWitnessComponent,
    CompanySubAdminsComponent,
    CreateSubadminsComponent,
    ViewSubadminsComponent,
    EditSubadminsComponent,
    ErrorPageComponent,
    ForgetPasswordComponent,
    HelpAndFAQComponent,
    ComplaintsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgToastModule,
    NoopAnimationsModule,
    MatDialogModule,
    CommonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatStepperModule,
    NgxMatFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSelectCountryModule.forRoot('en'),
    MatCheckboxModule,
    MatExpansionModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DepartmentService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
