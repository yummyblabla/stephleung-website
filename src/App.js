import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

import Amazon from './pages/WorkPages/Amazon'
import Expedia from './pages/WorkPages/Expedia'
import Bitesquad from './pages/WorkPages/Bitesquad'
import CMG from './pages/WorkPages/CMG'
import VPL from './pages/CommunityPages/VPL'
import YMCA from './pages/CommunityPages/YMCA'
import CPCH from './pages/CommunityPages/CPCH'
import Stimulus from './pages/CommunityPages/Stimulus'
import NotFound from './pages/NotFound'

import Grid from './components/Grid'

import { loadAnimation } from 'lottie-web'
import { defineLordIconElement } from 'lord-icon-element'

defineLordIconElement(loadAnimation)

function App () {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

        <Route path='/work'>
          <Route path='amazon' element={<Amazon />} />
          <Route path='expedia' element={<Expedia />} />
          <Route path='bitesquad' element={<Bitesquad />} />
          <Route path='cmg' element={<CMG />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='/community'>
          <Route path='vpl' element={<VPL />} />
          <Route path='ymca' element={<YMCA />} />
          <Route path='cpch' element={<CPCH />} />
          <Route path='stimulus' element={<Stimulus />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
      <Grid />
    </React.Fragment>
  )
}

export default App
