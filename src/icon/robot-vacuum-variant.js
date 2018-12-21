import React from 'react';
import iconSvg from '../icons/normalized/robot-vacuum-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__robot-vacuum-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender