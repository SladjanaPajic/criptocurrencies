import * as types from './types'

export default (state = {
    data: [],
    fetching: false,
    error: null,
    fiat: 'USD'
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
        data: action.payload,
        fiat: 'USD'
      }
    }
    default: {
      return state
    }
  }
}
