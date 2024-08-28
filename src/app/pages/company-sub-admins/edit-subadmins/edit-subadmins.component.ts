import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/service/toaster.service';
import { StorageService } from 'src/app/service/storage.service';
import { loginCompany } from 'src/app/models/login-company/login-company.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { CreateCompanyUser } from 'src/app/models/company-users/create-company-user.model';
import { Permission } from 'src/app/models/permission/permission.model';
import { SubadminsService } from '../subadmins.service';
import { MatPaginator } from '@angular/material/paginator';
import { loginCustomer } from 'src/app/models/login-customer/loginCustomer.model';
import { HttpClient } from '@angular/common/http';
import { Actions } from 'src/app/models/action/action.model';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { SubAdmins } from 'src/app/models/subAdmins/subadmins-model';
import { KeyService } from 'src/app/service/key.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-edit-subadmins',
  templateUrl: './edit-subadmins.component.html',
  styleUrls: ['./edit-subadmins.component.scss'],
})
export class EditSubadminsComponent implements OnInit {
  pages: number[] = [];
  page = 1;
  pageSize = 10;
  subAdmin!: SubAdmins;
  model: CreateCompanyUser = new CreateCompanyUser();
  companyId!: string;
  companyObject!: loginCompany;
  userObject!: loginCustomer;
  busy: boolean = false;
  permissions!: Permission[];
  imageUrl!: string;
  imageName!: string;
  selectedPermissions: string[] = [];
  Permissions: Permission[] = [];
  existingActions: string[] = [];
  claims!: Permission[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    status: new FormControl(true, [Validators.required]),
  });

  constructor(
    public route: Router,
    public storageService: StorageService,
    public toasterService: ToasterService,
    private subadminService: SubadminsService,
    private http: HttpClient,
    private dialog: MatDialog,
    private keyService: KeyService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.busy = true;
    this.useLanguage(this.storageService.getData('language'));
    this.userObject =
      this.storageService.getData('agentObject') ||
      this.storageService.getData('customerObject') ||
      this.storageService.getData('serviceProviderObject');
    this.companyObject = this.storageService.getData('companyObject');
    this.companyId = this.companyObject.company.id;

    this.subAdmin = this.storageService.getData(this.keyService.SUBADMINS_KEY);
    this.storageService.deleteData(this.keyService.SUBADMINS_KEY);
    this.populateData(this.subAdmin);
    this.getPermissions(this.page, 50);
    this.claims = this.companyObject.permissions!;
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

  getPermissions(page: number, pageSize: number) {
    this.busy = true;
    return firstValueFrom(this.subadminService.getPermissions(page, pageSize))
      .then(
        (result) => {
          if (this.permissions?.length === 0) {
            this.permissions = result.data.data;
            const rows = result.rows;
            this.paginator.pageSize = pageSize;
            this.paginator.length = rows; // Call the function here
            this.pages = Array.from(
              { length: result.pages },
              (_, index) => index + 1
            );
          } else {
            this.permissions = [];
            this.permissions = result.data.data;
            const rows = result.rows;
            this.paginator.pageSize = pageSize;
            this.paginator.length = rows; // Call the function here
            this.pages = Array.from(
              { length: result.pages },
              (_, index) => index + 1
            );
          }
        },
        (reject) => {}
      )
      .catch((error) => {})
      .finally(() => {
        this.busy = false;
      });
  }

  selected(module: string, actions: string) {
    if (this.selectedPermissions.includes(module)) {
      var permission = this.Permissions.find((p) => p.module === module);

      var action = new Actions();
      action.name = actions;

      var response = permission?.actions.find((a) => a.name === actions);

      if (response === undefined) {
        permission?.actions.push(action); //adds the action to the action array of the selected permission
      } else {
        // deletes the action from the action array of the selected permission
        var index = permission?.actions.findIndex((a) => a.name === actions);
        permission?.actions.splice(index!, 1);

        if (permission?.actions.length === 0) {
          var indexOfDeletedPermission = this.Permissions.findIndex(
            (sp) => sp.module === module
          ); //finds index of deleted permission
          var indexOfDeletedModule = this.selectedPermissions.findIndex(
            (sp) => sp === module
          ); //finds index of deleted permission name

          this.Permissions.splice(indexOfDeletedPermission, 1); //deletes the permission from the main List if none of its elements are selected
          this.selectedPermissions.splice(indexOfDeletedModule, 1); //deletes the name from the name List if none of its elements are selected
        }
      }
    } else {
      this.selectedPermissions.push(module);
      var actionsArr: Actions[] = [];
      var action = new Actions();
      action.name = actions;

      actionsArr.push(action);
      var perm = new Permission();

      perm.module = module;
      perm.actions = actionsArr;

      this.Permissions.push(perm);
    }
  }

  edit(subadmin: CreateCompanyUser) {
    return lastValueFrom(this.subadminService.editSubAdmin(subadmin));
  }

  populateData(arg: SubAdmins) {
    this.form.get('id')!.setValue(arg.id);
    this.form.get('name')?.setValue(arg.name);
    this.form.get('email')?.setValue(arg.email);
    this.form.get('username')?.setValue(arg.username);
    let status = arg.status === 1 ? true : false;
    this.form.get('status')?.setValue(status);

    this.populatePermissions();
  }

  populatePermissions() {
    this.subAdmin.permissions.map((p) =>
      p.actions.map((action) => this.existingActions.push(action.name))
    );

    this.subAdmin.permissions.map((p) => {
      this.selectedPermissions.push(p.module);
      var perm = new Permission();
      perm.module = p.module;
      delete perm._id;
      perm.actions = [];
      var act = new Actions();
      p.actions.map((action) => {
        act = action;
        delete act._id;
        perm.actions.push(act);
      });
      this.Permissions.push(perm);
    });
  }

  save() {
    this.busy = true;
    this.model.id = this.form.get('id')?.value!;
    this.model.permissions = this.Permissions;
    this.model.name = this.form.get('name')?.value!;
    this.model.username = this.form.get('username')?.value!;
    this.model.email = this.form.get('email')?.value!;
    let status = this.form.get('status')!.value!;
    this.model.status = status ? 1 : 0;
    this.model.role = 'subadmin';

    this.edit(this.model)
      .then(
        (result) => {
          this.toasterService.showSuccess(
            'Edited Successfully',
            result.message
          );
          this.route.navigate(['/companysubadmins']);
        },
        (reject) => {
          this.toasterService.showError(
            'Failed to Create User',
            reject.message
          );
        }
      )
      .catch((error) => {
        this.toasterService.showError('Error', error.message);
      })
      .finally(() => {
        this.busy = false;
      });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.storageService.setData(this.keyService.LANGUAGE_KEY, language);
  }
}
