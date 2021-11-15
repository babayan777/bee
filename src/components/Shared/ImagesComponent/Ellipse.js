import React from 'react'

const Ellipse = ( { isCurrent, onClick } ) => {
  return (
    <div
      className={ `${ isCurrent ? "bg-yellow" : "bg-gray-400" } w-4 h-4 rounded-2xl` }
      onClick={ onClick }
    />
  )
}

export default Ellipse
