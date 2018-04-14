import React from 'react'

const routeToCurrency = (props) => (id) => props.history.push(`/${id}`)

export default (props) => {
  const {data, fetching} = props

  if (!!fetching) {
    return <div className='spinner'>Loading...</div>
  }

  return (data && data.length === 0)
    ? <div className='List'><p>No data found</p></div>
    : (
      <div className='List'>
        <table>
          <tbody>
            <tr>
              <th>Rank & Symbol</th>
              <th>Price​</th>
              <th>24​ ​hour​ ​change</th>
            </tr>
            {data.map(({id, fiatPrice, rank, symbol, change24h}) => (
              <tr key={id} onClick={() => routeToCurrency(props)(id)}>
                <td>{rank}. {symbol}</td>
                <td>{fiatPrice}</td>
                <td>{change24h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
