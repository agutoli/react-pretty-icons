import React from 'react';
import iconSvg from '../icons/normalized/weather-lightning-rainy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-lightning-rainy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender