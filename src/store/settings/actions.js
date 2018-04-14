import * as types from './types'

export const changeFiat = (fiat) => ({
  type: types.changeFiat,
  payload: fiat
})
