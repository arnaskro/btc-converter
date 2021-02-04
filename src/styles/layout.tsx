import styled from '@emotion/styled'
import { css } from '@emotion/react'
import sizes from '../styles/sizes'

export const globalStyles = css`
  :root {
    --color-primary: #388076;
    --color-primary-hover: #009194;
    --color-header-background: #dbf1f2;
    --color-secondary: #95b9bb;
    --width-layout: 64rem;
    --color-title: #0a3e40;
    --color-text: #426266;
    --color-card-bg: #faffff;
    --color-card-border: #dbf1f2;
    --color-input-bg: white;
    --color-text-danger: #c56f6f;
    --color-btn-danger-bg: #c56f6f;
    --color-btn-danger-text: white;
    --color-btn-disabled-bg: #ecf2f2;
    --color-btn-disabled-text: #bdbebe;
    --color-focus: #f7931a;
  }

  * {
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  a,
  button {
    &:focus {
      border-color: var(--color-focus);
    }
  }

  main {
    outline: none;
  }

  html,
  body {
    font-size: 0.9rem;
    overflow-x: hidden;

    ${sizes.desktop`
      font-size: 1rem;
    `}
  }

  h1,
  h2 {
    position: relative;
    font-weight: bold;
    color: var(--color-title);
    margin-bottom: 1rem;
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
`

export const Wrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: var(--width-layout);
  margin: 0 auto;
`

export const SkipToContent = styled.a`
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  height: 2rem;
  left: 50%;
  padding: 0.5rem;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index: 1000;

  &:focus {
    transform: translateY(0%);
    border: 2px solid var(--color-focus);
    outline: 0;
  }
`

export const Header = styled.header`
  position: relative;
  margin-bottom: 2.5rem;

  ${sizes.desktop`
    margin-bottom: 4rem;
  `}

  h1 {
    margin-top: 1.5rem;
    font-size: 2.5rem;

    span {
      color: var(--color-primary);
    }

    ${sizes.desktop`
      margin-top: 5rem;
      font-size: 3rem;
    `}
  }

  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-header-background);
    top: 0;
    left: 0;
    right: 0;
    height: 175%;
    transform: skewY(-5deg);
    transform-origin: top left;
    overflow: hidden;
    z-index: -1;
  }

  p {
    color: var(--color-text);
  }
`

export const Content = styled.div`
  margin-bottom: 2.5rem;
`

export const Disclaimer = styled.p`
  color: var(--color-text);
  font-size: 0.8rem;
`
export const Copyright = styled.p``
