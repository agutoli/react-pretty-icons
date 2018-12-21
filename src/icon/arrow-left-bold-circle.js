import React from 'react';
import iconSvg from '../icons/normalized/arrow-left-bold-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-left-bold-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender