import request from '../utils/request';
import {host,port} from '../utils/constant';

export function getAllTopList() {
  return request(`${host}${port}/toplist`);
}
export function getTopList(type) {
    return request(`${host}${port}/top/list?idx=${type}`);
}
