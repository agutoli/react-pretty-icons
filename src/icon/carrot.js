import React from 'react';
import iconSvg from '../icons/normalized/carrot.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__carrot" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender