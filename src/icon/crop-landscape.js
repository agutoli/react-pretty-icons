import React from 'react';
import iconSvg from '../icons/normalized/crop-landscape.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crop-landscape" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender