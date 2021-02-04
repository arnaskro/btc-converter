import React, { useEffect, useState } from 'react'
import 'normalize.css'
import styled from '@emotion/styled'
import SyncIcon from '../icons/sync'
import dayjs from 'dayjs'
import RatesState from '../types/RatesState'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/errorFallback'

const AnimatedIcon = styled.span`
  position: absolute;
  margin-left: 0.5rem;
  opacity: 0.5;
  animation: rotation 1s infinite linear;
  svg {
    width: 1rem;
    height: 1rem;
  }
`

const P = styled.p`
  color: var(--color-text);
  font-size: 0.8rem;
`

const Error = styled.p`
  color: var(--color-text-danger);
`

interface Props {
  state: RatesState
}

const LastUpdateMessage = ({ state }: Props) => {
  const [diff, setDiff] = useState(null)

  useEffect(() => {
    if (state.data) {
      const getDiff = () => {
        const updatedTime = dayjs(state.fetchedAt)
        const currentTime = dayjs()
        const diff = currentTime.diff(updatedTime, 'seconds')
        if (diff >= 60) {
          setDiff(`at ${updatedTime.format('YYYY-MM-DD HH:mm:ss')}`)
        } else {
          setDiff(`${diff} seconds ago`)
        }
      }
      getDiff()
      const tick = setInterval(getDiff, 1000)
      return () => clearInterval(tick)
    }
  }, [state.data])

  if (state.loading) {
    return (
      <P>
        Refreshing
        <AnimatedIcon>
          <SyncIcon />
        </AnimatedIcon>
      </P>
    )
  } else if (state.error) {
    return <Error>{state.error}</Error>
  } else {
    return <P>Exchange rates were last updated {diff}</P>
  }
}

export default withErrorBoundary(LastUpdateMessage, {
  FallbackComponent: ErrorFallback
})
