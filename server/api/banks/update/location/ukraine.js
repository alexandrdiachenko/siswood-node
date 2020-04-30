import { round, getResponse } from '../logic'
import bankState from '../../bankState'

const getPrivatbankUa = () => {
  return getResponse('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => {
      bankState.ua.privatbank.usdBuy = round(response[0].buy)
      bankState.ua.privatbank.usdSell = round(response[0].sale)
      bankState.ua.privatbank.eurBuy = round(response[1].buy)
      bankState.ua.privatbank.eurSell = round(response[1].sale)
      bankState.ua.privatbank.rurBuy = round(response[2].buy)
      bankState.ua.privatbank.rurSell = round(response[2].sale)
    })
    .catch(
      console.log((err) => {
        console.log('privatbank err : ', err.response.statusText, err.response.status)
      })
    )
}

export default () => {
  getPrivatbankUa()
}
