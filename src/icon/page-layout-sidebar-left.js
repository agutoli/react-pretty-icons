import React from 'react';
import iconSvg from '../icons/normalized/page-layout-sidebar-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__page-layout-sidebar-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender