import React from 'react'
import { getImage } from "../../../../services/ImageService"

const ListImage = ( { src, handleImgChange, isCurrent, altImg, index } ) => {
  return (
    <img
      alt={ altImg }
      className={ `${ isCurrent ? "opacity-70" : "" } mr-1 w-48 h-28 cursor-pointer` }
      onClick={ () => {
        handleImgChange( index )
      } }
      src={ getImage( src ) }
    />
  )
}

export default ListImage
