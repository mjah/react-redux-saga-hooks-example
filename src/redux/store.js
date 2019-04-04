import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { forbiddenWordsMiddleware } from "./middleware";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(saga);

export default store;
