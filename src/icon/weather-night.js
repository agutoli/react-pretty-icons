import React from 'react';
import iconSvg from '../icons/normalized/weather-night.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-night" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender