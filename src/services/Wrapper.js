import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import languages, { defaultLocale } from "../i18n"

export const Context = React.createContext( null )

const defaultMessages = languages[ defaultLocale ].messages

export default function Wrapper( props ) {
  const [ locale, setLocale ] = useState( defaultLocale )
  const [ messages, setMessages ] = useState( defaultMessages )

  const [ alertPopUp, setAlertPopUp ] = useState( false )

  function alertPopUpToggle(  ) {
    setAlertPopUp( prev => !prev )
  }

  useEffect( () => {
    const url = new URL( location.href )
    const language = url.searchParams.get( 'lang' )
    if ( [ 'en', 'am' ].includes( language ) ) {
      changeLanguage( language )
    } else {
      window.history.pushState( "", "", `/?lang=${ defaultLocale }` )
    }
  }, [] )

  function changeLanguage( newLocale ) {
    setLocale( newLocale )
    const newMessages = languages[ newLocale ]?.messages || defaultMessages
    setMessages( newMessages )
    window.history.pushState( "", "", `/?lang=${ newLocale }` )
  }

  return (
    <Context.Provider value = { { locale, changeLanguage, alertPopUpToggle, alertPopUp } }>
      <IntlProvider
        locale={ locale }
        messages={ messages }
      >
        { props.children }
      </IntlProvider>
    </Context.Provider>
  )
}
