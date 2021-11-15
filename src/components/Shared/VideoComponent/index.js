import React from 'react'
import { Context as LanguageContext } from "../../../services/Wrapper"
import { contextTranslater } from "../../../services/helpers"

function VideoComponent( { data, scrollable, componentClassName } ) {

  const { locale } = React.useContext( LanguageContext )
  const { description, src, type, className, styles } = data

  return (
    <div
      className={ `${ scrollable ? '' : 'sticky mobileSticky' } tracking-widest w-full xm:my-8 lg:my-14 ${ className || '' } ${ componentClassName }` }
      style={ styles || {} }
    >
      { type === 'youtube' ?
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-52 xm:h-48 sm:h-52 md:h-64 lg:h-80 xl:h-92"
          frameBorder="0"
          src={ src }
          title="YouTube video player"
        >
        </iframe>
        :
        <iframe
          className="w-full h-52 xm:h-48 sm:h-52 md:h-64 lg:h-80 xl:h-92"
          frameBorder="no"
          scrolling="no"
          src={ src }
        >
        </iframe>
      }
      <div className="mt-3 text-sm text-gray">
        <p>{ contextTranslater( locale, description ) }</p>
      </div>
    </div>
  )
}

export default VideoComponent
