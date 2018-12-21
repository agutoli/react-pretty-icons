import React from 'react';
import iconSvg from '../icons/normalized/gesture-double-tap.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gesture-double-tap" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender