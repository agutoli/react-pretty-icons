import React from 'react';
import iconSvg from '../icons/normalized/weather-snowy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-snowy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender