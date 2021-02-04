import styled from '@emotion/styled'
import sizes from '../../styles/sizes'

export const Item = styled.li`
  width: 100%;
  display: inline-block;
  position: relative;
  padding: 0.5rem 1rem 1rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 1px solid var(--color-card-border);
  box-shadow: 0 ​0 1px rgba(0, 0, 0, 0.2);
  background: var(--color-card-bg);

  ${sizes.desktop`
    width: calc(100% / 3 - 1rem);
    margin: 0.5rem;
  `}

  button {
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: var(--color-text);
    background: transparent;
    border-radius: 10rem;
    /* opacity: 0.5; */
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 0.2rem 1rem;
    font-size: 0.8rem;
    transition: all 100ms;

    &:focus {
      opacity: 1;
      box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
      background: var(--color-btn-danger-bg);
      color: var(--color-btn-danger-text);
    }

    @media (pointer: fine) {
      &:hover {
        opacity: 1;
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
        background: var(--color-btn-danger-bg);
        color: var(--color-btn-danger-text);
      }
    }
  }

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-title);
    margin: 0;
    margin-bottom: 0;
  }
`

export const Description = styled.p`
  font-size: 0.8rem;
  color: var(--color-text);
  margin-top: 0;
  margin-bottom: 0;
`
export const Value = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  max-width: 100%;
  word-break: break-all;
  margin-bottom: 0;
`

export const List = styled.ul`
  margin: 0;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  list-style-type: none;
  flex-direction: column;

  ${sizes.desktop`
    flex-direction: row;
    margin: 0 -0.5rem;
  `}
`

export const Section = styled.section`
  margin-top: 2rem;

  ${sizes.desktop`
    margin-top: 5rem;
  `}
`

export const NoCurrencies = styled.div`
  width: 100%;
  text-align: center;
  padding: 3.5rem 2rem;
  border-radius: 4px;
  border: 2px dashed var(--color-card-border);
  color: var(--color-text);
  font-size: 1rem;
  background: var(--color-card-bg);
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
