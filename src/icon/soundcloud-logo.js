import React from 'react';
import iconSvg from '../icons/normalized/soundcloud-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__soundcloud-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender