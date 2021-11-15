import React, { useEffect, useState } from "react"
import { scrollTop } from "../../../services/helpers"

const LoaderIcon = () => {
  //:todo
  // const [ dashoffsetIcon, setDashoffsetIcon ] = useState( () => {
  //   return 132 - ( ( 124 * ( ( window.innerHeight / document.documentElement.scrollHeight ) * 100 ) ) / 100 )
  // } )
  const [ dashoffsetIcon, setDashoffsetIcon ] = useState( 124 )

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      const x = ( ( window.scrollY + window.innerHeight ) / document.documentElement.scrollHeight ) * 100
      const y = 132 - ( ( 124 * x ) / 100 )
      setDashoffsetIcon( y )
    } )
  }, [] )

  return (
    <div
      className={ "flex group items-center justify-center fixed cursor-pointer rounded-full relative bottom-24 active:bg-gray-dark scrolling" }
      onClick={ () => scrollTop( 0, 700 )  }
    >
      <svg
        className="absolute m-auto top-0 left-0 right-0 bottom-0"
        height="40px"
        version="1.1"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop
              offset="0%"
              stopColor="#e91e63"
            />
            <stop
              offset="100%"
              stopColor="#673ab7"
            />
          </linearGradient>
        </defs>
        <circle
          className="stroke-current text-gray-light"
          cx="20"
          cy="20"
          fill="none"
          id="progressCircle"
          r="18"
          strokeDasharray={ 124 }
          strokeLinecap="round"
          strokeWidth={ "2.5px" }
        />
      </svg>
      <svg
        className="absolute m-auto top-0 left-0 right-0 bottom-0 transform -rotate-90"
        height="40px"
        transform={ "rotate(270deg)" }
        version="1.1"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient>
            <stop
              offset="0%"
              stopColor="#e91e63"
            />
            <stop
              offset="100%"
              stopColor="#673ab7"
            />
          </linearGradient>
        </defs>
        <circle
          className="stroke-current text-yellow"
          cx="20"
          cy="20"
          fill="none"
          r="18"
          strokeDasharray={ 124 }
          strokeDashoffset={ dashoffsetIcon }
          strokeLinecap="round"
          strokeWidth={ "3px" }
        />
      </svg>
      <svg
        className="absolute m-auto top-0 left-3.5 lg:left-0 right-0 bottom-0"
        fill="none"
        height="8"
        viewBox="0 0 11 8"
        width="11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-current text-gray-light group-hover:text-yellow"
          d="M5.50012 0.900391L0.10009 6.30042L1.3691 7.56943L5.50012 3.4474L9.63114 7.56943L10.9001 6.30042L5.50012 0.900391Z"
        />
      </svg>
    </div>
  )
}

export default LoaderIcon
