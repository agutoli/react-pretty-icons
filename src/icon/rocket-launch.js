import React from 'react';
import iconSvg from '../icons/normalized/rocket-launch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rocket-launch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender