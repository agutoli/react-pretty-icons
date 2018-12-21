import React from 'react';
import iconSvg from '../icons/normalized/parking.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__parking" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender