import React from 'react';
import iconSvg from '../icons/normalized/weather-sunset-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-sunset-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender