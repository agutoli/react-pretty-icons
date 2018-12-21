import React from 'react';
import iconSvg from '../icons/normalized/weather-hail.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-hail" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender