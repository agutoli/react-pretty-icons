import React from 'react';
import iconSvg from '../icons/normalized/steam-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__steam-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender