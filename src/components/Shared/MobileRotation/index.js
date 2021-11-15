import React, { useEffect } from "react"
import { getImage } from "../../../services/ImageService"
import { FormattedMessage } from "react-intl"
import Close from "../../../assets/icons/close.svg"

const MobileRotation = ( { handleClick } ) => {
  useEffect( () => {
    document.body.classList.toggle( 'modal-active' )
    return () => {
      document.body.classList.toggle( 'modal-active' )
    }
  }, [] )

  return (
    <div className="modal fixed w-full h-full inset-0 flex justify-center z-100">
      <div className="modal-overlay absolute w-full h-full bg-gray-darkest opacity-90" />
      <div className="absolute top-0.5/10 right-10">
        <img
          alt="close"
          className="cursor-pointer"
          onClick={ handleClick }
          src={ Close }
        />
      </div>
      <div className="absolute bottom-3/10">
        <img
          alt="mobile 1"
          src={ getImage( 'Rotate1' ) }
        />
      </div>
      <div className="absolute rotate bottom-3/10">
        <img
          alt="mobile 2"
          className="w-full h-full"
          src={ getImage( 'Rotate2' ) }
        />
      </div>
      <div className="absolute bottom-1.5/10 text-white text-xl">
        <FormattedMessage id="RotatePhone"/>
      </div>
    </div>
  )
}

export default MobileRotation
