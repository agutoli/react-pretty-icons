import React from 'react';
import iconSvg from '../icons/normalized/screen.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__screen" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender