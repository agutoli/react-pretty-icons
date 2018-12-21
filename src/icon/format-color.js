import React from 'react';
import iconSvg from '../icons/normalized/format-color.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-color" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender