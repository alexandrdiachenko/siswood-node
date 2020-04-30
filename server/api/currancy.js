import state from './bankState'

const currancy = (country) => {
  switch (country.toUpperCase()) {
    case 'UA':
      return state.stateBank.ua
    case 'RU':
      return state.stateBank.ru
    default:
      return state.stateBank.ua
  }
}

module.exports = {
  currancy
}
