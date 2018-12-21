import React from 'react';
import iconSvg from '../icons/normalized/weather-snowy-rainy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-snowy-rainy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender