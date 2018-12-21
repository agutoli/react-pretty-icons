import React from 'react';
import iconSvg from '../icons/normalized/weather-windy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-windy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender