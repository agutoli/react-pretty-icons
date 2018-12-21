import React from 'react';
import iconSvg from '../icons/normalized/television-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__television-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender