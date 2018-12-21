import React from 'react';
import iconSvg from '../icons/normalized/shower.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shower" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender