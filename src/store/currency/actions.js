import {defaultFiat} from '../../config'
import {detailQuery} from '../../api/requests'
import * as types from './types'
import * as helpers from '../helpers'

export const loadData = (params = {}) => (dispatch, getState) => {
  const fiat = getState().settings.fiat
  if (fiat !== defaultFiat) {
    params.convert = fiat
  }
  dispatch(setFetching())
  return detailQuery(params)
    .then((response) => {
      const converted = helpers.convertFiatKeys(fiat)(response)
      console.log(converted)
      dispatch(dataLoaded(converted))
    })
    .catch((err) => dispatch(setError(err.message)))
}

export const setFetching = () => {
  return {
    type: types.setFetching,
    payload: null
  }
}

export const dataLoaded = (response) => {
  return {
    type: types.dataLoaded,
    payload: response
  }
}

export const setError = (err) => {
  return {
    type: types.fetchError,
    payload: err
  }
}
