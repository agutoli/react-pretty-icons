import React from 'react';
import iconSvg from '../icons/normalized/volume-medium.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume-medium" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender