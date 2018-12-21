import React from 'react';
import iconSvg from '../icons/normalized/palette-advanced.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__palette-advanced" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender