import React, { useEffect } from 'react'
import Password from '../../Password'
import UnderConstruction from '../../UnderConstruction'

function Amazon () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return <Password ProtectedPage={UnderConstruction} />
}

export default Amazon
