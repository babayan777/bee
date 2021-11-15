import React from 'react'
import './index.module.scss'
import { contextTranslater } from "../../../services/helpers"
import { Context as LanguageContext } from "../../../services/Wrapper"

const ImageDescription = ( { description } ) => {
  const { locale } = React.useContext( LanguageContext )

  return (
    <div className="pt-3 text-xs lg:text-sm text-gray">
      <p>{  contextTranslater( locale, description ) }</p>
    </div>
  )
}

export default ImageDescription
