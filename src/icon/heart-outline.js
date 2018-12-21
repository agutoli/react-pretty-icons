import React from 'react';
import iconSvg from '../icons/normalized/heart-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender