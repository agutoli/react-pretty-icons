import React from 'react';
import iconSvg from '../icons/normalized/select-drag.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__select-drag" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender