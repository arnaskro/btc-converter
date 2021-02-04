import NumberFormat from 'react-number-format'
import styled from '@emotion/styled'
import sizes from '../../styles/sizes'

export const InputWrapper = styled.div``
export const Icon = styled.span`
  position: absolute;
  margin: 0.75rem;

  svg {
    width: 3rem;
    height: 3rem;

    ${sizes.desktop`
        width: 4rem;
        height: 4rem;
    `}
  }
`

export const Input = styled(NumberFormat)`
  text-align: right;
  width: 100%;
  background: var(--color-input-bg);
  padding: 1rem;
  padding-left: 5.5rem;
  padding-right: 2rem;
  font-size: 2rem;
  display: inline-block;
  border: 1px solid transparent;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10rem;
  outline: 0;
  transition: all 200ms;
  -webkit-appearance: none;

  ${sizes.desktop`
    width: 75%;
    max-width: 42rem;
    font-size: 3rem;
  `}

  &:focus {
    border: 1px solid var(--color-primary);
  }

  &:after {
    content: '';
    border: 2px solid var(--color-primary);
  }
`
