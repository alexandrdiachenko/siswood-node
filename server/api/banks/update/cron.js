import getUkraine from './location/ukraine'
import getRussia from './location/russia'
import getPoland from './location/poland'

export const updateBanks = () => {
  console.log('Banks time ==== > ')
  getUkraine()
  getRussia()
  getPoland()
}

export const cronBanks = () => {
   updateBanks() 
  setInterval(updateBanks, 30000)
}
