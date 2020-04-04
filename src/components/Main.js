//general react imports
import React from 'react'
import PropTypes from 'prop-types'

//images to head articles
import bioPic from '../images/bioPic.png'
import autonomousLaw from '../images/deal-hacker2.jpg'

//logo carousel component
import Carousel from 'react-images'

//client logos
import zerox from '../images/client-logos/0x.png'
import abridged from '../images/client-logos/abridged.jpg'
import adobe from '../images/client-logos/adobe.png'
import applied_materials from '../images/client-logos/applied_materials.png'
import chorus from '../images/client-logos/chorus.jpg'
import consensys from '../images/client-logos/consensys.jpg'
import dell from '../images/client-logos/dell.png'
import ebay from '../images/client-logos/ebay.jpg'
import facebook from '../images/client-logos/facebook.png'
import flipboard from '../images/client-logos/flipboard.jpg'
import gilead from '../images/client-logos/gilead.jpg'
import grid from '../images/client-logos/Grid+.jpg'
import lawcoin from '../images/client-logos/lawcoin.jpg'
import metacartel from '../images/client-logos/metacartel.jpg'
import metafactory from '../images/client-logos/metafactory.jpg'
import opera from '../images/client-logos/opera.png'
import oracle from '../images/client-logos/oracle.jpg'
import riverbed from '../images/client-logos/riverbed.jpg'
import samsung from '../images/client-logos/samsung.jpg'
import sila from '../images/client-logos/sila.png'
import spankchain from '../images/client-logos/spankchain.jpg'
import TCV from '../images/client-logos/TCV.jpg'
import twilio from '../images/client-logos/twilio.png'

//emailjs to handle sending of emails on submission of contact form
import emailjs from 'emailjs-com'


const images = [{ src: zerox }, { src: abridged }, { src: adobe }, { src: applied_materials }, { src: chorus }, { src: consensys }, { src: dell }, { src: ebay }, { src: facebook }, { src: flipboard }, { src: gilead }, { src: grid }, { src: lawcoin }, { src: metacartel }, { src: metafactory }, { src: opera }, { src: oracle }, { src: riverbed }, { src: samsung }, { src: sila }, { src: spankchain }, { src: TCV }, { src: twilio }]

class Main extends React.Component {
  render() {
    let close = (
      <div
        tabIndex={0}
        role="button"
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }} onKeyDown={() => {this.props.onCloseArticle()}}
      ></div>
    )

    function sendEmail(e) {
      e.preventDefault()

      emailjs.sendForm('zerolaw_gmail', 'template_jrsZHQns', e.target, 'user_makHupFgaYsIMcKRUCl7v')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
        })
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
          <p>Gabriel Shapiro is a U.S. attorney with over a decade of experience in the structuring, negotiation and
            execution of strategic transactions for technology clients.
            He represents and advises clients in connection with: </p>
          <ul style={{ marginLeft: 20 }}>
            <li>mergers, acquisitions & joint ventures</li>
            <li>governance design & issues</li>
            <li>venture financings & crowdsales (SAFTs, stock, tokens)</li>
            <li>securities law compliance (private & public)</li>
            <li>product design & compliance for peer-to-peer technologies</li>
          </ul>
          <p>Gabriel is a partner at <a href="https://www.bsvlaw.com/">BSV Law</a>. Prior to launching his own practice, Gabriel practiced for many years in the tech M&A groups of top corporate law firms Dewey & LeBoeuf, Weil, Gotshal & Manges and Hogan Lovells.</p>
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
            Check out Gabriel's <a href="https://lex-node.github.io/sustain/projects.html">autonomous law
            research</a> and <a href="https://lex-node.github.io/sustain/cryptolaw-resources.html">autonomous law
            resources</a>, which include articles, lectures and interviews on topics such as blockchain / cryptocurrency, DAOs and
            tokenized securities.
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
            <p>Gabriel has been privileged to represent and advise some of the most innovative technology clients in their strategic transactions.</p>
            <Carousel views={images}/>
          </span>
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
