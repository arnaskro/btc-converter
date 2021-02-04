import { useEffect, useRef, useCallback } from 'react'
import { v1 } from 'uuid'
import { InputWrapper, Icon, Input } from './styles'
import BitcoinIcon from '../../icons/bitcoin'
import ErrorFallback from '../../components/errorFallback'
import { withErrorBoundary } from 'react-error-boundary'

interface Props {
  value: number
  onChange: Function
}

const BitcoinInput = ({ value, onChange }: Props) => {
  const id = useRef(`bitcoin-input-field-${v1()}`)
  const ref = useRef(null)
  useEffect(() => {
    const inputEl = ref.current
    if (inputEl) {
      // when the input is loaded, focus the input field by default
      inputEl.focus()
    }
  }, [ref])

  const checkIfAllowed = useCallback(({ floatValue }) => {
    // 21 million is max amount of bitcoins
    if (floatValue > 21000000 || floatValue < -21000000) return false
    return true
  }, [])

  return (
    <InputWrapper>
      <label htmlFor={id.current}>
        <Icon>
          <BitcoinIcon />
        </Icon>

        <Input
          getInputRef={el => (ref.current = el)}
          id={id.current}
          value={value}
          placeholder={'0'}
          displayType="input"
          thousandSeparator={true}
          onValueChange={values => onChange(values.floatValue)}
          allowLeadingZeros={false}
          fixedDecimalScale={false}
          decimalScale={8}
          title="Enter the amount you want to convert."
          isAllowed={checkIfAllowed}
        />
      </label>
    </InputWrapper>
  )
}

export default withErrorBoundary(BitcoinInput, {
  FallbackComponent: ErrorFallback
})
