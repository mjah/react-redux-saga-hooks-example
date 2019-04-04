export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DATA_REQUESTED = 'DATA_REQUESTED'
export const DATA_LOADED = 'DATA_LOADED'
export const FOUND_BAD_WORD = 'FOUND_BAD_WORD'
export const API_ERRORED = 'API_ERRORED'

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

export function getData() {
  return { type: DATA_REQUESTED }
}