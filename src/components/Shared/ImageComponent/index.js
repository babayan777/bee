import React from 'react'
import './index.module.scss'
import parse from 'html-react-parser'
import LazyLoad from "react-lazyload"
import ImageDescription from "./ImageDescription"
import { Context as LanguageContext } from "../../../services/Wrapper"
import { contextTranslater } from "../../../services/helpers"
import { getImage } from "../../../services/ImageService"

const ImageComponent = ( { data, scrollable, onClick, isImage, componentClassName } ) => {
  const { locale } = React.useContext( LanguageContext )
  const { titleHTML, description, src, alt, disableLazy, className, styles } = data

  const imageSrc = typeof src === 'string' ? src : contextTranslater( locale, src )

  return (
    <div
      className={ `${ scrollable ? '' : 'sticky mobileSticky' } tracking-widest w-full xm:my-8 lg:my-14 ${ className || '' } ${ componentClassName }` }
      style={ styles || {} }
    >
      { titleHTML &&
      <div className="text-sm lg:text-base mb-8 lg:mb-10">
        { parse( contextTranslater( locale, titleHTML ) ) }
      </div>
      }
      <div className={ isImage ? 'cursor-pointer' : '' }>
        { !disableLazy ?
          <LazyLoad
            height={ 200 }
            offset={ 500 }
            once
          >
            <img
              alt={ alt }
              className="w-full h-full"
              onClick={ onClick || null }
              src={ getImage( imageSrc ) }
            />
          </LazyLoad> :
          <img
            alt={ alt }
            className="w-full h-full"
            onClick={ onClick || null }
            src={ getImage( imageSrc ) }
          />
        }
      </div>
      { description &&
        <ImageDescription
          description={ description }
        />
      }
    </div>
  )
}

export default ImageComponent
