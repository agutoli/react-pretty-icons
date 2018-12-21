import React from 'react';
import iconSvg from '../icons/normalized/mini-sd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mini-sd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender