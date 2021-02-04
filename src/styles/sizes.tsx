import { css } from '@emotion/react'

const SIZES = {
  desktop: 'min-width: 62rem'
}

export const media = Object.keys(SIZES).reduce((all, key) => {
  all[key] = (...args) =>
    css`
      @media (${SIZES[key]}) {
        ${css(...args)}
      }
    `
  return all
}, {}) as { [key in keyof typeof SIZES]: typeof css }

export default media
