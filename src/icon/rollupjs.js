import React from 'react';
import iconSvg from '../icons/normalized/rollupjs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rollupjs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender