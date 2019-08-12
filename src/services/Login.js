import request from '../utils/request';
import {host,port} from '../utils/constant';

export function LoginIn(option) {
  console.log(option);
  return request(`${host}${port}/login/cellphone?phone=${option.phone}&password=${option.password}`);
}

