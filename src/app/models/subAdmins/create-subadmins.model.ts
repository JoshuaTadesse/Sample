import { Permission } from "../permission/permission.model";

export class createSubAdmin {
  name!: string;
  email!: string;
  username!: string;
  password!: string;
  status!: number;
  companyId!: string;
  permissions!: Permission[];
}