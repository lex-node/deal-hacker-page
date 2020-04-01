import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">contents &copy; Gabriel J. Shapiro</p>
      <br/>
      <p className="copyright">design/code forked from <a href="https://github.com/codebushi/gatsby-starter-dimension">codebushi</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
