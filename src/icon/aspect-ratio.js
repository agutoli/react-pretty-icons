import React from 'react';
import iconSvg from '../icons/normalized/aspect-ratio.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__aspect-ratio" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender