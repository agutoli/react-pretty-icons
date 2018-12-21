import React from 'react';
import iconSvg from '../icons/normalized/present-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__present-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender