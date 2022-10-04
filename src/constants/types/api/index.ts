export interface BaseApiResponse<T>{
  status: string;
  message?: string;
  data?: T;
  errors?:ResponseError []
}

export interface ResponseError{
  fieldName: string;
  fieldError: string;
}

export interface AuthenticationResponse {
  accessToken: string;
}

export interface IEndUserLoginType {
  value?: string;
}

export interface IEndUserRequest {
  emailAddress?: string;
  password: string;
  phoneNumber?: string;
  loginType: IEndUserLoginType;
}

export interface IEndUserResponse extends BaseApiResponse<AuthenticationResponse>{}


