import { round, getResponse } from '../logic'
import bankState from '../../bankState'

const getNarodowybankpolskiPl = () => {
  return getResponse('https://api.nbp.pl/api/exchangerates/tables/c/?format=json')
    .then((response) => {
      bankState.pl.narodowybankpolski.usdBuy = round(response[0].rates[0].bid)
      bankState.pl.narodowybankpolski.usdSell = round(response[0].rates[0].ask)
      bankState.pl.narodowybankpolski.audBuy = round(response[0].rates[1].bid)
      bankState.pl.narodowybankpolski.audSell = round(response[0].rates[1].ask)
      bankState.pl.narodowybankpolski.cadBuy = round(response[0].rates[2].bid)
      bankState.pl.narodowybankpolski.cadSell = round(response[0].rates[2].ask)
      bankState.pl.narodowybankpolski.eurBuy = round(response[0].rates[3].bid)
      bankState.pl.narodowybankpolski.eurSell = round(response[0].rates[3].ask)
      bankState.pl.narodowybankpolski.hufBuy = round(response[0].rates[4].bid)
      bankState.pl.narodowybankpolski.hufSell = round(response[0].rates[4].ask)
      bankState.pl.narodowybankpolski.chfBuy = round(response[0].rates[5].bid)
      bankState.pl.narodowybankpolski.chfSell = round(response[0].rates[5].ask)
      bankState.pl.narodowybankpolski.dkkBuy = round(response[0].rates[6].bid)
      bankState.pl.narodowybankpolski.dkkSell = round(response[0].rates[6].ask)
      bankState.pl.narodowybankpolski.nokBuy = round(response[0].rates[7].bid)
      bankState.pl.narodowybankpolski.nokSell = round(response[0].rates[7].ask)
      bankState.pl.narodowybankpolski.sekBuy = round(response[0].rates[8].bid)
      bankState.pl.narodowybankpolski.sekSell = round(response[0].rates[8].ask)
      console.log(bankState.pl.narodowybankpolski)
    })
    .catch((err) => {
      console.log('sberbank err : ', err.response.statusText, err.response.status)
    })
}

const getPoland = () => {
  getNarodowybankpolskiPl()
}

export default getPoland
