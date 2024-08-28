import { Injectable } from '@angular/core';
import { SubAdmins } from '../../models/subAdmins/subadmins-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ResourceEndpointService } from 'src/app/endpoints/resource-endpoint.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from 'src/app/shared/base.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProtectedService } from 'src/app/pages/protected.service';
import { CreateCompanyUser } from 'src/app/models/company-users/create-company-user.model';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubadminsService extends BaseService {
  httpOptions: any;
  token: any;
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private resEndpoint: ResourceEndpointService,
    private authService: AuthService,
    private protectedService: ProtectedService
  ) {
    super();
    this.token = this.authService.getToken;
    this.httpOptions = this.protectedService.getHttpOptions(
      this.authService.getToken
    );
  }

  getSubadminsList(
    companyId: string,
    page: number,
    pageSize: number
  ): Observable<any> {
    let searchUrl: string;
    const baseUrl = this.resEndpoint.companyUsersUri;
    let companyIdModified = companyId.replace(/["']/g, '');
    searchUrl = `${baseUrl}/subadmin/${companyIdModified}/company?page=${page}&pageSize=${pageSize}`;

    return this.http.get(searchUrl, this.httpOptions);
  }

  getSubAdminById(subadminId: string): Observable<any> {
    let searchUrl: string;
    const baseUrl = this.resEndpoint.companyUsersUri;
    let subadminIdModified = subadminId.replace(/["']/g, '');
    searchUrl = `${baseUrl}/${subadminIdModified}`;

    return this.http.get(searchUrl, this.httpOptions);
  }

  public createSubAdmin(
    newSubAdmin: CreateCompanyUser,
    page: number,
    pageSize: number
  ): Observable<any> {
    return this.http
      .post<SubAdmins>(
        `${this.resEndpoint.companyUsersUri}`,
        newSubAdmin,
        this.httpOptions
      )
      .pipe(
        map((response: any) => {
          return {
            data: response,
            message: 'Sub Admin created successfully.',
          };
        }),
        catchError((error) => {
          let mess = '';
          if (error.error.details) {
            mess = error.error.details;
          } else {
            mess = error.error.message;
          }
          return throwError({
            data: null,
            message: mess,
          });
        })
      );
  }

  public editSubAdmin(newSubAdmin: CreateCompanyUser): Observable<any> {
    return this.http
      .patch(this.resEndpoint.companyUsersUri, newSubAdmin, this.httpOptions)
      .pipe(
        map((response: any) => {
          return {
            data: response,
            message: 'Sub Admin updated successfully',
          };
        }),
        catchError((error) => {
          let mess = '';
          if (error.error.details) {
            mess = error.error.details;
          } else {
            mess = error.error.message;
            if (
              mess.substring(0, 37) === 'E11000 duplicate key error collection'
            ) {
              mess = 'The username or email is already in use';
            }
          }
          return throwError({
            data: null,
            message: mess,
          });
        })
      );
  }

  public delete(id: string): Observable<any> {
    return this.http
      .delete(this.resEndpoint.GetDeleteCompanyUsersUri(id), this.httpOptions)
      .pipe(
        map((response: any) => {
          return {
            data: response,
            message: 'Permissions loaded successfully.',
          };
        }),
        catchError((error) => {
          return throwError({
            data: null,
            message: 'Failed to load permissions.',
          });
        })
      );
  }

  getPermissions(page: number, pageSize: number): Observable<any> {
    let searchUrl: string;
    const baseUrl = this.resEndpoint.PermissionsUri;
    searchUrl = `${baseUrl}/company?page=${page}&pageSize=${pageSize}`;

    return this.http.get(searchUrl, this.httpOptions).pipe(
      map((response: any) => {
        return { data: response, message: 'Permissions loaded successfully.' };
      }),
      catchError((error) => {
        return throwError({
          data: null,
          message: 'Failed to load permissions.',
        });
      })
    );
  }
}
