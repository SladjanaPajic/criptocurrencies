import * as types from './types'

export default (state = {
    fetching: false,
    loaded: false,
    error: null
}, action) => {

  switch (action.type) {
    case types.setFetching: {
      return {
        ...state,
        fetching: true
      }
    }
    case types.dataLoaded: {
      return {
        ...state,
        fetching: false,
        loaded: true,
        ...action.payload[0]
      }
    }
    default: {
      return state
    }
  }
}
