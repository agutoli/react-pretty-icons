import React from 'react';
import iconSvg from '../icons/normalized/bulldozer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bulldozer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender