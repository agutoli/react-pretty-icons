import React from 'react';
import iconSvg from '../icons/normalized/nintendo-switch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nintendo-switch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender