import React from 'react';
import iconSvg from '../icons/normalized/shield-key-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shield-key-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender