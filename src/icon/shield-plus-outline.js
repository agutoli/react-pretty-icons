import React from 'react';
import iconSvg from '../icons/normalized/shield-plus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shield-plus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender