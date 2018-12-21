import React from 'react';
import iconSvg from '../icons/normalized/weather-windy-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-windy-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender