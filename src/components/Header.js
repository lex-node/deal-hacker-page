import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-eye"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gabriel J. Shapiro</h1>
        <h2>Deal Ninja</h2>
        <h3>
          M&A | venture | governance | crypto | infosec
        </h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('gabriel')
            }}
          >
            Gabriel
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('autonomousLaw')
            }}
          >
            Autonomous Law
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('engagements')
            }}
          >
            Engagements
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
