import {AxiosInstance} from 'axios'
import {axiosInstance,  responseHandler} from './AxiosService'

import {LOGIN_URL} from '../constants/api-urls';
import {IEndUserRequest} from "../constants/types/api";

class ApiService{

  private readonly axios:AxiosInstance;

  constructor() {
    this.axios = axiosInstance;
  }

  public authenticate = async (request: IEndUserRequest)=>{
    return responseHandler(await this.axios.post(LOGIN_URL, request))
  }

}

export default ApiService;
