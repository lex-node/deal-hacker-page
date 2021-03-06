import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Footer from '../components/Footer'


const Research = () => {
  return (
    <Layout>
      <div className={`body`}>
        <div id="wrapper">
          <Link to="/">Go back to the homepage</Link>
          <h1 className="major" style={{ color: `#1ec503`, margin: `2%` }}>Autonomous Law Research</h1>
          <p style={{ margin: `1%`, color: `` }}>My autonomous law research focuses on the intersection of peer-to-peer
            decentralization technologies and U.S. corporate, securities and contract law.</p>
          <div style={{
            borderColor: `#ff2a6d`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            margin: `1%`,
            /*marginRight: `15%`,*/
            padding: `2%`,
            minWidth: `100%`,
          }}>
            <h3 style={{ color: `#1ec503`, marginBottom: `1%` }}>Blockchain Tokens as Shares of Network Equity</h3>
            <p style={{ marginLeft: `5%`, marginTop: `1%`, marginBottom: '1%' }}>Blockchain network tokens are not
              primarily products, software licenses or currencies
              (though they may secondarily have such functions). They are shares of 'network equity.' Securities laws
              may
              apply to them until the ecosystem has become sufficiently
              decentralized. Sufficient decentralization occurs when the tokens no longer represent
              investment contracts and no single party or group of affiliated parties controls
              the network equity or means of block production on the network</p>
            <ul style={{ marginLeft: `5%`, marginBottom: `1%` }}>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://medium.com/@lex_node/sec-v-telegram-three-deeper-takeaways-423b197f76d6">
                SEC v. Telegram - Three Deeper Takeaways</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://medium.com/@lex_node/defining-decentralization-for-law-58ca54e18b2a">
                Defining Decentralization for Law</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://www.theblockcrypto.com/post/55985/an-open-letter-to-sec-commissioner-peirce-on-token-safe-harbors">An
                Open Letter
                to SEC Commissioner Peirce On Token Safe Harbors</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://medium.com/coinmonks/size-does-matter-part-1-9f83b130a451">Size
                Does Matter: A Philosophy of Securities Laws for Tokenized
                Networks Part
                1</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://medium.com/coinmonks/size-does-matter-part-2-fbcb20671b53">Size
                Does Matter: A Philosophy of Securities Laws for Tokenized
                Networks Part
                2</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://medium.com/coinmonks/size-does-matter-part-3-b378244df7d5">Size
                Does Matter: A Philosophy of Securities Laws for Tokenized
                Networks Part
                3</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://medium.com/coinmonks/size-does-matter-part-4-e66e2a242140/">Size
                Does Matter: A Philosophy of Securities Laws for Tokenized
                Networks Part
                4</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a
                  href="https://medium.com/@lex_node/securities-compliance-paths-for-blockchain-projects-9f783d85a4aa?source=your_stories_page">Securities
                  Compliance Paths for Blockchain Projects</a></li>
            </ul>
          </div>

          <div style={{
            borderColor: `#ff2a6d`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            margin: `1%`,
            /*marginRight: `15%`,*/
            padding: `2%`,
            minWidth: `100%`,
          }}>
            <h3 style={{ color: `#1ec503`, marginBottom: `1%` }}>Tokens as Securities Certificates</h3>
            <p style={{ marginLeft: `5%`, marginTop: `1%`, marginBottom: '1%' }}>Tokens on public, permissionless
              blockchain networks function as transferable instruments
              ('certificates') representing traditional and decentralized securities.</p>
            <ul style={{ marginLeft: `5%`, marginBottom: `1%` }}>
              <li style={{ color: `#a0ffe3` }}><a href="https://gabrielshapiro.wordpress.com/2018/10/28/2/">Tokenizing
                Corporate Capital Stock: Motivations and Potential Implementations</a></li>
              <li style={{ color: `#a0ffe3` }}><a href="https://www.wyoleg.gov/Legislation/2019/HB0185">Amendments to
                Wyoming's
                Corporations Code</a>, authorizing Wyoming corporations to deploy tokenized stock
                certificates. I advised and assisted the Wyoming Blockchain Task Force on the
                drafting.
              </li>
              <li style={{ color: `#a0ffe3` }}>The <a href="https://github.com/zerolawtech/ZAP-Tech">ZeroLaw
                Org-Augmentation Protocol</a>, which implements a tokenized stock certificate system
                on Ethereum
              </li>
            </ul>
          </div>

          <div style={{
            borderColor: `#ff2a6d`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            margin: `1%`,
            /*marginRight: `15%`,*/
            padding: `2%`,
            minWidth: `100%`,
          }}>
            <h3 style={{ color: `#1ec503`, marginBottom: `1%` }}>Qualified Code Deference for Legal Agreements</h3>
            <p style={{ marginLeft: `5%`, marginTop: `1%`, marginBottom: '1%' }}>Smart contracts deployed on public
              blockchain networks should be combined with
              natural-language legal contracts under a synergistic "qualified code deference" methodology. This
              will enable parties to agree to abide by the results of smart contracts except in unusual
              circumstances</p>
            <ul style={{ marginLeft: `5%`, marginBottom: `1%` }}>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://github.com/metacartel/MCV/blob/master/Legal/Grimoire%20and%20Exhibits/MCV-Grimoire-Final-All-Exhihbits.pdf">MetaCartel
                Ventures Grimoire (Delaware LLC Wrapper for MCV DAO)</a></li>
              <li style={{ color: `#a0ffe3` }}><a
                href="https://github.com/metacartel/MCV/blob/master/MCV-Whitepaper.md">MetaCartel
                Ventures Whitepaper</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a
                  href="https://github.com/lex-node/SCoDA-Simple-Code-Deference-Agreement-/blob/master/DAO%20Charter%20with%20Qualified%20Code%20Deference.md">Model
                  DAO Charter for Unincorporated Associations</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a href="https://github.com/lex-node/SCoDA-Simple-Code-Deference-Agreement-/blob/master/SCoDA%20v.3.md">Simple
                  Code Deference Agreement</a></li>
              <li style={{ color: `#a0ffe3` }}><a href="https://www.youtube.com/watch?v=hzbMPLxiht4">Drafting Wet
                Contracts
                in a
                Smart Contract World (Video)</a></li>
              <li style={{ color: `#a0ffe3` }}><a href="https://www.youtube.com/watch?v=2eS5g4ttQFs&t=1164s">Black-Belt
                Blockchain
                Drafting Jiu Jitsu (Video)</a></li>
            </ul>
          </div>

          <div style={{
            borderColor: `#ff2a6d`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            margin: `1%`,
            /*marginRight: `15%`,*/
            padding: `2%`,
            minWidth: `100%`,
          }}>
            <h3 style={{ color: `#1ec503`, marginBottom: `1%` }}>Blockchain Governance</h3>
            <p style={{ marginLeft: `5%`, marginTop: `1%`, marginBottom: '1%' }}>Blockchain governance is best
              understood through the lens of <a
                href="https://twitter.com/nickszabo4/status/1009996445280169985?lang=en">"Szabo's Governance
                Trilemma"</a>. According to Szabo, blockchain governance generally takes one of three forms--'ruthlessly
              minimized,' 'lord of the flies' or 'lawyers'. Ruthlessly minimized governance, sometimes described as
              following "Szabo's Law", is the most robust against certain forms of social capture. However, when
              minimized governance is not desired or possible, legalistic governance is
              preferable to lord-of-the-flies governance. If a network will be subject to frequent hardforks
              which adversely affect minorities, due process is required and legalistic governance becomes
              particularly important.</p>
            <ul style={{ marginLeft: `5%`, marginBottom: `1%` }}>
              <li style={{ color: `#a0ffe3` }}>
                <a
                  href="https://medium.com/coinmonks/in-defense-of-szabos-law-for-a-mostly-non-legal-crypto-system-8f1ce2b364a6">In
                  Defense of Szabo's Law, For a (Mostly) Non-Legal Crypto System</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a
                  href="https://medium.com/@lex_node/supplemental-rebuttal-to-angela-walchs-views-on-software-devs-as-fiduciaries-f886f2b47ffd">Supplemental
                  Rebuttal to Angela Walch's Views on Software Devs as Fiduciaries</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a href="https://zips.z.cash/zip-1007">ZCash Improvement Proposal (ZIP) 1007:
                  Enforce Development Fund Commitments with a Legal Charter</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a href="https://forum.zcashcommunity.com/t/major-grants-committee/35871/111?u=lex_node">Follow-Up
                  to ZIP 1007:
                  Governance Perspectives and Possibility of Creating ZCash-Specific Private Regulatory
                  Entity</a></li>
            </ul>
          </div>

          <div style={{
            borderColor: `#ff2a6d`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            margin: `1%`,
            /*marginRight: `15%`,*/
            padding: `2%`,
            minWidth: `100%`,
          }}>
            <h3 style={{ color: `#1ec503`, marginBottom: `1%` }}>Podcast & Event Appearances</h3>
            <p style={{ marginLeft: `5%`, marginTop: `1%`, marginBottom: '1%' }}> I have made appearances at various
              events and on podcasts.</p>
            <ul style={{ marginLeft: `5%`, marginBottom: `1%` }}>
              <li style={{ color: `#a0ffe3` }}>
                <a href="https://www.youtube.com/watch?v=S-U38LIslVE">Epicenter #328: Gabriel Shapiro - A Philosophy of
                  Securities Laws for Tokenized Networks</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a href="https://www.youtube.com/watch?v=MQqGC3HTxWQ">HODLCast Ep. 115 with Atty. Gabriel Shapiro on The
                  Bright LIne Test for Sufficient Deentralization</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a href="https://www.buzzsprout.com/314447/2601559">Security Token Stories Episode
                  #14 - "DAOs, Tokenized Securities, and Sufficient Decentralization"</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a
                  href="https://anchor.fm/wizardofdapps/episodes/Episode-29-Venture-DAO-with-Ameen-Soleimani-and-Gabriel-Shapiro-ea9i3p">Wizard
                  of Dapps Episode 29: Venture DAO with Ameen Soleimani and Gabriel Shapiro</a>
              </li>
              <li style={{ color: `#a0ffe3` }}>
                <a href="http://www.cryptolawpodcast.com/episodes/50-foot/">CryptoLaw Podcast (w/
                  David Gerard)</a></li>
              <li style={{ color: `#a0ffe3` }}>
                <a
                  href="http://www.cryptolawpodcast.com/episodes/the-cryptolaw-podcast-interview-with-lewis-cohen-gabriel-shapiro/">CryptoLaw
                  Podcast (w/ Lewis Cohen)</a></li>
            </ul>
          </div>
          <Link to="/">Go back to the homepage</Link>
          <Footer></Footer>
        </div>
      </div>
    </Layout>
  )
}


export default Research
