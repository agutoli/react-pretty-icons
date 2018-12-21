import React from 'react';
import iconSvg from '../icons/normalized/rewind-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rewind-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender