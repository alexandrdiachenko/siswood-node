import { round, getResponse } from '../logic'
import bankState from '../../bankState'

const getPrivatbankUa = () => {
  return getResponse('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => {
      bankState.ua[0].currancy[0].USD = [round(response[0].buy), round(response[0].sale)]
      bankState.ua[0].currancy[1].EUR = [round(response[1].buy), round(response[1].sale)]
      bankState.ua[0].currancy[2].RUR = [round(response[2].buy), round(response[2].sale)]
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
      bankState.ua[1].currancy[0].USD = [round(response[0].rateBuy), round(response[0].rateSell)]
      bankState.ua[1].currancy[1].EUR = [round(response[1].rateBuy), round(response[1].rateSell)]
      bankState.ua[1].currancy[2].RUR = [round(response[2].rateBuy), round(response[2].rateSell)]
      bankState.ua[1].currancy[3].PLN = [round(response[4].rateBuy), round(response[4].rateSell)]
    })
    .catch((err) => {
      console.log('monobank err : ', err.response.statusText, err.response.status)
    })
}

const getNationalbankUa = () => {
  return getResponse('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((response) => {
      bankState.ua[2].currancy[0].USD = [round(response[26].rate)]
      bankState.ua[2].currancy[1].EUR = [round(response[33].rate)]
      bankState.ua[2].currancy[2].RUR = [round(response[18].rate)]
      bankState.ua[2].currancy[3].CHF = [round(response[23].rate)]
      bankState.ua[2].currancy[4].GBP = [round(response[25].rate)]
      bankState.ua[2].currancy[5].PLZ = [round(response[34].rate)]
      bankState.ua[2].currancy[6].SEK = [round(response[22].rate)]
      bankState.ua[2].currancy[7].CAD = [round(response[1].rate)]
      bankState.ua[2].currancy[8].XAU = [round(response[58].rate)]
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
