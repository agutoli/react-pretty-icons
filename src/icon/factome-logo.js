import React from 'react';
import iconSvg from '../icons/normalized/factome-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__factome-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender