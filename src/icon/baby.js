import React from 'react';
import iconSvg from '../icons/normalized/baby.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__baby" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender