import {
  Gender,
  InspectorRoleChoice,
  InspectorTypeChoice,
  Role,
} from "../types";

export interface IUser {
  id: number;
  role: Role;
  pinfl: string;
  document: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  gender: Gender;
  birth_date: string;
  phone_number: string;
  email: string;
  mip_district: {
    id: number;
    code: string;
    name_uz: string;
    name_en: string;
    name_ru: string;
  };
  mip_region: {
    id: number;
    code: string;
    name_uz: string;
    name_en: string;
    name_ru: string;
  };
  mip_address: string;
  inspector_type: InspectorTypeChoice;
  inspector_role: InspectorRoleChoice;
}

export interface IPhoto {
  photo: string;
}
