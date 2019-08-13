import request from "../utils/request";
import {host, port} from "../utils/constant";

export function queryRank(id) {
  return request(`${host}${port}/toplist`);
}
export function queryArank(idx) {
  return request(`${host}${port}/top/list?idx=${idx}`);
}
