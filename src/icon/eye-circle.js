import React from 'react';
import iconSvg from '../icons/normalized/eye-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender