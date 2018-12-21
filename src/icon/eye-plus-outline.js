import React from 'react';
import iconSvg from '../icons/normalized/eye-plus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-plus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender