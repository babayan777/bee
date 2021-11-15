import React from 'react'
import TextComponent from "../TextComponent"
import ImageComponent from "../ImageComponent"
import VideoComponent from "../VideoComponent"
import ImagesComponent from "../ImagesComponent"

const componentsData = {
  'text': TextComponent,
  'images': ImagesComponent,
  'image': ImageComponent,
  'chart': ImageComponent,
  'video': VideoComponent,
}

const componentRender = ( data, index ) => {
  const { type, scrollable, content, ...props } = data
  const Component = componentsData[ type ]
  return (
    <Component
      componentClassName={ `${ data.onlyMobile ? 'xm:hidden' : '' } ${ data.onlyWeb ? 'hidden xm:block' : '' }` }
      data = { content }
      key={ `${ data.key }_${ index }` }
      scrollable={ scrollable }
      { ...props }
    />
  )
}

const SideBar = ( { data } ) => {
  const { components, marginAuto } = data

  return (
    <div className={ `flex-1 my-8 ${ marginAuto ? 'sm:my-auto' : 'lg:my-16' }` }>
      {
        components.map( ( val, index ) => componentRender( val, index ) )
      }
    </div>
  )
}

export default SideBar
