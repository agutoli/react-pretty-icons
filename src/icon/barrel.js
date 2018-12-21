import React from 'react';
import iconSvg from '../icons/normalized/barrel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__barrel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender