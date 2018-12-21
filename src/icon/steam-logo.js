import React from 'react';
import iconSvg from '../icons/normalized/steam-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__steam-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender