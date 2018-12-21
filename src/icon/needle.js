import React from 'react';
import iconSvg from '../icons/normalized/needle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__needle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender