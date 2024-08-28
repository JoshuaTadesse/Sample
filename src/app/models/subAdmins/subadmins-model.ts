import { Activity } from '../activity/activity.model';
import { Company } from '../company/company.model';
import { Permission } from '../permission/permission.model';
export class SubAdmins {
  adminNumber!: string;
  createdAt!: string;
  username!: string;
  name!: string;
  email!: string;
  role!: string;
  usertype!: number;
  status!: number;
  password!: string;
  id!: string;
  permissions!: Permission[];
  // activit!: Activity;
  company?: Company;
}
