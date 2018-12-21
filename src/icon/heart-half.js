import React from 'react';
import iconSvg from '../icons/normalized/heart-half.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-half" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender