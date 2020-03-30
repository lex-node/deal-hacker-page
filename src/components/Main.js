import PropTypes from 'prop-types'
import React from 'react'
import bioPic from '../images/bioPic.png'
import autonomousLaw from '../images/autonomousLaw2.jpg'
import engagements from '../images/research.jpg';
import emailjs from 'emailjs-com';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm("zerolaw_gmail", "template_jrsZHQns", e.target, "user_makHupFgaYsIMcKRUCl7v")
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="gabriel"
          className={`${this.props.article === 'gabriel' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gabriel</h2>
          <span className="image main">
            <img src={bioPic} alt=""/>
          </span>
          <p>
            Gabriel Shapiro is a U.S. attorney with over a decade of experience in the structuring, negotiation and
            execution of strategic transactions for blue-chip technology clients.
            He represents and advises clients in connection with: </p>
          <ul style={{ marginLeft: 30 }}>
            <li>mergers, acquisitions & joint ventures</li>
            <li>governance design & issues</li>
            <li>venture financings & crowdsales (SAFTs, stock, tokens)</li>
            <li>securities law compliance (private & public)</li>
            <li>product design & compliance for peer-to-peer technologies</li>
          </ul>
          <p>Prior to launching his own practice, Gabriel practiced for seven years in the tech M&A groups of top Wall St. firms Dewey & LeBoeuf, Weil, Gotshal & Manges and Hogan Lovells.</p>
          <p>Follow the links on the main page for more on Gabriel's experience and thought leadership, as well as links
            to interesting general resources on his areas of expertise.</p>
          {close}
        </article>

        <article
          id="autonomousLaw"
          className={`${this.props.article === 'autonomousLaw' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Autonomous Law</h2>
          <span className="image main">
            <img src={autonomousLaw} alt=""/>
          </span>
          <p>
          </p>
          <p>
            Autonomous law combines traditional legal structures, peer-to-peer technologies and incentive-based thinking
            to help businesses, creators and entrepreneurs self-organize, transact and unlock synergies in powerful
            ways.
            <br/>
            <br/>
            Check out Gabriel's <a href="https://lex-node.github.io/sustain/projects.html">autonomous law research</a>,
            including articles, lectures and interviews on topics such as blockchain / cryptocurrency, DAOs and
            tokenized securities.
            <br/>
            <br/>
            Feel free to use Gabriel's <a href="https://lex-node.github.io/sustain/cryptolaw-resources.html">personal
            collection of autonomous law resources</a>, including helpful summaries and annotations of important
            third-party works.
          </p>
          {close}
        </article>

        <article
          id="engagements"
          className={`${this.props.article === 'engagements' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Engagements</h2>
          <span className="image main">
            <img src={engagements} alt=""/>
          </span>
          <p>

          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#" onSubmit={sendEmail}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="user_name" id="name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="user_email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send" className="special"/>
              </li>
              <li>
                <input type="reset" value="Reset"/>
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/lex_node"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lex-node"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-shapiro-29616651"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
