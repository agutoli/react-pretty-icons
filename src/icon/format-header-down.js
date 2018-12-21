import React from 'react';
import iconSvg from '../icons/normalized/format-header-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-header-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender