import state from './bankState'

export default (country) => {
  console.log(country)
  switch (country.toUpperCase()) {
    case 'UA':
      return state.ua
    case 'RU':
      return state.ru
    default:
      return state.ua
  }
}
