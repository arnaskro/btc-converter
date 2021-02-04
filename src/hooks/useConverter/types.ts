import RatesState from '../../types/RatesState'

export const storageKeys = {
  RATES: 'BTC_RATES',
  CURRENCIES: 'CURRENCIES'
}

export const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CURRENCY_ADD: 'CURRENCY_ADD',
  CURRENCY_REMOVE: 'CURRENCY_REMOVE',
  CURRENCY_LOAD: 'CURRENCY_LOAD',
  RATES_LOADING: 'RATES_LOADING',
  RATES_LOADED: 'RATES_LOADED',
  RATES_ERROR: 'RATES_ERROR'
}

export type StateProps = {
  inputValue: number
  currencies: string[]
  rates: RatesState
}

export interface Actions {
  onAddCurrency: (key: string) => void
  onRemoveCurrency: (key: string) => void
  onInputChange: (payload: number) => void
}
