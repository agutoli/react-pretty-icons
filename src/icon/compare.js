import React from 'react';
import iconSvg from '../icons/normalized/compare.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__compare" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender