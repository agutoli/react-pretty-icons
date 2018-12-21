import React from 'react';
import iconSvg from '../icons/normalized/robot-vacuum.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__robot-vacuum" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender