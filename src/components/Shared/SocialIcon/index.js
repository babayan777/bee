import iconsList from "./Icons"
import React, { useMemo, useContext } from "react"
import { Context } from '../../../services/Wrapper'

const SocialIcon = ( { name } ) => {
  const iconItem = useMemo( () => iconsList[ name ], [ name ] )
  const alertContext = useContext( Context )

  const clickHandler = () => {
    alertContext?.alertPopUpToggle( true )
    navigator.clipboard.writeText( document.location.origin )
    setTimeout( () => {
      alertContext?.alertPopUpToggle( false )
    }, 1000 )
  }

  if ( !name ) {
    return null
  }

  const componentClassNames = "p-4 group w-auto h-auto cursor-pointer border-2 border-solid border-transparent hover:border-gray-darker rounded-full active:bg-gray-darker socialIcon"

  return (
    name === 'copy' ?
      <div
        className={ componentClassNames }
        onClick={ clickHandler }
      >
        { iconItem.component }
      </div>
      :
      <a
        href={ `${ iconItem.shareURL }${ window.location.href }` }
        rel="noreferrer"
        target="_blank"
      >
        <div className={ componentClassNames }>
          { iconItem.component }
        </div>
      </a>
  )
}

export default SocialIcon
