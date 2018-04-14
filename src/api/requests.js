import axios from 'axios'
import {apiUrl, tickerEndpoint} from '../config'
import {formatResponse} from './helpers'


export const query = (params, endpoint = tickerEndpoint) => {
  const url = `${apiUrl}${endpoint}/`
  return axios({
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url,
    params: {...params, limit: 100}
  })
  .then(formatResponse)
}

export const detailQuery = (params) => {
  const {currency, ...rest} = params
  return query(rest, `${tickerEndpoint}/${currency}`)
}
