import React from 'react';
import iconSvg from '../icons/normalized/gowalla-social-network-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gowalla-social-network-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender