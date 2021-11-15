import React from 'react'
import SectionTitle from "../SectionTitle"
import SectionBlock from "../SectionBlock"

function Section( { section } ) {
  const { title, blocks } = section

  return (
    <div className="lg:mr-12 my-20 lg:mt-20">
      <div>
        <SectionTitle title={ title } />
      </div>
      { blocks.map( ( val ) => {
        return (
          <SectionBlock
            data={ val }
            key={ val.key }
          />
        )
      } ) }

    </div>
  )
}

export default Section
