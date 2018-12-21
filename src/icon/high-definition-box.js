import React from 'react';
import iconSvg from '../icons/normalized/high-definition-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__high-definition-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender