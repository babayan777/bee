import React, { useCallback, useEffect, useState } from 'react'
import Close from "../../../assets/icons/close.svg"
import Next from "../../../assets/icons/arrow_back.svg"
import Previous from "../../../assets/icons/arrow_back-1.svg"
import ListImage from "./ListImage"
import { getImage } from "../../../services/ImageService"

const Slider = ( { handleClose, images } ) => {
  const [ current, setCurrent ] = useState( 0 )

  useEffect( () => {
    document.body.classList.toggle( 'modal-active' )
    return () => {
      document.body.classList.toggle( 'modal-active' )
    }
  }, [] )

  const handlePrevious = () => {
    const index = ( current || images.length ) - 1
    setCurrent( index )
  }

  const handleNext = () => {
    const index = current === images.length - 1 ? 0 : current + 1
    setCurrent( index )
  }

  const handleImageClick = useCallback( ( i ) => {
    if ( i !== current ) {
      setCurrent( i )
    }
  }, [ current ] )

  return (
    <div className="modal fixed w-full h-full inset-0 flex justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-darkest opacity-90" />
      <div className="flex relative justify-center items-center lg:w-100" >
        <div className="w-2/12 lg:w-1/12 justify-end flex">
          <img
            alt="previous"
            className="cursor-pointer"
            onClick={ handlePrevious }
            src={ Previous }
          />
        </div>
        <div className="mx-8 flex justify-center w-8/12 lg:w-10/12" >
          <img
            alt="currentImg"
            src={ getImage( images[ current ].src ) }
          />
        </div>
        <div className="w-2/12 lg:w-1/12 justify-start flex">
          <img
            alt="close"
            className="absolute top-4 lg:top-24 right-0 cursor-pointer"
            onClick={ handleClose }
            src={ Close }
          />
          <img
            alt="next"
            className="cursor-pointer"
            onClick={ handleNext }
            src={ Next }
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-between absolute bottom-7 gap-8">
        { images.map( ( value, index ) => (
          <ListImage
            altImg={ value.alt }
            handleImgChange={ handleImageClick }
            index={ index }
            isCurrent={ current === index }
            key={ `slider_item_${ index }` }
            src={ value.src }
          />
        ) ) }
      </div>
    </div>
  )
}

export default Slider
