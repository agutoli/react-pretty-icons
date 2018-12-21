import React from 'react';
import iconSvg from '../icons/normalized/pirate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pirate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender