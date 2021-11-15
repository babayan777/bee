import React, { useContext, useEffect, useRef, useState } from 'react'
import leftImg from "../../../assets/images/MainLeft.svg"
import rightImg from "../../../assets/images/MainRight.svg"
import LinkCopied from "../../../assets/icons/LinkCopied.svg"
import RightSideBar from "../../Shared/RightSideBar"
import LoaderIcon from "../../Shared/loaderIcon"
import { Context as LanguageContext } from "../../../services/Wrapper"
import MobileRotation from "../../Shared/MobileRotation"

const Background = () => {
  const [ isOpen, setIsOpen ] = useState( false )
  let timer = useRef( null )

  const handleClick = () => setIsOpen( prev => !prev )

  const reportWindowSize = () => {
    if ( timer.current ) {
      clearTimeout( timer.current )
    }

    setIsOpen( false )
    window.removeEventListener( 'resize', reportWindowSize )
  }

  useEffect( () => {
    if ( window.innerWidth < window.innerHeight && window.innerHeight > 550 && window.innerWidth < 1024 ) {
      window.addEventListener( 'resize', reportWindowSize )
      timer.current = setTimeout( () => {
        handleClick()
      }, 5000 )
    }

    return () => {
      if ( timer ) {
        clearTimeout( timer.current )
      }

      window.removeEventListener( 'resize', reportWindowSize )
    }
  }, [] )

  const { alertPopUp } = useContext( LanguageContext )

  return (
    <div>
      <div className="hidden lg:block">
        <img
          alt="Background image left"
          className={ "fixed top-36 -left-8 -z-1" }
          src={ leftImg }
        />
        <img
          alt="Background image right"
          className={ "fixed top-0 -right-8 -z-1" }
          src={ rightImg }
        />
        { alertPopUp &&
          <div className="h-screen w-fit fixed top-6/10 pb-4 right-20">
            <img
              alt="Link Copied"
              src={ LinkCopied }
            />
          </div>
        }
        <RightSideBar />
      </div>
      <div className="lg:hidden fixed -bottom-7 right-12 z-50">
        { isOpen &&
          <MobileRotation handleClick={ handleClick } />
        }
        <LoaderIcon />
      </div>
    </div>
  )
}

export default Background
