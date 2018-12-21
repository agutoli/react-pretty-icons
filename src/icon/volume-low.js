import React from 'react';
import iconSvg from '../icons/normalized/volume-low.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume-low" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender