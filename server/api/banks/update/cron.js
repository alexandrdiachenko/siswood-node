import getUkraine from './location/ukraine'

export const updateBanks = () => {
  getUkraine()
  console.log('Banks time ==== > ')
}

export const cronBanks = () => {
  /* updateBanks() */
  setInterval(updateBanks, 120000)
}
