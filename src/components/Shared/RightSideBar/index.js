import React from "react"
import SocialIcon from "../SocialIcon"
import LoaderIcon from "../loaderIcon"

const RightSideBar = () => {
  return (
    <div className="h-screen w-fit grid-rows-3 fixed top-0 pb-4 right-7">
      <div className="flex flex-col justify-center gap-8 h-full">
        <SocialIcon name="facebook" />
        <SocialIcon name="twitter" />
        <SocialIcon name="copy" />
      </div>
      <LoaderIcon />
    </div>
  )
}

export default RightSideBar
