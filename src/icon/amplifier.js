import React from 'react';
import iconSvg from '../icons/normalized/amplifier.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__amplifier" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender