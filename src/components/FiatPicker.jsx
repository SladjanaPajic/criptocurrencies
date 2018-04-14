import React from 'react'
import {connect} from 'react-redux'
import {availableFiats} from '../config'
import {changeFiat} from '../store/settings/actions'

export const FiatPicker = (props) => {
  const {selected} = props
  return (
    <select onChange={props.changeFiat} value={selected}>
      {availableFiats.map((fiat) => (
        <option key={fiat} value={fiat}> {fiat} </option>
      ))}
    </select>
  )
}

const mapStateToProps = ({settings}) => {
  return {
    selected: settings.fiat
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeFiat: (e) => {
    e.preventDefault()
    const fiat = e.target.value
    dispatch(changeFiat(fiat))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FiatPicker)
