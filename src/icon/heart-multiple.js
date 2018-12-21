import React from 'react';
import iconSvg from '../icons/normalized/heart-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender