import React from 'react';
import iconSvg from '../icons/normalized/volume-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender