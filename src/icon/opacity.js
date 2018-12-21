import React from 'react';
import iconSvg from '../icons/normalized/opacity.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__opacity" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender