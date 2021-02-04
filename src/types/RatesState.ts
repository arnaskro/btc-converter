import Rates from './Rates'

type RatesState = {
  loading: boolean
  loaded: boolean
  fetchedAt: Date
  error?: string
  data: Rates
}

export default RatesState
