import React from 'react';
import iconSvg from '../icons/normalized/heart-half-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-half-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender