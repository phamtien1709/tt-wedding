import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100%;
  max-width: 100%;
  padding: 1rem 0 .4rem 0;
  text-align: center;
  .copyright,
  .powerby,
  .icp {
    letter-spacing: 2px;
    font-size: 0.14rem;
    opacity: 0.75;
    margin-bottom: 0.1rem;
    text-transform: uppercase;
    color: #ccc;
    a {
      margin: 0 0.1rem;
    }
  }
`

const Footer = (props) => (
  <Wrapper style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      created by <a href="https://fb.com/kisskiss1709" target="_blank">Tien Pham</a> with ❤️ &nbsp;&copy; 2022 - {new Date().getFullYear()}
    </p>
    <p className="powerby">
      Powerd by
      <a target="_blank" href="https://www.gatsbyjs.org/">
        Gatsby.js
      </a>
    </p>
  </Wrapper>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
