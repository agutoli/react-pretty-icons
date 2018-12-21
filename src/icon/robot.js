import React from 'react';
import iconSvg from '../icons/normalized/robot.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__robot" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender