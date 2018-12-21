import React from 'react';
import iconSvg from '../icons/normalized/sword.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sword" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender