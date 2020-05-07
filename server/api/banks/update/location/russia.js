import { round, getResponse } from '../logic'
import bankState from '../../bankState'

const getSberbankRu = () => {
  return getResponse(
    'https://www.sberbank.ru/portalserver/proxy/?pipe=shortCachePipe&url=http://localhost/rates-web/rateService/rate/current%3FregionId%3D55%26currencyCode=826%26currencyCode=756%26currencyCode=392%26currencyCode=156%26currencyCode=840%26currencyCode=978%26rateCategory%3Dbeznal'
  )
    .then((response) => {
      bankState.ru[0].currancy[0].USD = [
        round(response.beznal['840'][0].buyValue),
        round(response.beznal['840'][0].sellValue)
      ]
      bankState.ru[0].currancy[1].EUR = [
        round(response.beznal['978'][0].buyValue),
        round(response.beznal['978'][0].sellValue)
      ]
      bankState.ru[0].currancy[2].GBP = [
        round(response.beznal['826'][0].buyValue),
        round(response.beznal['826'][0].sellValue)
      ]
      bankState.ru[0].currancy[3].CHF = [
        round(response.beznal['756'][0].buyValue),
        round(response.beznal['756'][0].sellValue)
      ]
      bankState.ru[0].currancy[4].JPY = [
        round(response.beznal['392'][0].buyValue),
        round(response.beznal['392'][0].sellValue)
      ]
      bankState.ru[0].currancy[5].CNY = [
        round(response.beznal['156'][0].buyValue),
        round(response.beznal['156'][0].sellValue)
      ]
    })
    .catch((err) => {
      console.log('sberbank err : ', err.response.statusText, err.response.status)
    })
}

const centralbankRu = () => {
  return getResponse('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      bankState.ru[1].currancy[0].USD = [round(response.Valute.USD.Value)]
      bankState.ru[1].currancy[1].EUR = [round(response.Valute.EUR.Value)]
      bankState.ru[1].currancy[2].GBP = [round(response.Valute.GBP.Value)]
      bankState.ru[1].currancy[3].CHF = [round(response.Valute.CHF.Value)]
      bankState.ru[1].currancy[4].JPY = [round(response.Valute.JPY.Value)]
      bankState.ru[1].currancy[5].CNY = [round(response.Valute.CNY.Value)]
      bankState.ru[1].currancy[6].CAD = [round(response.Valute.CAD.Value)]
      bankState.ru[1].currancy[7].SEK = [round(response.Valute.SEK.Value)]
      bankState.ru[1].currancy[8].PLN = [round(response.Valute.PLN.Value)]
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
