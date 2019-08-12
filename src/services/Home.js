import request from '../utils/request';
import {host,port} from '../utils/constant';

export function getAllTopList() {
  return request(`${host}${port}/toplist`);
}
export function getTopList(type) {
    return request(`${host}${port}/top/list?idx=${type}`);
}
export function getSearchMusic({keywords,limit}) {
  return request(`${host}${port}/search?keywords=${keywords}&limit=${limit}`);
}
export function getMusicUrlApi(id) {
  return request(`${host}${port}/song/url?id=${id}`);
}

