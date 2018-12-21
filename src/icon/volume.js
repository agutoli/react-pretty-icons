import React from 'react';
import iconSvg from '../icons/normalized/volume.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender