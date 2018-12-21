import React from 'react';
import iconSvg from '../icons/normalized/palette.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__palette" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender