import React from 'react';
import iconSvg from '../icons/normalized/soundcloud.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__soundcloud" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender