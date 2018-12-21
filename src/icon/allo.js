import React from 'react';
import iconSvg from '../icons/normalized/allo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__allo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender