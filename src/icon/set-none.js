import React from 'react';
import iconSvg from '../icons/normalized/set-none.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__set-none" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender