import React from 'react';
import iconSvg from '../icons/normalized/globe-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__globe-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender