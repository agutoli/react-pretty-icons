import React from 'react';
import iconSvg from '../icons/normalized/kodi.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__kodi" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender