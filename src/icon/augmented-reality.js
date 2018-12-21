import React from 'react';
import iconSvg from '../icons/normalized/augmented-reality.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__augmented-reality" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender