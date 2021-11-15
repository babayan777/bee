import React from 'react'
import Section from "../../Shared/Section"
import contentData from "../../../constants/contentData.js"

function Content() {
  return (
    <div className="pt-12 lg:pt-24 max-w-8xl mx-auto px-4 lg:px-16 mb-12 lg:mb-20">
      {
        contentData.map( ( val ) => {
          return (
            <Section
              key={ val.key }
              section={ val }
            />
          )
        } )
      }
    </div>
  )
}

export default Content
