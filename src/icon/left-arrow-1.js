import React from 'react';
import iconSvg from '../icons/normalized/left-arrow-1.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__left-arrow-1" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender