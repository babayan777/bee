import Asatur from '../assets/images/Asatur.jpg'
import Image06 from '../assets/images/06.jpg'
import Chart1 from '../assets/images/Chart1.png'
import Chart2 from '../assets/images/Chart2.png'
import Chart2_en from '../assets/images/Chart2_en.png'
import Chart3 from '../assets/images/Chart3.png'
import Chart3_en from '../assets/images/Chart3_en.png'
import Chart4 from '../assets/images/Chart4.png'
import Chart4_en from '../assets/images/Chart4_en.png'
import Chart5 from '../assets/images/Chart5.png'
import Chart5_en from '../assets/images/Chart5_en.png'
import Chart6 from '../assets/images/Chart6.png'
import Chart6_en from '../assets/images/Chart6_en.png'
import Chart7 from '../assets/images/Chart7.png'
import Chart7_en from '../assets/images/Chart7_en.png'
import Chart8 from '../assets/images/Chart8.png'
import Aralez from '../assets/images/Aralez.jpg'
import Bees from '../assets/images/Bees.jpg'
import Matchboxes from '../assets/images/Matchboxes.jpg'
import outOfHive from '../assets/images/outOfHive.jpg'
import Shirak1 from '../assets/images/Shirak1.jpg'
import Shirak2 from '../assets/images/Shirak2.jpg'
import Shirak3 from '../assets/images/Shirak3.jpg'
import Rotate1 from '../assets/images/rotate1.svg'
import Rotate2 from '../assets/images/rotate2.svg'

const images = {
  Asatur,
  '06': Image06,
  Chart1,
  Chart2,
  Chart2_en,
  Chart3,
  Chart3_en,
  Chart4,
  Chart4_en,
  Chart5,
  Chart5_en,
  Chart6,
  Chart6_en,
  Chart7,
  Chart7_en,
  Chart8,
  Aralez,
  Bees,
  Matchboxes,
  outOfHive,
  Shirak1,
  Shirak2,
  Shirak3,
  Rotate1,
  Rotate2,
}

export function getImage( name ) {
  return images[ name ] || ''
}
