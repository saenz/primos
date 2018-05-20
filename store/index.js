import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form'

const exampleInitialState = {}

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}