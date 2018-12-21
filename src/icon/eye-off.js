import React from 'react';
import iconSvg from '../icons/normalized/eye-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender