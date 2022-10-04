// A small which adds retries to axios

import axiosFactory, {AxiosInstance, AxiosResponse} from 'axios'
import {BaseApiResponse} from "../constants/types/api";

export const axiosInstance:AxiosInstance = axiosFactory.create({
  validateStatus: function (status) {
    return status >= 200 && status <= 503;
  },
})


export const responseHandler = (response: AxiosResponse) : BaseApiResponse<Object>=> {

  console.log("data here:"+response.data);
  let {status, data} = response;

  if(data == null){
    return {message: "Error while communicating with server. Please contact Support", status: "failed"}
  }

  console.log(JSON.stringify("data message"+data.message))
  console.log(JSON.stringify("data data"+JSON.stringify(data.data)))
  let mappedResponse : BaseApiResponse<Object> = {
    status: data.status,
    message: data.message,
    data: data.data
  };
  if(status >=200 && status <= 400){
    console.log(JSON.stringify("before return"+JSON.stringify(mappedResponse)))
    return mappedResponse
  }
  if(status >=400 && status <500){
    if(status === 403){
      mappedResponse.message = "Unauthorized request. Please login to continue.";
    }
  }else{
    console.log(JSON.stringify("error here"+JSON.stringify(response)))
    mappedResponse.message = "Error while communicating with server. Please try again later.";
  }
  return mappedResponse;

};

export const resilience = (axios: AxiosInstance) => {
  axios.interceptors.response.use(
    (v) => Promise.resolve(v),
    (error) => {
      if (!error.config) {
        console.error('Received network error without axios details', error)
        return Promise.reject(error)
      }

      if (
        error.response &&
        (error.response.status == 400 ||
          error.response.status == 401 ||
          error.response.status == 403)
      ) {
        console.debug('Network request failed but this is ok', error)
        return Promise.reject(error)
      }

      if (
        error.response &&
        (error.response.status >= 400 || error.response.status < 500)
      ) {
        // 4xx status means we should not retry.
        console.error('Network request failed', { config: error.config, error })
        return Promise.reject(error)
      }

      const config = {
        ...error.config,
        timeout: 1000,
        count: (error?.config?.count || 0) + 1
      }

      if (config.count > 2) {
        const err = new Error(
          'Unable to reach network, gave up after 60 retries. Please restart the app and try again.'
        )
        console.error(err, { config: error.config, error })
        return Promise.reject(error.config.data)
      }

      console.debug('Retrying due to network error', {
        count: error.config.count,
        error
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.request(config).then(resolve).catch(reject)
        }, 1000)
      })
    }
  )

}
