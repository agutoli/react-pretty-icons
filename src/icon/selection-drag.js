import React from 'react';
import iconSvg from '../icons/normalized/selection-drag.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__selection-drag" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender