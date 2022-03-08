import React from 'react'

import './Home.scss'

function Home () {
  return (
    <div className='Home'>
      <h1 className='Intro'>
        Hello! I’m Steph -- a Product Designer currently at{' '}
        <span className='lulu'>lululemon</span>.
      </h1>

      <section id='work' className='Work'>
        <h2 className='header'>Work</h2>
        <h4>A showcase of my portfolio.</h4>
      </section>
    </div>
  )
}

export default Home
