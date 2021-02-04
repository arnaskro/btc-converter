import Currency from './Currency'

type Rates = {
  time: {
    updated: string
    updatedISO: string
    updateduk: string
  }
  disclaimer: string
  chartName: string
  bpi: {
    [currency: string]: Currency
  }
}

export default Rates
