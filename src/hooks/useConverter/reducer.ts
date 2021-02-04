import { StateProps, Rates, actionTypes } from './types'

export const createInitialState: StateProps = (data: Rates) => ({
  inputValue: null,
  currencies: ['USD'],
  rates: {
    loading: false,
    loaded: false,
    fetchedAt: new Date(),
    error: null,
    data
  }
})

export const reducer = (state, { type, payload }): StateProps => {
  switch (type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        inputValue: payload
      }
    case actionTypes.RATES_LOADED:
      return {
        ...state,
        rates: {
          loaded: true,
          loading: false,
          error: null,
          fetchedAt: new Date(),
          data: payload
        }
      }
    case actionTypes.RATES_LOADING:
      return {
        ...state,
        rates: {
          ...state.rates,
          loading: payload
        }
      }
    case actionTypes.RATES_ERROR:
      return {
        ...state,
        rates: {
          ...state.rates,
          loading: false,
          error: payload
        }
      }
    case actionTypes.CURRENCY_REMOVE:
      return {
        ...state,
        currencies: state.currencies.filter(key => key !== payload)
      }
    case actionTypes.CURRENCY_ADD:
      return {
        ...state,
        currencies: [...state.currencies, payload]
      }
    case actionTypes.CURRENCY_LOAD:
      return {
        ...state,
        currencies: payload
      }
    default:
      return state
  }
}
