import React from 'react';
import iconSvg from '../icons/normalized/weather-rainy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-rainy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender