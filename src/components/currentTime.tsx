import { memo, useState, useEffect } from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { Wrapper } from '../styles/layout'

const CurrentTimeWrapper = styled.div`
  padding: 0.5rem 0;
  font-size: 0.9rem;
  background: var(--color-secondary);
  color: white;
`

const getCurrenTime = () => dayjs().format('dddd, MMMM D, YYYY h:mm:ss A')

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrenTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrenTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <CurrentTimeWrapper>
      <Wrapper>{currentTime}</Wrapper>
    </CurrentTimeWrapper>
  )
}

export default memo(CurrentTime)
