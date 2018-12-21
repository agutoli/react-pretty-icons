import React from 'react';
import iconSvg from '../icons/normalized/volume-high.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume-high" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender