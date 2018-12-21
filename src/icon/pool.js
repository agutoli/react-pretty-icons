import React from 'react';
import iconSvg from '../icons/normalized/pool.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pool" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender