import React from 'react'

import './StaticPage.scss'

function StaticPage () {
  return (
    <div className="Page">
      <span className="message">Hello! I&apos;m <span className="message-name">Steph</span> — Product Designer
        <br />
        based in Vancouver 🇨🇦
      </span>
      <br />
      <a href="https://steph-leung-portfolio.webflow.io/home-b">
        <button className="link">Visit my new portfolio site here</button>
      </a>
    </div>
  )
}

export default StaticPage
