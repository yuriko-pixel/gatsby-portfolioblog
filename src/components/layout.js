import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from 'styled-components'
import "./layout.css"

import Nav from '../components/nav'
import Footer from '../components/footer'

const Wrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Nav/>
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
