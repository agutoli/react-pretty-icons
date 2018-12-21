import React from 'react';
import iconSvg from '../icons/normalized/desktop-tower.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__desktop-tower" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender