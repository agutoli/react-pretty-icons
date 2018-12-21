import React from 'react';
import iconSvg from '../icons/normalized/box-cutter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__box-cutter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender