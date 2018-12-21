import React from 'react';
import iconSvg from '../icons/normalized/motorbike.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__motorbike" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender