import React from 'react';
import iconSvg from '../icons/normalized/micro-sd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__micro-sd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender