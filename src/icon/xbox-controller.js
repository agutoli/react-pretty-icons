import React from 'react';
import iconSvg from '../icons/normalized/xbox-controller.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xbox-controller" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender