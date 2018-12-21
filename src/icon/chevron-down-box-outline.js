import React from 'react';
import iconSvg from '../icons/normalized/chevron-down-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-down-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender