import getUkraine from './location/ukraine'
<<<<<<< HEAD
import getRussia from './location/russia'
import getPoland from './location/poland'
=======
>>>>>>> 879e0df0880af72abd9c84219c142b1221432824

export const updateBanks = () => {
  console.log('Banks time ==== > ')
  getUkraine()
<<<<<<< HEAD
  getRussia()
  getPoland()
}

export const cronBanks = () => {
   updateBanks() 
  setInterval(updateBanks, 30000)
=======
}

export const cronBanks = () => {
  /* updateBanks() */
  setInterval(updateBanks, 300000)
>>>>>>> 879e0df0880af72abd9c84219c142b1221432824
}
