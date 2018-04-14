import React from 'react'
import {connect} from 'react-redux'
import {loadData} from '../store/currency/actions'

export class Currency extends React.Component {
  componentDidMount () {
    this.fetch()
  }
  fetch = () => {
    this.props.loadData(this.props.match.params.id)
  }
  render () {
   const {loaded, fiat, fiatPrice, rank, symbol} = this.props
    console.log(this.props)

    return (loaded === false)
    ? <div className='spinner'>Loading...</div>
    : (
      <div>
      <button onClick={this.fetch}>Refresh</button>
      <table className='Detail'>
        <tbody>
          <tr>
            <th className='heading' colSpan="2">             
              <span className='heading__meta'>Rank: {rank}</span> {`${symbol}`}
            </th>
          </tr>
          <tr>
            <td>Price (in {fiat})</td>
            <td>{fiatPrice}</td>
          </tr>
          <tr>
            <td>24h volume (in {fiat})</td>
            <td>{this.props.fiat24hVolume}</td>
          </tr>
          <tr>
            <td>Market cap (in {fiat})</td>
            <td>{this.props.fiatMarketCap}</td>
          </tr>
          <tr>
            <td>Price (in BTC)</td>
            <td>{this.props.price_btc}</td>
          </tr>
          <tr>
            <td>1h change</td>
            <td>{this.props.percent_change_1h}</td>
          </tr>
          <tr>
            <td>24h change</td>
            <td>{this.props.percent_change_24h}</td>
          </tr>
          <tr>
            <td>7d change</td>
            <td>{this.props.percent_change_7d}</td>
          </tr>
          <tr>
            <td> Total supply</td>
            <td>{this.props.total_supply}</td>
          </tr>
          <tr>
            <td>Available</td>
            <td>{this.props.available_supply}</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

const mapStateToProps = ({currency, settings}) => ({
  ...currency,
  fiat: settings.fiat
})

const mapDispatchToProps = (dispatch) => ({
  loadData: (id) => dispatch(loadData({currency: id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
