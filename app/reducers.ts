/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from 'connected-react-router'
import globalReducer from 'containers/App/reducer'
import languageProviderReducer from 'containers/LanguageProvider/reducer'
import { combineReducers, Reducer } from 'redux'
import history from 'utils/history'

/**
 * Merges the main reducer with the router
 * state and dynamically injected reducers
 */
export default (injectedReducers = {}): Reducer =>

  combineReducers({
    'global': globalReducer,
    'language': languageProviderReducer,
    'router': connectRouter(history),
    ...injectedReducers,
  })
