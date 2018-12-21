import React from 'react';
import iconSvg from '../icons/normalized/xbox-controller-battery-full.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xbox-controller-battery-full" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender