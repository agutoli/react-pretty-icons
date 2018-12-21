import React from 'react';
import iconSvg from '../icons/normalized/shield-half-full.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shield-half-full" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender