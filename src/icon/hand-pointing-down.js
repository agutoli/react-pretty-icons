import React from 'react';
import iconSvg from '../icons/normalized/hand-pointing-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hand-pointing-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender