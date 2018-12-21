import React from 'react';
import iconSvg from '../icons/normalized/robot-industrial.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__robot-industrial" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender