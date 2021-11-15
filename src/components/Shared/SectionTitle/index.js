import React from 'react'
import { contextTranslater } from "../../../services/helpers"
import { Context as LanguageContext } from "../../../services/Wrapper"

const SectionTitle = ( { title } ) => {
  const { locale } = React.useContext( LanguageContext )

  return (
    <div>
      <h2 className="underline-small text-blue text-xl lg:text-2xl font-bold mb-4 xm:mb-0">{ contextTranslater( locale, title ) }</h2>
    </div>
  )
}

export default SectionTitle
