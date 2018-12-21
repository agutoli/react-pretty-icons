import React from 'react';
import iconSvg from '../icons/normalized/star-face.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-face" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender