import React from 'react';
import iconSvg from '../icons/normalized/arrow-down-bold-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-down-bold-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender