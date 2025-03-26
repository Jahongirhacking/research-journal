//Login Types
export interface ILogin {
  phoneNumber: string;
  password: string;
  deviceId: string;
}

export interface ILoginRes {
  accessToken: string;
  message: string;
  expiresIn: number;
  isSuccess: boolean;
  validateOtp: boolean;
}

export interface IRegister extends ILogin {
  firstName: string;
  lastName: string;
  pinfl: string;
  passport: string;
  deviceName: string;
  otp: string;
}

export interface IVerifyLogin extends ILogin {
  deviceName: IRegister['deviceName'];
  otp: IRegister['otp'];
}

export interface IProfile {
  entityName: string;
  firstName: string;
  lastName: string;
  middleName: string;
  organizationId: number;
  fullName: string;
  shortName: string;
  phoneNumber: string;
  pinfl: string;
  passport: string;
  name: string;
  languageId: number;
  genderId: number;
  academicDegreeId: number;
  academicTitleId: number;
  photoId: string;
  email: string;
  telegramLink: string;
  youtubeLink: string;
  facebookLink: string;
  xLink: string;
  id: number;
  stateId: number;
  language: string;
  gender: string;
  academicDegree: string;
  academicTitle: string;
  organization: string;
}
