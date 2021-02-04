import { useCallback, useEffect, useMemo, useReducer } from 'react'
import axios from 'axios'
import { Actions, StateProps, actionTypes, storageKeys } from './types'
import { reducer, createInitialState } from './reducer'
import { graphql, useStaticQuery } from 'gatsby'

const useConverter = (): [StateProps, Actions] => {
  const { apiResult } = useStaticQuery(
    graphql`
      query {
        apiResult {
          data {
            chartName
            disclaimer
            time {
              updatedISO
              updated
              updateduk
            }
            bpi {
              USD {
                symbol
                rate_float
                rate
                description
                code
              }
              GBP {
                symbol
                rate_float
                rate
                description
                code
              }
              EUR {
                rate_float
                symbol
                rate
                description
                code
              }
            }
          }
        }
      }
    `
  )

  const [state, dispatch] = useReducer(reducer, createInitialState(apiResult.data))

  // save rates and persist in local storage
  const saveRates = useCallback(data => {
    dispatch({ type: actionTypes.RATES_LOADED, payload: data })
    if (localStorage) {
      localStorage.setItem(storageKeys.RATES, JSON.stringify(data))
    }
  }, [])

  const fetchRates = useCallback(() => {
    dispatch({ type: actionTypes.RATES_LOADING, payload: true })
    axios
      .get(process.env.GATSBY_COINDESK_API_ENDPOINT)
      .then(res => saveRates(res.data))
      .catch(err => dispatch({ type: actionTypes.RATES_ERROR, payload: err.message }))
  }, [saveRates, dispatch])

  useEffect(() => {
    // initial load (fetch rates and saved currencies from local storage)
    if (localStorage) {
      const savedRates = localStorage.getItem(storageKeys.RATES)
      if (savedRates) {
        saveRates(JSON.parse(savedRates))
      }

      const savedCurrencies = localStorage.getItem(storageKeys.CURRENCIES)
      if (savedCurrencies) {
        dispatch({ type: actionTypes.CURRENCY_LOAD, payload: JSON.parse(savedCurrencies) })
      }
    }

    // try to get new rates as soon as possible
    fetchRates()

    // set interval to fetch rates every minute
    const interval = setInterval(fetchRates, 60000)
    return () => clearInterval(interval)
  }, [saveRates, fetchRates, dispatch])

  // Persist selected currencies in local storage
  useEffect(() => {
    if (localStorage) {
      localStorage.setItem(storageKeys.CURRENCIES, JSON.stringify(state.currencies))
    }
  }, [state.currencies])

  // use memo to skip actions rerendering
  const actions: Actions = useMemo(
    () => ({
      onAddCurrency: (key: string) => dispatch({ type: actionTypes.CURRENCY_ADD, payload: key }),
      onRemoveCurrency: (key: string) =>
        dispatch({ type: actionTypes.CURRENCY_REMOVE, payload: key }),
      onInputChange: (payload: number) => dispatch({ type: actionTypes.INPUT_CHANGE, payload })
    }),
    [dispatch]
  )

  return [state, actions]
}

export default useConverter
