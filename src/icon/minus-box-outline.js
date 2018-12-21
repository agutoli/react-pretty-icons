import React from 'react';
import iconSvg from '../icons/normalized/minus-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__minus-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender