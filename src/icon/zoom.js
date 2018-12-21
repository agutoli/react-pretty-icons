import React from 'react';
import iconSvg from '../icons/normalized/zoom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zoom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender