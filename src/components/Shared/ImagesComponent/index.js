import React, { useCallback, useEffect, useRef, useState } from 'react'
import ImageComponent from "../ImageComponent"
import ImageSlider from "../ImageSlider"
import Flickity from 'react-flickity-component'
import { getImage } from "../../../services/ImageService"
import ImageDescription from "../ImageComponent/ImageDescription"

const flickityOptions = {
  initialIndex: 0,
  prevNextButtons: false,
  wrapAround: true,
  lazyLoad: true,
  pageDots: true,
}

const ImagesComponent = ( { data, scrollable, componentClassName } ) => {
  const [ slider, setSlider ] = useState( false )
  const [ selected, setSelected ] = useState( 0 )
  const [ mobileImages, setMobileImages ] = useState( [] )
  const myRef = useRef( null )

  const handleSliderStatus = useCallback( () => setSlider( prev => !prev ), [] )

  const handlerSelected = ( i ) => {
    setSelected( i )
  }

  useEffect( () => {
    setMobileImages( data.filter( val => !val.onlyWeb ) )
    myRef.current.on( 'change', handlerSelected )

    return () => {
      myRef.current.off( 'change', handlerSelected )
    }
  }, [ data ] )

  return (
    <div>
      <div className={ `xm:hidden relative mb-10 ${ componentClassName }` }>
        <Flickity
          className={ 'carousel' }
          flickityRef={ ref => myRef.current = ref  }
          options={ flickityOptions }
        >
          { mobileImages.map( ( val ) => (
            <img
              alt={ val.alt }
              className="mr-4"
              key={ `carousel_${ val.key }` }
              src={ getImage( val.src ) }
            />
          ) ) }
        </Flickity>
        <div className="h-14">
          { ( mobileImages[ selected ]?.description || mobileImages[ selected ]?.descriptionMobile ) ?
            <ImageDescription
              description={ mobileImages[ selected ].description || mobileImages[ selected ].descriptionMobile }
            /> : null
          }
        </div>
      </div>
      <div className="hidden xm:block">
        {
          data.map( ( val, i ) => (
            <ImageComponent
              data = { val }
              isImage
              key={ `${ val.key }_${ i }` }
              onClick={ handleSliderStatus }
              scrollable={ scrollable }
            />
          ) )
        }
        { slider &&
          <ImageSlider
            handleClose={ handleSliderStatus }
            images={ data }
          />
        }
      </div>
    </div>
  )
}

export default ImagesComponent
