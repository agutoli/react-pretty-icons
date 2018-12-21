import React from 'react';
import iconSvg from '../icons/normalized/chip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender