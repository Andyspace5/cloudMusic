import request from '../utils/request'

export function getAllTopList() {
  return request('get', `/toplist`)
}

export function getTopList(type) {
  return request('get',`/top/list?idx=${type}`)
}