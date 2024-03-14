import React from 'react'
import Header from '../components/Header/Header'

const LayoutMain: React.FC<{children: any}> = ({children}): any => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default LayoutMain