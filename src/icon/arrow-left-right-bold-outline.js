import React from 'react';
import iconSvg from '../icons/normalized/arrow-left-right-bold-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-left-right-bold-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender