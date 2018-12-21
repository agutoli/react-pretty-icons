import React from 'react';
import iconSvg from '../icons/normalized/pinwheel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pinwheel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender