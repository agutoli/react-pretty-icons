import React from 'react';
import iconSvg from '../icons/normalized/moon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__moon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender