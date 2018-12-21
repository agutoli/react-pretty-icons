import React from 'react';
import iconSvg from '../icons/normalized/set-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__set-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender