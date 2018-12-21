import React from 'react';
import iconSvg from '../icons/normalized/page-layout-sidebar-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__page-layout-sidebar-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender