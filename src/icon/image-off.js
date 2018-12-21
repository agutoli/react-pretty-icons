import React from 'react';
import iconSvg from '../icons/normalized/image-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender