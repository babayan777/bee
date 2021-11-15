import React from 'react'
import SectionColumn from "../SectionColumn"

const SectionBlock = ( { data } ) => {
  const { leftSide, rightSide } = data

  return (
    <div className="flex flex-col xm:flex-row xm:gap-6 lg:gap-14">
      <SectionColumn data={ leftSide }/>
      <SectionColumn data={ rightSide }/>
    </div>
  )
}

export default SectionBlock
