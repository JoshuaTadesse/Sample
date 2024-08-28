import { Component, ViewChild, OnInit } from '@angular/core';
import { loginCompany } from 'src/app/models/login-company/login-company.model';
import { loginCustomer } from 'src/app/models/login-customer/loginCustomer.model';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'src/app/service/toaster.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SubadminsService } from './subadmins.service';
import { KeyService } from 'src/app/service/key.service';
import Swal from 'sweetalert2';
import { SubAdmins } from '../../models/subAdmins/subadmins-model';
import { ViewSubadminsComponent } from './view-subadmins/view-subadmins.component';
import { Permission } from 'src/app/models/permission/permission.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-company-sub-admins',
  templateUrl: './company-sub-admins.component.html',
  styleUrls: ['./company-sub-admins.component.scss'],
})
export class CompanySubAdminsComponent implements OnInit {
  pages: number[] = [];
  page = 1;
  pageSize = 10;
  imageUrl!: string;
  imageName!: string;
  subadmins!: SubAdmins[];
  userObject!: loginCustomer;
  companyObject!: loginCompany;
  busy: boolean = false;
  claimsArr!: Permission[];
  claims: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private toasterService: ToasterService,
    private storageService: StorageService,
    public route: Router,
    private http: HttpClient,
    private subAdminsService: SubadminsService,
    private keyService: KeyService,
    private subadminsService: SubadminsService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.busy = true;
    this.useLanguage(this.storageService.getData('language'));
    this.userObject =
      this.storageService.getData('agentObject') ||
      this.storageService.getData('customerObject') ||
      this.storageService.getData('serviceProviderObject');
    this.companyObject = this.storageService.getData('companyObject');
    this.getSubAdminsByCompany(this.page, this.pageSize);

    this.claimsArr = this.companyObject.permissions!;

    this.claimsArr.map((p) =>
      p.actions.map((action) => this.claims.push(action.name))
    );
    // Check the role and perform actions accordingly
    if (!this.userObject && !this.companyObject) {
      this.route.navigate(['/']);
    } else if (this.storageService.getData('companyObject')) {
      this.companyObject = this.storageService.getData('companyObject');
      this.imageName = this.companyObject.company.avatar;
      this.http
        .get(
          `http://65.109.93.224:4200/api/companies/image/${this.imageName}`,
          {
            responseType: 'blob',
          }
        )
        .subscribe((result: Blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = () => {
            this.imageUrl = reader.result as string;
          };
          this.busy = false;
        });
    } else {
      this.route.navigate(['/']);
    }
  }

  userProfile() {
    this.route.navigate(['/userprofile']);
  }

  onPageChange(event: any): void {
    this.getSubAdminsByCompany(event.pageIndex + 1, event.pageSize);

    window.scrollTo(0, 0);
  }

  getSubAdminsByCompany(page: number, pageSize: number) {
    this.busy = true;
    return firstValueFrom(
      this.subAdminsService.getSubadminsList(
        this.companyObject.company.id,
        page,
        pageSize
      )
    )
      .then(
        (result) => {
          if (this.subadmins?.length === 0) {
            this.subadmins = result.data;
            const rows = result.rows;
            this.paginator.pageSize = pageSize;
            this.paginator.length = rows; // Call the function here
            this.pages = Array.from(
              { length: result.pages },
              (_, index) => index + 1
            );
          } else {
            this.subadmins = [];
            this.subadmins = result.data;
            const rows = result.rows;
            this.paginator.pageSize = pageSize;
            this.paginator.length = rows; // Call the function here
            this.pages = Array.from(
              { length: result.pages },
              (_, index) => index + 1
            );
          }
        },
        (reject) => {
          // this.toasterService.error(this.messageService.serverError);
        }
      )
      .catch((error) => {
        // this.toastService.error(this.messageService.serverError);
      })
      .finally(() => {
        this.busy = false;
      });
  }

  edit(subadmins: SubAdmins) {
    this.route.navigate(['subadmins-edit']);
    this.storageService.setData(this.keyService.SUBADMINS_KEY, subadmins);
  }

  public deleteSubAdmin(id: string): Promise<any> {
    return firstValueFrom(this.subAdminsService.delete(id));
  }

  delete(id: string) {
    Swal.fire({
      title: this.translate.instant('general.are-you-sure'),
      text: this.translate.instant('general.you-wont-be-able-to-revert'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5ccd52',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('general.yes-delete-it'),
      cancelButtonText: this.translate.instant('general.cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.busy = true;
        this.deleteSubAdmin(id)
          .then(
            (result) => {
              let index = this.subadmins.findIndex((obj) => obj.id === id);

              // If the index is found, remove the object from the array
              if (index !== -1) {
                this.subadmins.splice(index, 1);
              }
              this.toasterService.showSuccess(
                'Deleted Successfully',
                'Successful'
              );
            },
            (reject) => {
              this.toasterService.showError(
                'Failed to Delete User',
                'An error occurred'
              );
            }
          )
          .catch((error) => {
            this.toasterService.showError('Error', 'An error occurred');
          })
          .finally(() => {
            this.busy = false;
          });
      }
    });
  }

  viewSubadmin(id: string) {
    const dialogConfig = new MatDialogConfig();

    // Pass the specific array of objects to the modal
    dialogConfig.data = {
      id: id,
      companyObject: this.companyObject,
    };

    // Open the modal and store the reference in a variable
    const dialogRef = this.dialog.open(ViewSubadminsComponent, dialogConfig);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.storageService.setData(this.keyService.LANGUAGE_KEY, language);
  }
}
