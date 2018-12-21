import React from 'react';
import iconSvg from '../icons/normalized/format-float-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-float-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender