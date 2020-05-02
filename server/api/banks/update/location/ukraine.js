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

const getMonobankUa = () => {
  return getResponse('https://api.monobank.ua/bank/currency')
    .then((response) => {
      bankState.ua.monobank.usdBuy = round(response[0].rateBuy)
      bankState.ua.monobank.usdSell = round(response[0].rateSell)
      bankState.ua.monobank.eurBuy = round(response[1].rateBuy)
      bankState.ua.monobank.eurSell = round(response[1].rateSell)
      bankState.ua.monobank.rurBuy = round(response[2].rateBuy)
      bankState.ua.monobank.rurSell = round(response[2].rateSell)
      bankState.ua.monobank.plnBuy = round(response[4].rateBuy)
      bankState.ua.monobank.plnSell = round(response[4].rateSell)
    })
    .catch((err) => {
      console.log('monobank err : ', err.response.statusText, err.response.status)
    })
}

const getNationalbankUa = () => {
  return getResponse('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((response) => {
      bankState.ua.nationalbank.usdOnly = round(response[26].rate)
      bankState.ua.nationalbank.eurOnly = round(response[33].rate)
      bankState.ua.nationalbank.rurOnly = round(response[18].rate)
      bankState.ua.nationalbank.chfOnly = round(response[23].rate)
      bankState.ua.nationalbank.gbpOnly = round(response[25].rate)
      bankState.ua.nationalbank.plzOnly = round(response[34].rate)
      bankState.ua.nationalbank.sekOnly = round(response[22].rate)
      bankState.ua.nationalbank.cadOnly = round(response[1].rate)
      bankState.ua.nationalbank.xauOnly = round(response[58].rate)
    })
    .catch((err) => {
      console.log('nationalBankUkraine err : ', err.response.statusText, err.response.status)
    })
}

const getUkraine = () => {
  getPrivatbankUa()
  getMonobankUa()
  getNationalbankUa()
}

export default getUkraine
