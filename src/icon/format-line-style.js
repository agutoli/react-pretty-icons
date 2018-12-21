import React from 'react';
import iconSvg from '../icons/normalized/format-line-style.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-line-style" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender