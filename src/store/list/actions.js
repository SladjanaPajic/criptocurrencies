import {defaultFiat} from '../../config'
import {query} from '../../api/requests'
import * as types from './types'
import * as helpers from '../helpers'

export const loadData = (params = {}) => (dispatch, getState) => {
  console.log("Load data called with", params);

  const fiat = getState().settings.fiat
  if (fiat !== defaultFiat) {
    params.convert = fiat
  }

  console.log("Load data with currency: ", fiat)

  dispatch(setFetching())

  console.log("Params: ", params)


  return query(params)
    .then((response) => {
        console.log("Response: ", response);
      const converted = helpers.convertFiatKeys(fiat)(response)
      dispatch(dataLoaded(converted))
    })
    .catch((err) => {
          console.log("Error: ", err)
        dispatch(setError(err.message))
    })
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
