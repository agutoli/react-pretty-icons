import React from 'react';
import iconSvg from '../icons/normalized/microsoft-dynamics.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__microsoft-dynamics" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender