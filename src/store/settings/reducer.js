import {defaultFiat} from '../../config'
import * as types from './types'

export default (
  state = {
    fiat: defaultFiat
  },
  action
) => {
  switch (action.type) {
    case types.changeFiat: {
      return {
        ...state,
        fiat: action.payload
      }
    }
    default: {
      return state
    }
  }
}
