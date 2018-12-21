import React from 'react';
import iconSvg from '../icons/normalized/format-header-2.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-header-2" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender