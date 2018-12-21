import React from 'react';
import iconSvg from '../icons/normalized/page-layout-footer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__page-layout-footer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender