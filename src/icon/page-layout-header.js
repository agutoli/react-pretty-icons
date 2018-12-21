import React from 'react';
import iconSvg from '../icons/normalized/page-layout-header.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__page-layout-header" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender