import { useEffect, useRef, useState } from 'react'
import { AddCurrencyWrapper, Options } from './styles'
import Currency from '../../types/Currency'

interface Props {
  options: Currency[]
  onAdd: (key: string) => void
}

const AddCurrency = ({ options, onAdd }: Props) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const handler = event => {
        if (!ref.current.contains(event.target)) {
          setOpen(false)
        }
      }

      window.addEventListener('click', handler)
      return () => window.removeEventListener('click', handler)
    }
  }, [ref])

  const isDisabled = !Boolean(options.length)

  return (
    <AddCurrencyWrapper ref={ref} className={open && 'open'}>
      <button
        aria-haspopup="true"
        aria-expanded={open ? 'true' : 'false'}
        type="button"
        disabled={isDisabled}
        onClick={() => !isDisabled && setOpen(!open)}
      >
        Add Currency
      </button>
      {!isDisabled && (
        <Options className={open && 'open'} role="menu" aria-hidden={isDisabled ? 'true' : 'false'}>
          {options.map(({ code, description }) => (
            <li key={code} onClick={() => onAdd(code)}>
              <a href="#" role="menuitem">{`${code} - ${description}`}</a>
            </li>
          ))}
        </Options>
      )}
    </AddCurrencyWrapper>
  )
}

export default AddCurrency
