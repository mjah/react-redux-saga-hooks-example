import { ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORD } from './actions';

const initialState = {
  articles: [],
  remoteArticles: [],
  foundBadWords: false
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      foundBadWords: action.payload
    })
  }
  return state
}

export default rootReducer;