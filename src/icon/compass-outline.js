import React from 'react';
import iconSvg from '../icons/normalized/compass-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__compass-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender