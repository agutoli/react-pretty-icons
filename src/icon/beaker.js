import React from 'react';
import iconSvg from '../icons/normalized/beaker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__beaker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender