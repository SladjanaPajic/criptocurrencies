export const convertFiatKeys = (fiat) => (list) => list.map(row => {
  const replacementRow = {...row}
  const fiatBase = fiat.toLowerCase()
  replacementRow.fiatPrice = row[`price_${fiatBase}`]
  replacementRow.fiat24hVolume = row[`24h_volume_${fiatBase}`]
  replacementRow.fiatMarketCap = row[`market_cap_${fiatBase}`]
  replacementRow.change24h = row[`percent_change_24h`]
  replacementRow.last_updated = parseInt(row['lastUpdated'], 10)

  return replacementRow
})
