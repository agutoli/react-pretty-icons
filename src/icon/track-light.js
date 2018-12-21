import React from 'react';
import iconSvg from '../icons/normalized/track-light.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__track-light" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender