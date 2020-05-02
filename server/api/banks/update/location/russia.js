import { round, getResponse } from '../logic'
import bankState from '../../bankState'

const getSberbankRu = () => {
  return getResponse(
    'https://www.sberbank.ru/portalserver/proxy/?pipe=shortCachePipe&url=http://localhost/rates-web/rateService/rate/current%3FregionId%3D55%26currencyCode=826%26currencyCode=756%26currencyCode=392%26currencyCode=156%26currencyCode=840%26currencyCode=978%26rateCategory%3Dbeznal'
  )
    .then((response) => {
      bankState.ru.sberbank.usdBuy = round(response.beznal['840'][0].buyValue)
      bankState.ru.sberbank.usdSell = round(response.beznal['840'][0].sellValue)
      bankState.ru.sberbank.eurBuy = round(response.beznal['978'][0].buyValue)
      bankState.ru.sberbank.eurSell = round(response.beznal['978'][0].sellValue)
      bankState.ru.sberbank.gbpBuy = round(response.beznal['826'][0].buyValue)
      bankState.ru.sberbank.gbpSell = round(response.beznal['826'][0].sellValue)
      bankState.ru.sberbank.chfBuy = round(response.beznal['756'][0].buyValue)
      bankState.ru.sberbank.chfSell = round(response.beznal['756'][0].sellValue)
      bankState.ru.sberbank.jpyBuy = round(response.beznal['392'][0].buyValue)
      bankState.ru.sberbank.jpySell = round(response.beznal['392'][0].sellValue)
      bankState.ru.sberbank.cnyBuy = round(response.beznal['156'][0].buyValue)
      bankState.ru.sberbank.cnySell = round(response.beznal['156'][0].sellValue)
      console.log(bankState.ru.sberbank)
    })
    .catch((err) => {
      console.log('sberbank err : ', err.response.statusText, err.response.status)
    })
}

const centralbankRu = () => {
  return getResponse('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      bankState.ru.centralbank.usdOnly = round(response.Valute.USD.Value)
      bankState.ru.centralbank.eurOnly = round(response.Valute.EUR.Value)
      bankState.ru.centralbank.gbpOnly = round(response.Valute.GBP.Value)
      bankState.ru.centralbank.chfOnly = round(response.Valute.CHF.Value)
      bankState.ru.centralbank.jpyOnly = round(response.Valute.JPY.Value)
      bankState.ru.centralbank.cnyOnly = round(response.Valute.CNY.Value)
      bankState.ru.centralbank.cadOnly = round(response.Valute.CAD.Value)
      bankState.ru.centralbank.sekOnly = round(response.Valute.SEK.Value)
      bankState.ru.centralbank.plnOnly = round(response.Valute.PLN.Value)
      console.log(bankState.ru.centralbank)
    })
    .catch((err) => {
      console.log('centralbank err : ', err.response.statusText, err.response.status)
    })
}

const getRussia = () => {
  getSberbankRu()
  centralbankRu()
}

export default getRussia
