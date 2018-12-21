import React from 'react';
import iconSvg from '../icons/normalized/poker-chip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__poker-chip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender