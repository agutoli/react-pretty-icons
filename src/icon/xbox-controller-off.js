import React from 'react';
import iconSvg from '../icons/normalized/xbox-controller-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xbox-controller-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender