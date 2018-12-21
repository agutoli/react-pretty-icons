import React from 'react';
import iconSvg from '../icons/normalized/eye-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender