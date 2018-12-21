import React from 'react';
import iconSvg from '../icons/normalized/loupe.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__loupe" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender