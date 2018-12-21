import React from 'react';
import iconSvg from '../icons/normalized/hook-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hook-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender