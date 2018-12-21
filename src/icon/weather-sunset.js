import React from 'react';
import iconSvg from '../icons/normalized/weather-sunset.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weather-sunset" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender