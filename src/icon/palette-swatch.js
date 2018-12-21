import React from 'react';
import iconSvg from '../icons/normalized/palette-swatch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__palette-swatch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender