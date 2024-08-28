import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';

@Injectable({
  providedIn: 'root',
})
export class ResourceEndpointService {
  constructor(private configService: ConfigService) {}

  /* Agent */
  get agentUri(): string {
    return `${this.configService.resourceApiServiceURI}/agents`;
  }

  get agentlogInUri(): string {
    return `${this.configService.resourceApiServiceURI}/agents/login`;
  }

  get agentAttachementUri(): string {
    return `${this.configService.resourceApiServiceURI}/agents/attachment`;
  }

  get forgetPasswordAgent(): string {
    return `${this.configService.resourceApiServiceURI}/agents/forgot/password`;
  }

  get restPasswordAgent(): string {
    return `${this.configService.resourceApiServiceURI}/agents/resetpwd`;
  }

  /* Attachement */
  get attachementUri(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/attachment`;
  }

  /* Booking */

  get bookingUri(): string {
    return `${this.configService.resourceApiServiceURI}/newbookings`;
  }

  get bookingsByCustomer(): string {
    return `${this.configService.resourceApiServiceURI}/newbookings/customer`;
  }

  get bookingsByAgent(): string {
    return `${this.configService.resourceApiServiceURI}/newbookings/creator`;
  }

  /* Company */

  get companylogInUri(): string {
    return `${this.configService.resourceApiServiceURI}/companyusers/login`;
  }

  get companyUri(): string {
    return `${this.configService.resourceApiServiceURI}/companies`;
  }

  get companyBookingUri(): string {
    return `${this.configService.resourceApiServiceURI}/companybookings/create`;
  }

  get forgetPasswordCompany(): string {
    return `${this.configService.resourceApiServiceURI}/companyusers/forgot/password`;
  }

  /* Company Departments */

  get companyDepartmentsUri(): string {
    return `${this.configService.resourceApiServiceURI}/departments`;
  }
  GetDeleteDepartmentUri(id: string) {
    return `${this.companyDepartmentsUri}/${id}`;
  }

  /* Company Users */

  get companyUsersUri(): string {
    return `${this.configService.resourceApiServiceURI}/companyusers`;
  }
  GetDeleteCompanyUsersUri(id: string) {
    return `${this.companyUsersUri}/${id}`;
  }
  get companyEmployeesUri(): string {
    return `${this.configService.resourceApiServiceURI}/employees`;
  }

  get companyUploadImgUri(): string {
    return `${this.configService.resourceApiServiceURI}/companies`;
  }

  GetDeleteEmployeUri(id: string) {
    return `${this.companyEmployeesUri}/${id}`;
  }

  get BookingUri(): string {
    return `${this.configService.resourceApiServiceURI}/companybookings`;
  }

  get PermissionsUri(): string {
    return `${this.configService.resourceApiServiceURI}/permissions`;
  }

  get companyUserPasswordChange(): string {
    return `${this.configService.resourceApiServiceURI}/companyusers/resetpwd`;
  }

  /* Categories */
  get mainCategoriesUri(): string {
    return `${this.configService.resourceApiServiceURI}/maincategories?page=1&pageSize=10`;
  }

  get categoriesUri(): string {
    return `${this.configService.resourceApiServiceURI}/newcategories?page=1&pageSize=20`;
  }

  get categoriesByMainCategories(): string {
    return `${this.configService.resourceApiServiceURI}/newcategories`;
  }

  // get categoriesUri(page: number, pageSize: number): string {
  //   return `${this.configService.resourceApiServiceURI}/newcategories?page=${page}&pageSize=${pageSize}`;
  // }

  /* Users */
  get usersUri(): string {
    return `${this.configService.resourceApiServiceURI}/users`;
  }
  /* User Login */
  get cusomerlogInUri(): string {
    return `${this.configService.resourceApiServiceURI}/users/login`;
  }

  get forgetPasswordCustomer(): string {
    return `${this.configService.resourceApiServiceURI}/users/forgot/password`;
  }

  get restPasswordCustomer(): string {
    return `${this.configService.resourceApiServiceURI}/users/resetpwd`;
  }

  get customerLogoUri(): string {
    return `${this.configService.resourceApiServiceURI}/users/upload`;
  }

  /* Questions */
  get questionsUri(): string {
    return `${this.configService.resourceApiServiceURI}/questions?page=1&pageSize=10`;
  }

  /* Experiences */
  get experiencesUri(): string {
    return `${this.configService.resourceApiServiceURI}/experiences?page=1&pageSize=10`;
  }

  /* Service Providers */
  get serviceProvidersUri(): string {
    return `${this.configService.resourceApiServiceURI}/taskers`;
  }

  get serviceProvidersByAgentUri(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/agent`;
  }

  get serviceProvidersBySelfUri(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/self`;
  }

  get serviceProviderlogInUri(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/login`;
  }

  get forgetPasswordProvider(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/forgot/password`;
  }

  get restPasswordProvider(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/resetpwd`;
  }

  get serviceProviderByID(): string {
    return `${this.configService.resourceApiServiceURI}/taskers`;
  }

  get serviceProviderAvailability(): string {
    return `${this.configService.resourceApiServiceURI}/taskers/availability/provider`;
  }

  get serviceProviderJobComplited(): string {
    return `${this.configService.resourceApiServiceURI}/transactions/tasker`;
  }

  /* Transactions  */

  get transactionByCustomer(): string {
    return `${this.configService.resourceApiServiceURI}/transactions/customer`;
  }

  get transactionByAgent(): string {
    return `${this.configService.resourceApiServiceURI}/transactions/creator`;
  }

  get transactionByTasker(): string {
    return `${this.configService.resourceApiServiceURI}/transactions/tasker`;
  }

  /*Witness */
  get witnessUri(): string {
    return `${this.configService.resourceApiServiceURI}/witness`;
  }

  /*Complaints */
  get agentVsProviderUri(): string {
    return `${this.configService.resourceApiServiceURI}/complaints/agentvsprovider`;
  }
  get agentVsCustomerUri(): string {
    return `${this.configService.resourceApiServiceURI}/complaints/agentvscustomer`;
  }
  get customerVsProviderUri(): string {
    return `${this.configService.resourceApiServiceURI}/complaints/customervsprovider`;
  }
  get customerVsAgentUri(): string {
    return `${this.configService.resourceApiServiceURI}/complaints/customervsagent`;
  }
  get providerVsAgentUri(): string {
    return `${this.configService.resourceApiServiceURI}/complaints/providervsagent`;
  }
  get providerVsCustomerUri(): string {
    return `${this.configService.resourceApiServiceURI}/complaints/providervscustomer`;
  }
}
