import React from 'react';
import iconSvg from '../icons/normalized/lighting-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lighting-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender