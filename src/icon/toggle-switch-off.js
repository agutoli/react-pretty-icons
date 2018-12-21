import React from 'react';
import iconSvg from '../icons/normalized/toggle-switch-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__toggle-switch-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender