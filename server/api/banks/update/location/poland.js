import { round, getResponse } from '../logic'
import bankState from '../../bankState'

const getNarodowybankpolskiPl = () => {
  return getResponse('https://api.nbp.pl/api/exchangerates/tables/c/?format=json')
    .then((response) => {
      bankState.pl[0].currancy[0].USD = [
        round(response[0].rates[0].bid),
        round(response[0].rates[0].ask)
      ]
      bankState.pl[0].currancy[1].AUD = [
        round(response[0].rates[1].bid),
        round(response[0].rates[1].ask)
      ]
      bankState.pl[0].currancy[2].CAD = [
        round(response[0].rates[2].bid),
        round(response[0].rates[2].ask)
      ]
      bankState.pl[0].currancy[3].EUR = [
        round(response[0].rates[3].bid),
        round(response[0].rates[3].ask)
      ]
      bankState.pl[0].currancy[4].HUF = [
        round(response[0].rates[4].bid),
        round(response[0].rates[4].ask)
      ]
      bankState.pl[0].currancy[5].CHF = [
        round(response[0].rates[5].bid),
        round(response[0].rates[5].ask)
      ]
      bankState.pl[0].currancy[6].DKK = [
        round(response[0].rates[6].bid),
        round(response[0].rates[6].ask)
      ]
      bankState.pl[0].currancy[7].NOK = [
        round(response[0].rates[7].bid),
        round(response[0].rates[7].ask)
      ]
      bankState.pl[0].currancy[8].SEK = [
        round(response[0].rates[8].bid),
        round(response[0].rates[8].ask)
      ]
    })
    .catch((err) => {
      console.log('sberbank err : ', err.response.statusText, err.response.status)
    })
}

const getPoland = () => {
  getNarodowybankpolskiPl()
}

export default getPoland
