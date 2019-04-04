import { ADD_ARTICLE, FOUND_BAD_WORD } from './actions';

const forbiddenWords = ['spam', 'money']

function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        )
        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD, payload: true })
        }
        dispatch({ type: FOUND_BAD_WORD, payload: false })
      }
      return next(action);
    }
  }
}

export { forbiddenWordsMiddleware };