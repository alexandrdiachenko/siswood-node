import axios from 'axios'

export const round = (it) => {
  const number = parseFloat(it)
  if (number >= 0 && number < 10) return number.toFixed(3)
  if (number >= 10 && number < 100) return number.toFixed(2)
  if (number >= 100 && number < 1000) return number.toFixed(1)
  if (number >= 1000) return number.toFixed(0)
  return 0
}

export const getResponse = (url) => axios.get(url).then((response) => response.data)
