import React, { useEffect } from 'react'
import UnderConstruction from '../../UnderConstruction'

function Stimulus () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return <UnderConstruction />
}

export default Stimulus
