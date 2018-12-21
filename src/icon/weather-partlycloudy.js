import React from 'react';
import iconSvg from '../icons/normalized/weather-partlycloudy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-partlycloudy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender