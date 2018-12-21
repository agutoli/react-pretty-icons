import React from 'react';
import iconSvg from '../icons/normalized/format-header-pound.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-header-pound" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender