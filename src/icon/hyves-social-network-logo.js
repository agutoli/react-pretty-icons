import React from 'react';
import iconSvg from '../icons/normalized/hyves-social-network-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hyves-social-network-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender