import React from 'react';
import iconSvg from '../icons/normalized/eject.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eject" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender