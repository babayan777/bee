import React from 'react'
import parse from 'html-react-parser'
import { contextTranslater } from "../../../services/helpers"
import { Context as LanguageContext } from "../../../services/Wrapper"

const TextComponent = ( { data, scrollable, componentClassName } ) => {
  const { locale } = React.useContext( LanguageContext )
  const { textHTML } = data

  return (
    <div className={ `${ scrollable ? `` : `sticky mobileSticky` } textContent bg-white text-gray-darkest p-6 lg:p-8 shadow-3xl text-sm lg:text-base leading-6 xm:leading-5 lg:leading-7 ${ componentClassName }` }>
      {
        parse(
          contextTranslater( locale, textHTML )
        )
      }
    </div>
  )
}

export default TextComponent
