import React from 'react';
import iconSvg from '../icons/normalized/arrow-left-bold-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-left-bold-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender