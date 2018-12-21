import React from 'react';
import iconSvg from '../icons/normalized/triangle-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__triangle-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender