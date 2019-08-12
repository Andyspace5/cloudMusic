import request from "../utils/request";
import {host, port} from "../utils/constant";

export function queryRank(id) {
  return request(`${host}${port}/toplist`);
}
