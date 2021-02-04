import styled from '@emotion/styled'

export const AddCurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;

  button {
    cursor: pointer;
    padding: 0.5rem 0.625rem;
    color: #000;
    white-space: nowrap;
    border: 2px solid transparent;
    border-radius: 3px;
    color: white;
    transition: all 50ms;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    opacity: 1;
    outline: 0;
    background-color: var(--color-primary);

    &:hover,
    &:focus {
      background-color: var(--color-primary-hover);
    }

    &:focus {
      border-color: var(--color-focus);
    }

    &:after {
      content: '';
      display: inline-flex;
      align-self: center;
      margin-left: 0.625rem;
      border-top: 0.35rem solid;
      border-bottom: 0;
      border-right: 0.25em solid transparent;
      border-left: 0.25rem solid transparent;
      top: -2px;
      position: relative;
    }

    &:disabled,
    &[disabled] {
      user-select: none;
      pointer-events: none;
      box-shadow: 0 0 0 transparent;
      background-color: var(--color-btn-disabled-bg);
      color: var(--color-btn-disabled-text);
    }

    &.open {
      background-color: var(--color-primary-hover);
    }
  }
`

export const Options = styled.ul`
  display: none;
  opacity: 0;
  max-height: 0px;
  transition: all 100ms;
  overflow: hidden;
  position: absolute;
  top: 3.25rem;
  right: 0;
  z-index: 1000;
  min-width: 10rem;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  padding: 0.3rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  li {
    cursor: pointer;
    padding: 0 0.5rem;
    transition: all 100ms;
    background: white;
    padding: 0.5rem;
    white-space: nowrap;
    text-align: left;
    color: var(--color-text);
    border-radius: 4px;

    &:hover,
    &:focus {
      background: #edf6f7;
      a {
        color: var(--color-title);
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 2px;
    }

    a {
      text-decoration: none;
      color: var(--color-text);
    }
  }

  &.open {
    display: block;
    opacity: 1;
    max-height: 250px;

    li {
      padding: 0.5rem;
    }
  }
`
