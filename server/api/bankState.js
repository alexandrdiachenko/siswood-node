const stateBank = {
  ua: {
    privatbank: {
      usbBuy: 11.0,
      usdSell: 18.25
    },
    monobank: {
      usbBuy: 22.0,
      usdSell: 28.25
    },
    nationalbank: {
      usbBuy: 32.0,
      usdSell: 38.25
    }
  },

  ru: {
    sberbank: {
      usbBuy: 79.9,
      usdSell: 81.11
    },
    tinkoff: {
      usbBuy: 89.9,
      usdSell: 91.11
    },
    vtbbank: {
      usbBuy: 99.9,
      usdSell: 101.11
    }
  }
}

module.exports = {
  stateBank
}
