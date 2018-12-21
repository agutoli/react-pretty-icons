import React from 'react';
import iconSvg from '../icons/normalized/launch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__launch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender