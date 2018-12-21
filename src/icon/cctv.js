import React from 'react';
import iconSvg from '../icons/normalized/cctv.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cctv" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender