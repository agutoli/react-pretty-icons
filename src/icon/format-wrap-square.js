import React from 'react';
import iconSvg from '../icons/normalized/format-wrap-square.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-wrap-square" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender