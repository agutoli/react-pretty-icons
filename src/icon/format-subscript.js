import React from 'react';
import iconSvg from '../icons/normalized/format-subscript.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-subscript" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender