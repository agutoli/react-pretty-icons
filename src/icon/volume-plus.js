import React from 'react';
import iconSvg from '../icons/normalized/volume-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender