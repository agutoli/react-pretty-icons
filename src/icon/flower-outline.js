import React from 'react';
import iconSvg from '../icons/normalized/flower-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flower-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender