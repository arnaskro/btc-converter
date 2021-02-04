import React from 'react'
import 'normalize.css'
import { Global } from '@emotion/react'
import SEO from '../components/seo'
import CurrentTime from '../components/currentTime'
import {
  globalStyles,
  Header,
  Wrapper,
  Content,
  Disclaimer,
  Copyright,
  SkipToContent
} from '../styles/layout'
import { useStaticQuery, graphql } from 'gatsby'

interface LayoutProps {
  title?: string
  children: any
}

const Layout = ({ children, title }: LayoutProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            disclaimer
          }
        }
      }
    `
  )

  return (
    <>
      <SEO title={title} />
      <Global styles={globalStyles} />
      <Wrapper>
        <SkipToContent href="#main" id="skip-link">Skip to content</SkipToContent>
      </Wrapper>
      <div>
        <Header>
          <CurrentTime />
          <Wrapper>
            <h1>
              {title || 'Bitcoin Converter'}
              <span>.</span>
            </h1>
            <p>{site.siteMetadata.description}</p>
          </Wrapper>
        </Header>
        <Wrapper>
          <main id="main" tabIndex="-1">
            <Content>{children}</Content>
            <footer>
              <Disclaimer>Disclaimer: {site.siteMetadata.disclaimer}</Disclaimer>
              <Copyright>© {new Date().getFullYear()}, Arnas Kromelis</Copyright>
            </footer>
          </main>
        </Wrapper>
      </div>
    </>
  )
}

export default Layout
