import getUkraine from './location/ukraine'

export const updateBanks = () => {
  console.log('Banks time ==== > ')
  getUkraine()
}

export const cronBanks = () => {
  /* updateBanks() */
  setInterval(updateBanks, 300000)
}
