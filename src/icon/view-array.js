import React from 'react';
import iconSvg from '../icons/normalized/view-array.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-array" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender