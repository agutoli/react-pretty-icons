import React from 'react';
import iconSvg from '../icons/normalized/format-float-center.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-float-center" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender