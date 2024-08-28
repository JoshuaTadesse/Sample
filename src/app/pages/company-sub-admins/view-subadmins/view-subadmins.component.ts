import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { loginCompany } from 'src/app/models/login-company/login-company.model';
import { ToasterService } from 'src/app/service/toaster.service';
import { SubAdmins } from 'src/app/models/subAdmins/subadmins-model';
import { CompanyUsersService } from '../../company-users/company-users.service';

@Component({
  selector: 'app-view-subadmins',
  templateUrl: './view-subadmins.component.html',
  styleUrls: ['./view-subadmins.component.scss'],
})
export class ViewSubadminsComponent implements OnInit {
  subAdmins!: SubAdmins[];
  id!: string;
  companyObject!: loginCompany;

  constructor(
    public dialogRef: MatDialogRef<ViewSubadminsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public toasterService: ToasterService,
    private companyUsersService: CompanyUsersService
  ) {}

  ngOnInit() {
    this.id = this.data.id;
    this.companyObject = this.data.companyObject;
    this.getSubadminsById();
  }

  getSubadminsById() {
    return firstValueFrom(this.companyUsersService.getUserById(this.id))
      .then((result) => {
        if (this.subAdmins?.length === 0) {
          this.subAdmins.push(result);
        } else {
          this.subAdmins = [];
          this.subAdmins.push(result);
        }
      })
      .catch((error) => {
        // this.toastService.error(this.messageService.serverError);
      })
      .finally(() => {
        // this.busy = false;
      });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
