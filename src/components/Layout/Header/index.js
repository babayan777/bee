import React, { useCallback, useEffect, useRef, useState } from 'react'
import ArmFlag from '../../../assets/icons/Flag_arm.png'
import USAFlag from '../../../assets/icons/Flag_usa.png'
import Logo from '../../../assets/logos/Hetq.png'
import { FormattedMessage } from 'react-intl'
import { Context as LanguageContext } from '../../../services/Wrapper'
import DownArrow from '../../../assets/icons/Arrow_drop.svg'
import { scrollTop } from "../../../services/helpers"

const Header = () => {
  const { changeLanguage, locale } = React.useContext( LanguageContext )

  const myRef = useRef()
  const myRefFlag = useRef()
  const [ dropDown, setDropDown ] = useState( false )

  const handleClickOutside = e => {
    if ( !myRef.current.contains( e.target ) && dropDown && !myRefFlag.current.contains( e.target ) ) {
      setDropDown( false )
    }
  }

  useEffect( () => {
    document.addEventListener( 'mousedown', handleClickOutside )
    return () => document.removeEventListener( 'mousedown', handleClickOutside )
  } )

  const switchLanguage = useCallback(
    ( lng ) => {
      if ( lng !== locale ) {
        changeLanguage( lng )
      }

      setDropDown( false )
    },
    [ changeLanguage, locale ]
  )

  const toggleClick = () => {
    setDropDown( prev => !prev )
  }

  const isUS = locale === 'en'

  return (
    <header className="bg-white w-full fixed inset-0 shadow-xl h-16 lg:h-18 z-10">
      <div className="flex flex-row lg:flex-wrap max-w-8xl mx-auto px-4 lg:px-16">
        <div className="flex-none">
          <img
            className="w-18 lg:w-22 cursor-pointer"
            onClick={ () => scrollTop( 0, 700 ) }
            src={ Logo }
          />
        </div>
        <h1 className="flex-grow text-left lg:text-center font-bold tracking-widest text-blue text-sm xs:text-base lg:text-1.5xl self-center pl-2 pb-2 lg:pb-4">
          <FormattedMessage id="HeaderTitle" />
        </h1>
        <div className="flex-none relative self-center pb-2 lg:pb-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={ toggleClick }
            ref={ myRefFlag }
          >
            <div>
              <img
                src={ !isUS ? ArmFlag : USAFlag }
                width="30"
              />
            </div>
            <div
              className="ml-1 lg:ml-4.25"
            >
              <img
                alt="Down arrow"
                src={ DownArrow }
              />
            </div>
          </div>
          <div
            className={ dropDown ? "flex cursor-pointer w-15.5 bg-white rounded-sm h-22 flex-col absolute top-12 -right-1.5 lg:right-1.5 rounded-sm shadow-2xl" : 'hidden' }
            ref={ myRef }
          >
            <div className={ `${ isUS ? 'flag-bordered flag-bordered-top bg-gray-10' : 'flag-border flag-border-top' } h-2/4 hover:bg-gray-10` }>
              <div
                className="w-full h-full flex justify-center items-center"
                onClick={ () => switchLanguage( 'en' ) }
              >
                <img
                  alt="English"
                  className={ `flag-img h-4.5 w-7.5 ${ isUS ? 'mr-1' : '' }` }
                  src={ USAFlag }
                />
              </div>
            </div>
            <div className={ `${ !isUS ? 'flag-bordered flag-bordered-bottom bg-gray-10' : 'flag-border flag-border-bottom' } h-2/4 hover:bg-gray-10` }>
              <div
                className="w-full h-full flex justify-center items-center"
                onClick={ () => switchLanguage( 'am' ) }
              >
                <img
                  alt="Armenian"
                  className={ `flag-img h-4.5 w-7.5 ${ !isUS ? 'mr-1' : '' }` }
                  src={ ArmFlag }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
