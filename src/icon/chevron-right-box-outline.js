import React from 'react';
import iconSvg from '../icons/normalized/chevron-right-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-right-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender