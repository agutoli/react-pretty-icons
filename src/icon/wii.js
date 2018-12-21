import React from 'react';
import iconSvg from '../icons/normalized/wii.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wii" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender