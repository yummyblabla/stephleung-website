import React from 'react'

import './Home.scss'

import Recognition from './Recognition'
import CommunityService from './CommunityService'
import DesignThinking from './DesignThinking'
import Work from './Work'

function Home () {
  return (
    <div className='Home'>
      <div className='Intro'>
        <h1 className='title'>
          Hello! I’m Steph — a Product Designer currently at{' '}
          <a href='https://www.lululemon.com/'>
            <span className='lulu'>lululemon</span>
          </a>
          .
        </h1>
      </div>

      <Work />
      <DesignThinking />
      <Recognition />
      <CommunityService />
    </div>
  )
}

export default Home
