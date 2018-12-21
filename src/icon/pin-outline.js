import React from 'react';
import iconSvg from '../icons/normalized/pin-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pin-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender