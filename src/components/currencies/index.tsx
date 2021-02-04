import { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { Item, Description, Value, List, Section, NoCurrencies, SectionHeader } from './styles'
import AddCurrency from '../../components/addCurrency/index'
import ErrorFallback from '../../components/errorFallback'
import { withErrorBoundary } from 'react-error-boundary'
import { decode } from 'html-entities'

const Currencies = ({ data, options, onAdd, onRemove, input }) => {
  const list = data.map((key, i) => {
    const { code, description, rate_float, symbol } = options[key]
    return (
      <Item key={`${i}-${key}`}>
        <article>
          <h3>{code}</h3>
          <Description>{description}</Description>
          <Value>
            <NumberFormat
              prefix={decode(symbol)}
              displayType="text"
              thousandSeparator={true}
              value={isNaN(input) ? 0 : input * rate_float}
              decimalScale={2}
              fixedDecimalScale
            />
          </Value>
          <button onClick={() => onRemove(key)}>Remove</button>
        </article>
      </Item>
    )
  })

  return (
    <Section>
      <SectionHeader>
        <h2>Currencies</h2>
        <AddCurrency
          onAdd={onAdd}
          options={Object.keys(options)
            .filter(key => !data.includes(key))
            .map(key => options[key])}
        />
      </SectionHeader>
      {list.length ? (
        <List>{list}</List>
      ) : (
        <NoCurrencies>There are no currencies added.</NoCurrencies>
      )}
    </Section>
  )
}

export default withErrorBoundary(Currencies, {
  FallbackComponent: ErrorFallback
})
