import React from 'react';
import iconSvg from '../icons/normalized/gowalla-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gowalla-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender