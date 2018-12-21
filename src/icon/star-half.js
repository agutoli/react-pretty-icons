import React from 'react';
import iconSvg from '../icons/normalized/star-half.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-half" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender