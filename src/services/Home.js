import request from '../utils/request'

export function getSearchMusic ({keywords,limit}) {
  return request('get',`/search?keywords=${keywords}&limit=${limit}`)
}
export function getMusicUrlApi (id) {
  return request('get',`/song/url?id=${id}`)
}
export function getMusicInfo(id) {
  return request('get', `/song/detail?ids=${id}`)
}