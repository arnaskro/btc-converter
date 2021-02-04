import React from 'react'
import Layout from '../components/layout'
import BitcoinInput from '../components/bitcoinInput/index'
import Currencies from '../components/currencies/index'
import LastUpdateMessage from '../components/lastUpdateMessage'
import useConverter from '../hooks/useConverter/index'

const IndexPage = () => {
  const [state, actions] = useConverter()
  return (
    <Layout>
      <BitcoinInput value={state.inputValue} onChange={actions.onInputChange} />
      <LastUpdateMessage state={state.rates} />
      <Currencies
        input={state.inputValue}
        data={state.currencies}
        options={state.rates.data.bpi}
        onAdd={actions.onAddCurrency}
        onRemove={actions.onRemoveCurrency}
      />
    </Layout>
  )
}

export default IndexPage
