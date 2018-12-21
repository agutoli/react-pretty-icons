import React from 'react';
import iconSvg from '../icons/normalized/chevron-left-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-left-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender