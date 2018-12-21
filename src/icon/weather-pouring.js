import React from 'react';
import iconSvg from '../icons/normalized/weather-pouring.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-pouring" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender