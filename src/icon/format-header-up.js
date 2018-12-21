import React from 'react';
import iconSvg from '../icons/normalized/format-header-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-header-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender