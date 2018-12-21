import React from 'react';
import iconSvg from '../icons/normalized/blur-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blur-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender