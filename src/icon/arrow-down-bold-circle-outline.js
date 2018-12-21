import React from 'react';
import iconSvg from '../icons/normalized/arrow-down-bold-circle-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-down-bold-circle-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender