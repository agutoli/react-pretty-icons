import React from 'react';
import iconSvg from '../icons/normalized/format-header-decrease.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-header-decrease" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender