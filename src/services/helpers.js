export function contextTranslater( locale, data ) {
  return data ? data[ locale ] || '' : ''
}

export function generateKey ( pre ) {
  return `${ pre }_${ new Date().getTime() } }`
}

export function scrollTop( to, duration ) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startTs = performance.now(),
    eraseInOutQuad = function( t, b, c, d ) {
      t /= d / 2
      if ( t < 1 ) return c / 2 * t * t + b
      t--
      return -c / 2 * ( t * ( t - 2 ) - 1 ) + b
    },
    animateScroll = function( ts ) {
      const currentTime = ts - startTs
      element.scrollTop = parseInt( eraseInOutQuad( currentTime, start, change, duration ) )
      if ( currentTime < duration ) {
        requestAnimationFrame( animateScroll )
      }
      else {
        element.scrollTop = to
      }
    }

  requestAnimationFrame( animateScroll )
}
